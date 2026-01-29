import React from 'react';
import { motion } from 'framer-motion';
import { Smile, User, Star } from 'lucide-react';

function App() {
  return (
    <div className="bg-[#FAFAFA] text-forest min-h-screen font-sans">
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <span className="font-display text-2xl font-bold tracking-widest">WELLER</span>
        <div className="space-x-8 text-sm uppercase tracking-wider font-semibold">
          <a href="#" className="hover:text-sage transition">Praxis</a>
          <a href="#" className="hover:text-sage transition">Team</a>
          <a href="#" className="hover:text-sage transition">Kontakt</a>
        </div>
      </nav>

      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl mb-8"
        >
          Zeit für Ihr Lächeln.
        </motion.h1>
        <p className="max-w-xl text-lg text-gray-500 mb-12 leading-relaxed">
          Eine Zahnarztpraxis, die sich nicht wie eine anfühlt. <br/>
          Ruhig. Persönlich. Kompetent.
        </p>
        <div className="relative w-full max-w-4xl h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            className="w-full h-full object-cover"
            alt="Relaxed Atmosphere"
          />
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center px-6">
          <div className="space-y-4">
            <Smile className="w-12 h-12 mx-auto text-sage" />
            <h3 className="font-display text-2xl">Angstfrei</h3>
            <p className="text-gray-500">Wir nehmen uns Zeit für Sie. Keine Hektik, kein Schmerz.</p>
          </div>
          <div className="space-y-4">
            <User className="w-12 h-12 mx-auto text-sage" />
            <h3 className="font-display text-2xl">Familiär</h3>
            <p className="text-gray-500">Seit 20 Jahren in München. Wir kennen unsere Patienten.</p>
          </div>
          <div className="space-y-4">
            <Star className="w-12 h-12 mx-auto text-sage" />
            <h3 className="font-display text-2xl">Qualität</h3>
            <p className="text-gray-500">Meisterlabor im Haus für Zahnersatz, der passt.</p>
          </div>
        </div>
      </section>

      <footer className="bg-forest text-white py-12 text-center">
        <p className="font-display text-2xl mb-4">Praxis Weller</p>
        <p className="opacity-70 text-sm">München • Termine nach Vereinbarung</p>
      </footer>
    </div>
  );
}

export default App;
