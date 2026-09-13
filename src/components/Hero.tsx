import bannerImg from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 pt-12 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Left Content */}
      <div className="max-w-xl text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight mb-6">
          Build Your Ideal <br />
          <span className="brand-text-gradient">Development Stack</span>
        </h1>
        <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="#technologies"
            className="bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-pink-500/25 text-sm transition-all"
          >
            Explore Technologies
          </a>
          <button className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold px-7 py-3.5 rounded-xl text-sm transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Banner Image */}
      <div className="w-full lg:w-auto flex justify-center">
        <div className="relative w-72 sm:w-80 lg:w-[420px] aspect-square flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-purple-500/5 to-transparent rounded-3xl filter blur-2xl"></div>
          <img 
            src={bannerImg} 
            alt="Development Stack Banner"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

    </section>
  );
}