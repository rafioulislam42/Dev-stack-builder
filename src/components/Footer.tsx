import logoImg from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
        
        {/* Brand Info with Logo */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <img src={logoImg} alt="Dev Stack Logo" className="h-7 object-contain" />
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xs leading-relaxed mb-6">
            Curated tools, technologies, and resources for developers to build modern web stack.
          </p>
          <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
            <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
            <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Product Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Product</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Technologies</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Projects</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Company</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Legal</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-500">
            <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}