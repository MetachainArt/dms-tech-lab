'use client';

import { useOdyssey } from '@odysseyml/odyssey/react';
import { useRef, useEffect, useState } from 'react';

export default function OdysseyDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prompt, setPrompt] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  
  // Odyssey 훅 설정
  const odyssey = useOdyssey({
    apiKey: process.env.NEXT_PUBLIC_ODYSSEY_API_KEY || '', 
    handlers: {
      onConnected: (mediaStream) => {
        // 연결 성공 시 비디오 태그에 스트림 연결
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      },
      onStreamStarted: () => setIsStreaming(true),
      onStreamEnded: () => setIsStreaming(false),
      onError: (err) => console.error('Odyssey Error:', err),
    },
  });

  // 컴포넌트가 사라질 때 연결 종료
  useEffect(() => () => odyssey.disconnect(), [odyssey]);

  const handleSend = () => {
    if (!prompt) return;
    
    if (isStreaming) {
      odyssey.interact({ prompt }); // 이미 스트리밍 중이면 상호작용
    } else {
      odyssey.startStream({ prompt }); // 아니면 새로 시작
    }
    setPrompt('');
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-0 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full z-0 pointer-events-none" />

      <h1 className="text-4xl md:text-5xl font-bold mb-2 z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
        AI Fantasy Life
      </h1>
      <p className="text-gray-400 mb-8 z-10 text-lg">Real-time AI Video Generation</p>
      
      {/* 비디오 화면 */}
      <div className="relative w-full max-w-4xl aspect-video bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 group">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className="w-full h-full object-cover" 
        />
        
        {/* Status Indicator */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm border border-white/10 flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isStreaming ? 'bg-green-500 animate-pulse' : odyssey.status === 'connected' ? 'bg-blue-500' : 'bg-gray-500'}`} />
            <span className="uppercase tracking-wider text-xs font-semibold text-gray-300">
                {isStreaming ? 'STREAMING' : odyssey.status}
            </span>
        </div>

        {/* Overlay when disconnected */}
        {odyssey.status === 'disconnected' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button 
                  onClick={() => odyssey.connect()} 
                  className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
                >
                    <span>Connect Interface</span>
                </button>
            </div>
        )}
      </div>
      
      {/* Controls */}
      <div className="w-full max-w-4xl mt-8 z-10 space-y-4">
        
        <div className="flex gap-2">
            <div className="relative flex-1 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity" />
                <input 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Describe your fantasy world... (e.g. A cyberpunk city with neon lights)"
                  className="relative w-full px-6 py-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl focus:border-blue-500/50 outline-none text-white placeholder-gray-500 transition-colors"
                  disabled={odyssey.status === 'disconnected'}
                />
            </div>
            <button 
              onClick={handleSend}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all disabled:opacity-50 disabled:hover:shadow-none"
              disabled={odyssey.status === 'disconnected'}
            >
              Generate
            </button>
        </div>

        <div className="flex justify-end">
            <button 
              onClick={() => odyssey.endStream()} 
              disabled={odyssey.status === 'disconnected'}
              className="text-sm text-red-400 hover:text-red-300 underline disabled:opacity-0 transition-opacity"
            >
              Disconnect & End Session
            </button>
        </div>

      </div>
    </div>
  );
}
