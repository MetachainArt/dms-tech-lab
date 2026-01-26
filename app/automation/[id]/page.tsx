"use client";

import { use, useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { AUTOMATION_TEMPLATES } from "@/lib/automation-data";
import { ArrowLeft, Share2, CornerUpRight, Download, CheckCircle, Copy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Background from "@/components/ui/Background";

// Mocking use params for Client Component in Next.js 15+ (using React.use if needed, or props)
// Standard Next.js 15 App Router page receives params as promise
export default function TemplateDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { data: session } = useSession();
  const [template, setTemplate] = useState<typeof AUTOMATION_TEMPLATES[0] | null>(null);
  const [loading, setLoading] = useState(true);

  // Unwrap params using React.use()
  const { id } = use(params);

  useEffect(() => {
    const found = AUTOMATION_TEMPLATES.find(t => t.id === id);
    setTemplate(found || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <main className="w-full min-h-screen bg-[#0E0C15] text-white flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </main>
    );
  }

  if (!template) {
    return (
      <main className="w-full min-h-screen bg-[#0E0C15] text-white flex items-center justify-center">
        <div>Template not found</div>
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-[#0E0C15] text-white font-sans selection:bg-purple-500 selection:text-white">
      <Background />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32">
        {/* Back Link */}
        <Link href="/automation" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Templates
        </Link>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start mb-16 border-b border-white/10 pb-12">
            <div className="flex-1">
                {/* Icons Removed */}
                
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    {template.title}
                </h1>
                
                <div className="flex flex-wrap gap-4">
                    {session ? (
                         <a 
                            href="/downloads/SNS Shortform Auto WorkFlow.zip" 
                            download
                            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-bold text-white hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20 flex items-center gap-2"
                        >
                            <Download className="w-4 h-4" />
                            JSON Download
                        </a>
                    ) : (
                        <button 
                            onClick={() => signIn()}
                            className="px-6 py-3 bg-white/10 border border-white/10 rounded-lg font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Login to Download
                        </button>
                    )}

                    {/* Tags */}
                    <div className="px-4 py-3 rounded-lg border border-white/10 text-sm font-medium text-gray-300">
                        {template.category}
                    </div>
                </div>
            </div>
            
            {/* Visual / Screenshot Area */}
            <div className="w-full md:w-1/2 aspect-video bg-[#1A1D24] rounded-xl border border-white/10 overflow-hidden relative group">
                {template.detail.diagramImage ? (
                    <div className="w-full h-full relative">
                         <Image 
                            src={template.detail.diagramImage} 
                            alt={template.title + " Diagram"}
                            fill
                            className="object-cover"
                         />
                    </div>
                ) : (
                    <div className="w-full h-full bg-grid-white/[0.05]" />
                )}
            </div>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
            
            {/* Left Sidebar: Meta */}
            <div className="lg:col-span-3 space-y-8">
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Created By</h3>
                    <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
                            {template.author.name[0]}
                         </div>
                         <div>
                             <div className="font-bold flex items-center gap-1">
                                {template.author.name}
                                {template.author.verified && <CheckCircle className="w-3 h-3 text-blue-500 fill-current" />}
                             </div>
                             <div className="text-xs text-gray-500">Verified Creator</div>
                         </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Last Update</h3>
                    <p className="text-sm text-gray-300">{template.detail.lastUpdate}</p>
                </div>


            </div>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-16">
                
                {/* How it works */}
                <section>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        How it works
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                        {template.detail.descriptionLong}
                    </p>
                </section>

                {/* Key Features */}
                <section>
                    <h2 className="text-xl font-bold mb-6">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {template.detail.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/5">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                <div>
                                    <div className="text-gray-200 font-medium mb-1">{typeof feature === 'string' ? feature : feature.title}</div>
                                    {typeof feature !== 'string' && feature.description && (
                                        <div className="text-sm text-gray-400 whitespace-pre-wrap leading-relaxed">{feature.description}</div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Prerequisites */}
                {template.detail.prerequisites && (
                    <section>
                        <h2 className="text-xl font-bold mb-6">Prerequisites (선행 지식)</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {template.detail.prerequisites.map((req, i) => (
                                <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/5 text-gray-300">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                    <div>
                                        <div className="font-medium text-gray-200">{typeof req === 'string' ? req : req.title}</div>
                                        {typeof req !== 'string' && req.description && (
                                            <div className="text-sm text-gray-400 mt-1">{req.description}</div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Step by Step */}
                <section>
                    <h2 className="text-xl font-bold mb-8">Step-by-step</h2>
                    <div className="relative border-l border-white/10 ml-3 space-y-12">
                        {template.detail.steps.map((step, i) => (
                            <div key={i} className="pl-8 relative">
                                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-600 ring-4 ring-[#0E0C15]" />
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
      </div>
    </main>
  );
}
