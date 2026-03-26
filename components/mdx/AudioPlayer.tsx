"use client";

interface AudioPlayerProps {
  src: string;
  title?: string;
  description?: string;
}

export default function AudioPlayer({ src, title, description }: AudioPlayerProps) {
  return (
    <div className="my-8 rounded-[24px] border border-paperfolio-line bg-paperfolio-surface px-6 py-5">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-paperfolio-text text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div>
          {title && <p className="text-sm font-semibold text-paperfolio-text">{title}</p>}
          {description && <p className="text-xs text-paperfolio-text-muted">{description}</p>}
        </div>
      </div>
      <audio
        controls
        className="w-full"
        style={{ height: "36px", accentColor: "#1a1a2e" }}
      >
        <source src={src} type="audio/mpeg" />
        <source src={src} type="audio/wav" />
        브라우저가 오디오를 지원하지 않습니다.
      </audio>
    </div>
  );
}
