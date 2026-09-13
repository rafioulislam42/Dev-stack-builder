import type { TechItem } from '../types/tech';

interface SidebarProps {
  selectedStack: TechItem[];
  onRemove: (id: string, name: string) => void;
  onRemoveAll: () => void;
}

export default function Sidebar({ selectedStack, onRemove, onRemoveAll }: SidebarProps) {
  return (
    <div className="w-full md:w-80 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm sticky top-24">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="text-xs text-slate-400 mb-4">{selectedStack.length} Technology Selected</p>

      <div className="flex flex-col gap-2 min-h-[100px]">
        {selectedStack.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs border-2 border-dashed border-slate-200 rounded-xl">
            No technologies selected yet.
          </div>
        ) : (
          selectedStack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-slate-50">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <div className="text-xs font-bold text-slate-800">{item.name}</div>
                  <div className="text-[10px] text-slate-400 font-medium">{item.category}</div>
                </div>
              </div>
              <button
                className="text-slate-400 hover:text-red-500 font-bold text-sm px-1 transition-colors"
                onClick={() => onRemove(item.id, item.name)}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {selectedStack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-4 border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold py-2.5 rounded-xl transition-colors"
        >
          Remove All
        </button>
      )}
    </div>
  );
}