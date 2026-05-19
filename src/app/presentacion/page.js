import Link from 'next/link';

export default function PresentacionPitchCompleta() {
  return (
    <div className="min-h-screen bg-[#001832] text-white font-sans overflow-y-auto">
      {/* NAVBAR */}
      <nav className="p-6 px-10 flex justify-between items-center border-b border-white/10 sticky top-0 bg-[#001832]/90 backdrop-blur-md z-50">
        <div className="font-black text-xl tracking-widest">
          CHINALCO <span className="text-[#D36422]">TALENT</span>
        </div>
        <Link href="/" className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full font-bold transition-colors text-sm">
          ← VOLVER AL PROTOTIPO
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto p-8 md:p-10 space-y-32 py-20">
        
        {/* 1. PORTADA */}
        <section className="text-center space-y-6">
          <p className="text-[#D36422] font-bold tracking-[0.3em] uppercase">Proyecto Innovación HR</p>
          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            Smart Talent <br/><span className="text-[#D36422]">Chinalco</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Plataforma de reclutamiento inteligente impulsada por IA Generativa para la minería del futuro.
          </p>
          <div className="flex justify-center gap-4 flex-wrap pt-8">
            <span className="bg-[#0055AF]/30 text-[#0055AF] border border-[#0055AF] px-4 py-2 rounded-lg font-bold">IA Generativa</span>
            <span className="bg-[#0055AF]/30 text-[#0055AF] border border-[#0055AF] px-4 py-2 rounded-lg font-bold">NLP Search</span>
            <span className="bg-[#0055AF]/30 text-[#0055AF] border border-[#0055AF] px-4 py-2 rounded-lg font-bold">Optimizado Toromocho</span>
          </div>
        </section>

        {/* 2. EL DESAFÍO EN TOROMOCHO */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 border-l-4 border-[#D36422] pl-6">El Desafío en Toromocho</h2>
            <p className="text-lg text-slate-300 mb-8">La captación de talento en operaciones mineras a 4,500 msnm presenta fricciones críticas:</p>
            <ul className="space-y-6 text-slate-300">
              <li className="flex gap-4"><span className="text-[#D36422] text-2xl">■</span> <div><strong>Carga Operativa:</strong> Cientos de CVs en formatos no estructurados que retrasan la selección.</div></li>
              <li className="flex gap-4"><span className="text-[#D36422] text-2xl">▲</span> <div><strong>Falta de Especificidad:</strong> Dificultad para validar horas máquina y licencias especializadas rápidamente.</div></li>
              <li className="flex gap-4"><span className="text-[#D36422] text-2xl">●</span> <div><strong>Brecha Digital:</strong> Postulantes con gran experiencia técnica pero dificultad para redactar CVs profesionales.</div></li>
            </ul>
          </div>
          <div className="bg-[#D36422] p-12 rounded-3xl text-center shadow-[0_0_50px_rgba(211,100,34,0.3)] border border-orange-400">
            <div className="text-8xl font-black">40%</div>
            <div className="text-xl font-bold uppercase tracking-widest mt-4">Tiempo perdido en<br/>filtrado manual</div>
          </div>
        </section>

        {/* 3. MODELO DE INTERFACES (POSTULANTE) */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-black mb-4">Portal del Postulante</h2>
            <p className="text-slate-400 text-lg">Visualización del flujo de usuario: postulación asistida y estandarización.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-[#D36422] mb-4">Acceso Simplificado</h3>
              <p className="text-sm text-slate-300">Validación mediante DNI para evitar duplicidad de datos y recuperar perfiles previos automáticamente.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-[#D36422] mb-4">Chatbot Proactivo</h3>
              <p className="text-sm text-slate-300">La IA no solo recibe información, la <strong>extrae</strong>. Valida certificaciones de seguridad, calcula años de experiencia y estructura logros.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-[#D36422] mb-4">Generación Real-Time</h3>
              <p className="text-sm text-slate-300">Estandarización total. Construye un CV oficial y exporta automáticamente a PDF y base de datos para RRHH.</p>
            </div>
          </div>
        </section>

        {/* 4. BUSCADOR IA Y PANEL RRHH */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-10 text-9xl">🔍</div>
          <h2 className="text-4xl font-black mb-6 border-l-4 border-[#0055AF] pl-6 relative z-10">Buscador con IA (NLP)</h2>
          <p className="text-slate-300 text-lg mb-8 relative z-10">La tecnología de Procesamiento de Lenguaje Natural (NLP) elimina la necesidad de filtros manuales complejos, permitiendo hablarle a la base de datos.</p>
          
          <div className="bg-[#001832] p-6 rounded-xl border border-[#0055AF]/50 mb-8 font-mono text-[#D36422] text-lg relative z-10">
            "Busco un operador con licencia A3C, experiencia en tajo abierto y récord limpio"
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 relative z-10">
            <div className="bg-[#0055AF]/20 border border-[#0055AF] p-4 rounded-xl flex justify-between items-center">
              <span className="font-bold">Perfil: Juan Pérez</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-black">MATCH: 95%</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex justify-between items-center text-slate-300">
              <span>Perfil: Carlos Ruiz</span>
              <span className="text-xs font-bold">MATCH: 88%</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex justify-between items-center text-slate-300">
              <span>Perfil: Ana Gómez</span>
              <span className="text-xs font-bold">MATCH: 82%</span>
            </div>
          </div>
        </section>

        {/* 5. ALGORITMO DE MATCH CHINALCO (¡LO QUE FALTABA!) */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#D36422]/20 border-b border-[#D36422]/30">
                  <tr>
                    <th className="p-5 font-bold text-[#D36422]">CRITERIOS DE EVALUACIÓN</th>
                    <th className="p-5 text-center font-bold text-[#D36422]">VERIFICADO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-300">
                  <tr>
                    <td className="p-5">Horas de Vuelo / Máquina</td>
                    <td className="p-5 text-center text-green-400 text-xl">✓ Sí</td>
                  </tr>
                  <tr>
                    <td className="p-5">Certificaciones de Seguridad</td>
                    <td className="p-5 text-center text-green-400 text-xl">✓ Sí</td>
                  </tr>
                  <tr>
                    <td className="p-5">Experiencia en Gran Altura</td>
                    <td className="p-5 text-center text-green-400 text-xl">✓ Sí</td>
                  </tr>
                  <tr>
                    <td className="p-5">Antecedentes Conductuales</td>
                    <td className="p-5 text-center text-green-400 text-xl">✓ Sí</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="order-1 md:order-2 text-center md:text-right">
            <h2 className="text-4xl font-black mb-4">Algoritmo de Match Chinalco</h2>
            <p className="text-slate-400 text-lg mb-6">Puntuación basada en el perfil ideal del puesto, asegurando cero riesgos operativos.</p>
            <div className="inline-block text-center border-4 border-[#0055AF] p-8 rounded-full">
              <div className="text-6xl font-black text-[#0055AF]">95%</div>
              <div className="text-xs font-bold uppercase tracking-widest mt-2">Precisión en Selección</div>
            </div>
          </div>
        </section>

        {/* 6. CRONOGRAMA DE IMPLEMENTACIÓN (¡LO QUE FALTABA!) */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">Cronograma de Implementación</h2>
            <p className="text-slate-400 text-lg">Hoja de ruta para el despliegue tecnológico.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-[#002855] p-6 rounded-2xl border-t-4 border-[#D36422] relative">
              <div className="absolute -top-4 left-6 bg-[#D36422] w-8 h-8 rounded-full flex items-center justify-center font-black">1</div>
              <h3 className="font-bold text-xl mb-2 mt-4">Fase 1: UI/UX</h3>
              <p className="text-sm text-slate-400">Diseño final de pantallas y flujos <br/>(2 semanas).</p>
            </div>
            
            <div className="bg-[#002855] p-6 rounded-2xl border-t-4 border-[#D36422] relative">
              <div className="absolute -top-4 left-6 bg-[#D36422] w-8 h-8 rounded-full flex items-center justify-center font-black">2</div>
              <h3 className="font-bold text-xl mb-2 mt-4">Fase 2: Backend</h3>
              <p className="text-sm text-slate-400">Integración de LLM y Base de Datos <br/>(4 semanas).</p>
            </div>
            
            <div className="bg-[#002855] p-6 rounded-2xl border-t-4 border-[#D36422] relative">
              <div className="absolute -top-4 left-6 bg-[#D36422] w-8 h-8 rounded-full flex items-center justify-center font-black">3</div>
              <h3 className="font-bold text-xl mb-2 mt-4">Fase 3: Pilotaje</h3>
              <p className="text-sm text-slate-400">Pruebas con grupo de postulantes real <br/>(2 semanas).</p>
            </div>
            
            <div className="bg-[#D36422]/20 p-6 rounded-2xl border-t-4 border-[#D36422] relative">
              <div className="absolute -top-4 left-6 bg-[#D36422] w-8 h-8 rounded-full flex items-center justify-center font-black text-xl">🚀</div>
              <h3 className="font-bold text-xl text-[#D36422] mb-2 mt-4">Lanzamiento</h3>
              <p className="text-sm text-slate-300">Integración total con sistemas Chinalco.</p>
            </div>
          </div>
        </section>

        {/* 7. IMPACTO Y CIERRE */}
        <section className="bg-gradient-to-br from-[#002855] to-[#001832] p-12 rounded-3xl border border-[#0055AF]/30">
          <h2 className="text-4xl font-black mb-10 text-center">Impacto en la Operación</h2>
          <div className="space-y-8 mb-10">
            <div>
              <div className="flex justify-between text-sm font-bold text-slate-400 mb-2"><span>Tradicional (Filtro Manual)</span> <span>40 Hrs</span></div>
              <div className="w-full bg-white/10 rounded-full h-8"><div className="bg-slate-500 h-8 rounded-full w-[95%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-bold text-[#D36422] mb-2"><span>Smart Platform (IA Generativa)</span> <span>4 Hrs</span></div>
              <div className="w-full bg-white/10 rounded-full h-8"><div className="bg-[#D36422] h-8 rounded-full w-[10%] shadow-[0_0_20px_rgba(211,100,34,0.6)]"></div></div>
            </div>
          </div>
          <p className="text-center text-xl italic text-slate-300">"Reducción del 90% en el tiempo de pre-selección inicial, permitiendo que RRHH se enfoque en la cultura y seguridad."</p>
        </section>

        {/* 8. EQUIPO */}
        <section className="text-center pb-20">
          <h2 className="text-5xl font-black mb-4">¿Preguntas?</h2>
          <p className="text-2xl text-[#D36422] mb-12">Transformando el talento en Toromocho.</p>
          
          <p className="mt-8 text-slate-500 text-sm uppercase tracking-widest">Presentación jueves - Chinalco Mining Perú</p>
        </section>
      </main>
    </div>
  );
}