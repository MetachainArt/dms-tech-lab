"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="w-full border-t border-gray-200 bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h4 className="font-playfair font-bold text-black text-2xl mb-4">Reedo</h4>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              복잡한 일은 줄이고, 필요한 건 직접 만듭니다.<br />
              AI 자동화, 3D 설계, 실무형 교육.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-semibold text-black mb-4 text-sm uppercase tracking-wider">메뉴</h5>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li><Link href="/#intro" className="hover:text-black transition-colors">소개</Link></li>
              <li><Link href="/#what-i-do" className="hover:text-black transition-colors">하는 일</Link></li>
              <li><Link href="/#selected-works" className="hover:text-black transition-colors">작업</Link></li>
              <li><Link href="/blog" className="hover:text-black transition-colors">글</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="font-semibold text-black mb-4 text-sm uppercase tracking-wider">연결하기</h5>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white text-gray-600 transition-all text-sm font-bold"
              >
                IG
              </a>
              <a
                href="https://youtube.com/@reedoinvest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white text-gray-600 transition-all text-sm font-bold"
              >
                YT
              </a>
              <a
                href="https://open.kakao.com/o/sSPHn33g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-[#FEE500] hover:border-[#FEE500] hover:text-[#3C1E1E] text-gray-600 transition-all text-sm font-bold"
              >
                KT
              </a>
            </div>
            <p className="text-gray-400 text-xs mt-4 font-mono">Reedo</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Reedo. 필요한 것을 직접 만드는 작업실.
          </p>
          <div className="flex gap-6 text-gray-400 text-xs font-mono">
            <Link href="/privacy" className="hover:text-black transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-black transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
