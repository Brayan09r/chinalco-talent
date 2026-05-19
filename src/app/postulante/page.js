'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ChatConIAAvanzada() {
  const [mensaje, setMensaje] = useState('');
  const [step, setStep] = useState(0);
  const [plantilla, setPlantilla] = useState(null);
  
  // Súperpoder 1: El Score de Empleabilidad
  const [score, setScore] = useState(45); // Empieza bajo porque le falta data
  const [fotoURL, setFotoURL] = useState(null);
  const [escribiendo, setEscribiendo] = useState(false);

  const [chat, setChat] = useState([
    { emisor: 'ia', texto: '¡Hola! Soy la IA de Chinalco. Para armar tu CV estructurado, cuéntame: ¿Qué proyecto académico tecnológico o sistema complejo has desarrollado recientemente en la universidad?' }
  ]);

  const [cvData, setCvData] = useState({
    nombre: "BRAYAN RONALDO",
    perfil: "Soy estudiante de sistemas y me gusta programar. Hice un proyecto de un banco para la universidad.",
    experiencia: "• Hice un portal bancario.\n• Usé Next.js y Django.\n• Fui el líder del grupo.",
    habilidades: "Programación, Trabajo en equipo"
  });

  const [miniMensaje, setMiniMensaje] = useState('');
  const [miniChat, setMiniChat] = useState([
    { emisor: 'ia', texto: 'Aquí está tu borrador inicial. Te sugiero usar el botón "✨ Mejorar con IA" en tu perfil para que suene más profesional para la minería.' }
  ]);

  // Súperpoder 3: Botón Mágico de Redacción
  const [mejorandoPerfil, setMejorandoPerfil] = useState(false);
  const [mejorandoExp, setMejorandoExp] = useState(false);

  const simularSubidaFoto = () => {
    setFotoURL("https://ui-avatars.com/api/?name=Brayan+Ronaldo&background=001832&color=fff&size=256&font-size=0.33");
    setScore(prev => Math.min(prev + 15, 100)); // Sube el score al poner foto formal
    setMiniChat(prev => [...prev, { emisor: 'ia', texto: '¡Excelente foto! Tu Score de Empleabilidad ha subido un 15%.' }]);
  };

  const simularMejoraIA = (campo) => {
    if (campo === 'perfil') {
      setMejorandoPerfil(true);
      setTimeout(() => {
        setCvData({...cvData, perfil: "Profesional en formación de Ingeniería de Sistemas con sólida orientación a resultados. Apasionado por el desarrollo de arquitecturas de software robustas y la optimización de procesos operativos aplicables al sector minero 4.0."});
        setMejorandoPerfil(false);
        setScore(prev => Math.min(prev + 20, 100));
      }, 1500);
    } else {
      setMejorandoExp(true);
      setTimeout(() => {
        setCvData({...cvData, experiencia: "• Arquitectura de Software: Diseño y desarrollo de un Portal Bancario transaccional.\n• Stack Tecnológico: Implementación de frontend con Next.js y backend escalable con Django y Supabase.\n• Liderazgo Ágil: Gestión de equipo multidisciplinario orientando el proyecto hacia la resolución de problemas reales."});
        setMejorandoExp(false);
        setScore(prev => Math.min(prev + 15, 100));
      }, 1500);
    }
  };

  const simularEleccionPlantilla = (tipo) => {
    setPlantilla(tipo);
    setStep(3);
    setScore(65); // Al tener la plantilla estructurada, sube el score
  };

  const agregarHabilidadRapida = (skill) => {
    setCvData(prev => ({...prev, habilidades: prev.habilidades + `, ${skill}`}));
    setScore(prev => Math.min(prev + 5, 100));
    setMiniChat(prev => [...prev, { emisor: 'ia', texto: `He agregado "${skill}" a tu perfil. ¡Tu perfil es más fuerte ahora!` }]);
  };

  const manejarEnvioChatPrincipal = (e) => {
    e.preventDefault();
    if (!mensaje) return;
    setChat([...chat, { emisor: 'user', texto: mensaje }]);
    setMensaje('');
    setEscribiendo(true);

    setTimeout(() => {
      setEscribiendo(false);
      if (step === 0) {
        setChat(prev => [...prev, { emisor: 'ia', texto: '¡Espectacular! Ese tipo de arquitectura de software es muy útil aquí. ¿Has participado en exposiciones o liderado equipos?' }]);
        setStep(1);
      } else if (step === 1) {
        setChat(prev => [...prev, { emisor: 'ia', texto: '¡Anotado! He convertido todo esto en experiencia válida. Elige tu plantilla para generar el CV:' }]);
        setStep(2);
      }
    }, 1500);
  };

  const manejarEnvioMiniChat = (e) => {
    e.preventDefault();
    if (!miniMensaje) return;
    setMiniChat([...miniChat, { emisor: 'user', texto: miniMensaje }]);
    const peticion = miniMensaje.toLowerCase();
    setMiniMensaje('');

    setTimeout(() => {
      if (peticion.includes("python") || peticion.includes("sql") || peticion.includes("c#")) {
        setCvData(prev => ({...prev, habilidades: prev.habilidades + ", Python, SQL Server, C#"}));
        setScore(prev => Math.min(prev + 10, 100));
        setMiniChat(prev => [...prev, { emisor: 'ia', texto: 'He añadido tus conocimientos de programación. ¡Excelente perfil técnico!' }]);
      } else {
        setMiniChat(prev => [...prev, { emisor: 'ia', texto: 'He realizado el ajuste en el documento. Revisa cómo quedó.' }]);
      }
    }, 1000);
  };

  return (
    <div className="h-screen bg-[#f1f5f9] flex flex-col font-sans">
      <nav className="bg-[#001832] p-4 px-8 text-white flex justify-between shadow-lg z-10">
        <Link href="/" className="font-bold text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
           <span>←</span> SALIR
        </Link>
        <div className="flex items-center gap-4">
            <span className="bg-[#D36422]/20 text-[#D36422] border border-[#D36422] px-3 py-1 rounded-full text-xs font-black tracking-widest">
              MOTOR IA ACTIVO
            </span>
        </div>
      </nav>

      <div className="flex-grow flex p-4 lg:p-6 gap-6 max-w-[1400px] mx-auto w-full overflow-hidden">
        
        {/* ==========================================
            FASE 1: ENTREVISTA (PASOS 0-2)
            ========================================== */}
        {step < 3 && (
          <div className="flex-grow bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden max-w-4xl mx-auto w-full">
            <div className="bg-slate-50 p-6 border-b flex justify-between items-center">
              <div>
                <p className="font-black text-[#001832] text-xl">Extracción de Talento Oculto</p>
                <p className="text-sm text-slate-500">No necesitas experiencia previa, nuestra IA redacta por ti.</p>
              </div>
              {/* Barra de progreso visual */}
              <div className="flex gap-2">
                  <div className={`w-8 h-2 rounded-full ${step >= 0 ? 'bg-[#D36422]' : 'bg-slate-200'}`}></div>
                  <div className={`w-8 h-2 rounded-full ${step >= 1 ? 'bg-[#D36422]' : 'bg-slate-200'}`}></div>
                  <div className={`w-8 h-2 rounded-full ${step >= 2 ? 'bg-[#D36422]' : 'bg-slate-200'}`}></div>
              </div>
            </div>
            
            <div className="flex-grow p-8 overflow-y-auto space-y-6 bg-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
              {chat.map((m, i) => (
                <div key={i} className={`p-5 rounded-2xl max-w-[85%] text-[15px] leading-relaxed shadow-sm ${m.emisor === 'ia' ? 'bg-slate-50 text-slate-800 self-start border border-slate-200 rounded-tl-sm' : 'bg-[#0055AF] text-white self-end rounded-tr-sm ml-auto'}`}>
                  {m.texto}
                </div>
              ))}
              
              {escribiendo && (
                <div className="p-5 rounded-2xl bg-slate-50 text-slate-500 self-start border border-slate-200 w-24 rounded-tl-sm flex gap-2">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></span>
                </div>
              )}

              {step === 2 && (
                <div className="flex gap-4 p-4 animate-in fade-in slide-in-from-bottom-4">
                  <button onClick={() => simularEleccionPlantilla('Ingeniería IT')} className="flex-1 bg-white border-2 border-[#0055AF] rounded-xl p-6 hover:bg-[#0055AF]/5 hover:scale-105 transition-all text-left group shadow-lg">
                    <div className="text-4xl mb-4">💻</div>
                    <p className="font-black text-lg text-[#001832] group-hover:text-[#0055AF]">Perfil Ingeniería</p>
                    <p className="text-xs text-slate-500 mt-2">Enfocado en stack tecnológico, lenguajes y arquitectura.</p>
                  </button>
                  <button onClick={() => simularEleccionPlantilla('Gestión')} className="flex-1 bg-white border-2 border-[#D36422] rounded-xl p-6 hover:bg-[#D36422]/5 hover:scale-105 transition-all text-left group shadow-lg">
                    <div className="text-4xl mb-4">📊</div>
                    <p className="font-black text-lg text-[#001832] group-hover:text-[#D36422]">Perfil Gestión</p>
                    <p className="text-xs text-slate-500 mt-2">Enfocado en liderazgo, metodologías ágiles y proyectos.</p>
                  </button>
                </div>
              )}
            </div>
            {(step === 0 || step === 1) && (
              <form onSubmit={manejarEnvioChatPrincipal} className="p-6 bg-white border-t shadow-[0_-10px_20px_rgba(0,0,0,0.02)] flex gap-3">
                  <input className="flex-grow border-2 border-slate-200 rounded-xl p-4 outline-none focus:border-[#D36422] text-lg bg-slate-50 transition-colors" placeholder="Escribe tu respuesta aquí..." value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
                  <button className="bg-[#D36422] text-white px-10 rounded-xl font-black hover:bg-[#b0521c] transition-colors shadow-md">ENVIAR</button>
              </form>
            )}
          </div>
        )}

        {/* ==========================================
            FASE 2: EDITOR IA (PASOS 3+) - ¡AQUÍ ESTÁ LA MAGIA!
            ========================================== */}
        {step >= 3 && (
          <div className="flex w-full gap-6 h-full animate-in fade-in zoom-in-95 duration-500">
            
            {/* PANEL IZQUIERDO: EL DOCUMENTO INTERACTIVO */}
            <div className="flex-[2] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden relative">
              <div className="bg-[#001832] p-4 text-white flex justify-between items-center">
                <span className="font-bold flex items-center gap-2">📄 Vista Previa Inteligente</span>
                <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">Plantilla: {plantilla}</span>
              </div>
              
              <div className="flex-grow p-10 overflow-y-auto bg-slate-200">
                <div className="bg-white p-12 shadow-xl min-h-full font-serif text-slate-800 relative group">
                   
                   {/* Header CV con Foto */}
                   <div className="flex items-center gap-8 mb-10 border-b-2 border-slate-100 pb-8">
                     <div onClick={simularSubidaFoto} className="w-32 h-32 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center cursor-pointer hover:border-[#D36422] transition-colors overflow-hidden relative group/foto">
                       {fotoURL ? (
                         <img src={fotoURL} alt="Perfil" className="w-full h-full object-cover" />
                       ) : (
                         <>
                           <span className="text-4xl text-slate-300 group-hover/foto:text-[#D36422] mb-1">📷</span>
                           <span className="text-[10px] font-bold text-slate-400 group-hover/foto:text-[#D36422] text-center px-2">Clic para Foto</span>
                         </>
                       )}
                     </div>
                     <div className="flex-grow">
                       <input className="text-4xl font-black text-[#001832] w-full border-b border-transparent hover:border-slate-200 focus:border-[#D36422] outline-none mb-2 transition-colors uppercase tracking-tight" value={cvData.nombre} onChange={(e) => setCvData({...cvData, nombre: e.target.value})} />
                       <p className="text-lg font-bold text-[#D36422]">Ingeniería de Sistemas e Informática</p>
                       <p className="text-sm text-slate-500 mt-1 font-sans">Universidad Continental • Huancayo, Perú</p>
                     </div>
                   </div>
                   
                   {/* Sección Perfil + Botón Mágico */}
                   <div className="relative mb-8 group/seccion">
                     <div className="flex justify-between items-end mb-2">
                        <p className="text-sm font-black text-[#D36422] uppercase tracking-widest">Perfil Profesional</p>
                        {/* BOTÓN MÁGICO 1 */}
                        <button onClick={() => simularMejoraIA('perfil')} disabled={mejorandoPerfil} className="text-xs bg-gradient-to-r from-[#0055AF] to-purple-600 text-white px-3 py-1.5 rounded-lg font-bold shadow-md hover:scale-105 transition-transform flex items-center gap-1 disabled:opacity-50">
                          {mejorandoPerfil ? '⏳ Optimizando...' : '✨ Mejorar Redacción con IA'}
                        </button>
                     </div>
                     <textarea className={`w-full h-24 resize-none outline-none border border-transparent hover:border-slate-200 focus:border-[#D36422] rounded-lg p-2 transition-colors leading-relaxed ${mejorandoPerfil ? 'animate-pulse text-purple-700 bg-purple-50' : ''}`} value={cvData.perfil} onChange={(e) => setCvData({...cvData, perfil: e.target.value})} />
                   </div>

                   {/* Sección Experiencia + Botón Mágico */}
                   <div className="relative mb-8 group/seccion">
                     <div className="flex justify-between items-end mb-2">
                        <p className="text-sm font-black text-[#D36422] uppercase tracking-widest">Proyectos Académicos y Logros</p>
                        {/* BOTÓN MÁGICO 2 */}
                        <button onClick={() => simularMejoraIA('exp')} disabled={mejorandoExp} className="text-xs bg-gradient-to-r from-[#0055AF] to-purple-600 text-white px-3 py-1.5 rounded-lg font-bold shadow-md hover:scale-105 transition-transform flex items-center gap-1 disabled:opacity-50">
                          {mejorandoExp ? '⏳ Reestructurando...' : '✨ Mejorar Viñetas con IA'}
                        </button>
                     </div>
                     <textarea className={`w-full h-32 resize-none outline-none border border-transparent hover:border-slate-200 focus:border-[#D36422] rounded-lg p-2 transition-colors leading-relaxed ${mejorandoExp ? 'animate-pulse text-purple-700 bg-purple-50' : ''}`} value={cvData.experiencia} onChange={(e) => setCvData({...cvData, experiencia: e.target.value})} />
                   </div>

                   {/* Sección Habilidades */}
                   <div>
                     <p className="text-sm font-black text-[#D36422] uppercase tracking-widest mb-2">Stack Tecnológico y Habilidades</p>
                     <textarea className="w-full h-16 resize-none outline-none border border-transparent hover:border-slate-200 focus:border-[#D36422] rounded-lg p-2 transition-colors font-sans text-sm font-bold text-[#001832]" value={cvData.habilidades} onChange={(e) => setCvData({...cvData, habilidades: e.target.value})} />
                   </div>
                </div>
              </div>
            </div>

            {/* PANEL DERECHO: MÉTRICAS Y ASISTENTE */}
            <div className="flex-1 flex flex-col gap-6">
              
              {/* SÚPER PODER 1: MEDIDOR DE IMPACTO (GAMIFICACIÓN) */}
              <div className="bg-white rounded-2xl shadow-xl border p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-100"><div className="h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 transition-all duration-1000" style={{width: `${score}%`}}></div></div>
                <h3 className="font-black text-[#001832] mb-1 mt-2">Score Empleabilidad Minera</h3>
                <p className="text-xs text-slate-500 mb-4">Probabilidad de Match en Chinalco</p>
                <div className="flex justify-center items-center gap-4">
                  <div className={`text-6xl font-black ${score > 80 ? 'text-green-500' : score > 50 ? 'text-yellow-500' : 'text-red-500'} transition-colors`}>{score}%</div>
                </div>
                {score < 90 && <p className="text-xs font-bold text-[#D36422] mt-4">💡 Tip: Usa el botón "✨ Mejorar con IA" o añade una foto formal para subir tu score.</p>}
              </div>

              {/* SÚPER PODER 2: CHAT + SUGERENCIAS PREDICTIVAS */}
              <div className="flex-grow bg-white rounded-2xl shadow-xl border flex flex-col overflow-hidden">
                <div className="bg-[#D36422] p-4 text-white font-bold flex justify-between items-center">
                  <span>🤖 Asistente Copilot</span>
                </div>
                
                <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50">
                  {miniChat.map((m, i) => (
                    <div key={i} className={`p-3 rounded-xl text-sm leading-relaxed shadow-sm border ${m.emisor === 'ia' ? 'bg-white text-slate-700 self-start border-slate-200' : 'bg-[#001832] text-white self-end border-[#001832]'}`}>
                      {m.texto}
                    </div>
                  ))}
                </div>

                {/* Chips de Sugerencias IA */}
                <div className="p-3 bg-white border-t border-slate-100">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Sugerencias IA para Sistemas:</p>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => agregarHabilidadRapida('Power BI')} className="text-xs bg-slate-100 hover:bg-blue-100 text-[#0055AF] px-3 py-1.5 rounded-full font-bold transition-colors">+ Power BI</button>
                    <button onClick={() => agregarHabilidadRapida('Metodologías Ágiles')} className="text-xs bg-slate-100 hover:bg-blue-100 text-[#0055AF] px-3 py-1.5 rounded-full font-bold transition-colors">+ Metodologías Ágiles</button>
                    <button onClick={() => agregarHabilidadRapida('Supabase')} className="text-xs bg-slate-100 hover:bg-blue-100 text-[#0055AF] px-3 py-1.5 rounded-full font-bold transition-colors">+ Supabase</button>
                  </div>
                </div>

                <form onSubmit={manejarEnvioMiniChat} className="p-3 bg-white border-t flex gap-2">
                    <input className="flex-grow border-2 border-slate-200 rounded-xl p-3 text-sm outline-none focus:border-[#D36422]" placeholder='Ej: "Añade C#"' value={miniMensaje} onChange={(e) => setMiniMensaje(e.target.value)} />
                    <button className="bg-[#001832] text-white px-4 rounded-xl text-sm font-black hover:bg-[#D36422] transition-colors">→</button>
                </form>
              </div>

              {step === 3 ? (
                <button onClick={() => setStep(4)} className={`w-full text-white p-5 rounded-2xl font-black text-lg shadow-xl transition-all hover:scale-105 ${score >= 80 ? 'bg-green-600 hover:bg-green-700 shadow-green-500/30' : 'bg-[#0055AF] hover:bg-blue-700'}`}>
                  ✓ {score >= 80 ? 'ENVIAR CV ESTRELLA' : 'ENVIAR CV A CHINALCO'}
                </button>
              ) : (
                <div className="w-full bg-[#001832] text-green-400 p-5 rounded-2xl font-black text-center shadow-xl border-2 border-green-500 flex flex-col items-center justify-center">
                  <span className="text-2xl mb-1">✅</span>
                  ¡POSTULACIÓN EXITOSA!
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}