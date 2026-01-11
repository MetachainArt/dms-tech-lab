export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/40 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-bold text-white mb-2">DMS SOLUTION</h4>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} DMS Solution. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6 text-white/40 text-sm font-mono">
          <a href="#" className="hover:text-white transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-white transition-colors">TERMS</a>
          <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
        </div>
      </div>
    </footer>
  );
}
