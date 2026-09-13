import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import type { TechItem } from './types/tech';

export default function App() {
  const [technologies, setTechnologies] = useState<TechItem[]>([]);
  const [selectedStack, setSelectedStack] = useState<TechItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load JSON Data from public folder
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load JSON');
        return res.json();
      })
      .then((data: TechItem[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error('Failed to load technology data!');
        setLoading(false);
      });
  }, []);

  // Add Item to Stack
  const addToStack = (item: TechItem) => {
    const isExist = selectedStack.some((t) => t.id === item.id);
    if (isExist) {
      toast.warning(`${item.name} is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, item]);
    toast.success(`Added ${item.name} to stack!`);
  };

  // Remove Single Item
  const removeFromStack = (id: string, name: string) => {
    setSelectedStack(selectedStack.filter((tech) => tech.id !== id));
    toast.info(`Removed ${name} from stack.`);
  };

  // Remove All Items
  const removeAll = () => {
    setSelectedStack([]);
    toast.error('Cleared all technologies from stack!');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      <ToastContainer position="top-right" autoClose={2000} />

      <div>
        <Navbar />
        <Hero />

        <main className="max-w-7xl mx-auto px-4 md:px-12 py-10">
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-900">
              Explore the <span className="brand-text-gradient">Technologies</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">Select technologies to curate your project stack.</p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-3">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-pink-500 rounded-full animate-spin"></div>
              <p className="text-slate-500 font-medium text-sm">Loading Technologies...</p>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8 items-start">
              
              {/* Tech Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 w-full">
                {technologies.map((tech) => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={selectedStack.some((t) => t.id === tech.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>

              {/* Sidebar Component */}
              <Sidebar
                selectedStack={selectedStack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}