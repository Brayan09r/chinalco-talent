import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-[#001832] p-5 px-10 flex justify-between items-center text-white shadow-xl">
        <div className="font-bold text-2xl">CHINALCO <span className="text-[#D36422]">TALENT HUB</span></div>
        <div className="hidden md:flex gap-8 text-sm font-semibold opacity-70">
          <span>HUANCAYO</span>
          <span>PROGRAMA TRAINEE 2026</span>
        </div>
      </nav>

      <main className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        <div className="flex-1 p-10 lg:p-24 flex flex-col justify-center bg-white">
          <span className="text-[#D36422] font-bold tracking-widest mb-4">PLATAFORMA UNIVERSITARIA</span>
          <h1 className="text-5xl lg:text-6xl font-black text-[#001832] leading-none mb-6">
            Ingeniería de <br/> <span className="text-[#D36422]">Futuro.</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-md">
            Convierte tus proyectos universitarios en un CV profesional optimizado por Inteligencia Artificial y conéctate directo con RRHH de Toromocho.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <Link href="/postulante" className="bg-[#D36422] text-white p-5 rounded-xl font-bold hover:scale-105 transition-all text-center shadow-lg">
              ARMADOR DE CV (IA)
              <span className="block text-xs font-normal opacity-80 mt-1">Crea tu perfil con foto</span>
            </Link>
            <Link href="/dashboard" className="bg-[#001832] text-white p-5 rounded-xl font-bold hover:scale-105 transition-all text-center shadow-lg">
              PANEL EMPRESA
              <span className="block text-xs font-normal opacity-80 mt-1">Simulador de RRHH</span>
            </Link>
          </div>
          
          <Link href="/presentacion" className="border-2 border-[#0055AF] text-[#0055AF] p-4 rounded-xl font-bold hover:bg-[#0055AF] hover:text-white transition-all text-center flex items-center justify-center gap-3">
             <span>📖</span> VER PITCH DEL PROYECTO
          </Link>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-[#001832]/10 z-10"></div>
          <img src="https://www.chinalco.com.pe/sites/default/files/styles/slider_home/public/2021-08/slider-home-1_0.jpg" 
               className="h-full w-full object-cover" alt="Mina Chinalco" />
        </div>
      </main>
    </div>
  );
}