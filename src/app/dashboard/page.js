import Link from 'next/link';

export default function HRDashboard() {
  const candidatos = [
    { n: "BRAYAN R.", c: "Ing. de Sistemas e Informática", loc: "Huancayo", m: 98, status: "Apto", tags: ["EMO Vigente", "Docs Validados"] },
    { n: "JUNIOR M.", c: "Ing. de Minas", loc: "Morococha (Zona Influencia)", m: 95, status: "Prioridad Social", tags: ["Anexo 6", "Docs Validados"] },
    { n: "LUCÍA G.", c: "Ing. Geológica", loc: "Lima", m: 88, status: "En Revisión", tags: ["Requiere EMO"] },
    { n: "JEWILSON C.", c: "Ing. Mecánica", loc: "Yauli (Zona Influencia)", m: 85, status: "Prioridad Social", tags: ["Anexo 6", "Docs Validados"] },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      {/* Sidebar Corporativo */}
      <div className="w-72 bg-[#001832] text-white flex flex-col shadow-2xl relative overflow-hidden">
        <div className="p-8 relative z-10">
            <div className="text-[#D36422] font-black text-2xl mb-2">CHINALCO</div>
            <div className="text-xs font-bold tracking-widest opacity-80 mb-12">SMART TALENT HUB</div>
            
            <div className="space-y-6 text-sm font-bold opacity-60">
                <div className="opacity-100 text-[#D36422] flex items-center gap-3"><span>■</span> BUSCADOR IA</div>
                <div className="flex items-center gap-3"><span>○</span> MAPA COMUNITARIO</div>
                <div className="flex items-center gap-3"><span>○</span> AUDITORÍA OCR</div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-10 flex flex-col">
        
        {/* Métricas de Valor Agregado */}
        <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ahorro de Tiempo HR</p>
                <div className="text-3xl font-black text-[#0055AF]">-75%</div>
                <p className="text-xs text-slate-500 mt-1">En filtrado de CVs manuales</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Talento Local (Zona Influencia)</p>
                <div className="text-3xl font-black text-[#D36422]">42%</div>
                <p className="text-xs text-slate-500 mt-1">Cumplimiento de cuota comunitaria</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-green-500">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Docs. Verificados por IA</p>
                <div className="text-3xl font-black text-slate-800">100%</div>
                <p className="text-xs text-slate-500 mt-1">Cero riesgo de certificados falsos</p>
            </div>
        </div>

        {/* Buscador Simple y Potente */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border mb-8 flex flex-col">
            <p className="text-xs font-bold text-[#001832] mb-3 uppercase tracking-wider">¿Qué necesita la operación hoy?</p>
            <div className="flex gap-4">
                <input 
                  className="flex-grow bg-slate-50 border p-4 rounded-xl outline-none focus:border-[#D36422] text-slate-700 placeholder:italic" 
                  defaultValue="Busco ingenieros para el área de sistemas, idealmente de zona de influencia y con docs validados."
                />
                <button className="bg-[#D36422] text-white px-10 rounded-xl font-bold shadow-md hover:bg-orange-700 transition-colors">ANALIZAR PERFILES</button>
            </div>
        </div>

        {/* Tabla Limpia */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-slate-50 border-b">
                    <tr className="text-xs font-bold text-slate-400 uppercase">
                        <th className="p-6">Candidato / Especialidad</th>
                        <th className="p-6">Origen</th>
                        <th className="p-6">Validación IA</th>
                        <th className="p-6 text-right">Match</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                    {candidatos.map((cand, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer">
                            <td className="p-6">
                                <div className="font-black text-[#001832]">{cand.n}</div>
                                <div className="text-slate-500 mt-1">{cand.c}</div>
                            </td>
                            <td className="p-6">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    cand.loc.includes('Influencia') ? 'bg-orange-100 text-[#D36422]' : 'bg-slate-100 text-slate-600'
                                }`}>
                                    {cand.loc}
                                </span>
                            </td>
                            <td className="p-6 flex gap-2">
                                {cand.tags.map(tag => (
                                    <span key={tag} className="bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded text-[10px] font-bold uppercase">
                                        ✓ {tag}
                                    </span>
                                ))}
                            </td>
                            <td className="p-6 text-right">
                                <div className="text-2xl font-black text-[#0055AF]">{cand.m}%</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}