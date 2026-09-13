import type { TechItem } from '../types/tech';

interface TechCardProps {
  tech: TechItem;
  isAdded: boolean;
  onAdd: (item: TechItem) => void;
}

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow">
      <span className="absolute top-4 right-4 bg-sky-50 text-sky-700 border border-sky-200 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
        {tech.badge}
      </span>

      <div>
        <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-4 object-contain" />
        <h3 className="text-lg font-bold text-slate-900 mb-1">{tech.name}</h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-4 min-h-[36px]">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3 mb-4">
          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold text-[11px]">{tech.category}</span>
          <span className="font-medium">{tech.difficulty}</span>
          <span className="text-amber-500 font-bold">★ {tech.rating}</span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
            isAdded 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200' 
              : 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}