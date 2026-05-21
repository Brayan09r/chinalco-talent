"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

const LOGO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAB3E0lEQVR42uz9Z5is51kmjN4rvKly6py7d85R2spbwZItGduykWAMmDCAYRjCcOYwPnOOP8keGPAFc2EMH4xtgs1gsCUbGQfZsnJOW9LOOXVO1ZWr3rTC+fFWt7YMEwDb2Hx166pLra3d1dVV61lPup/7ATrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw466KCDDjrooIMOOuiggw46+FeF++67j4788Y85V1pf+aBaa/J/8HjL97WfhWqtSeed7eAHFURrzVYN4bv1Q9rPz+655x7Wecv/nw3+g/Ai28ZACSGCECJX/7xYLA5+8YtffPeBAwfsbdu2UQDq/PnzN65fv36cUqoBvMUbCCFAKUWz2USr1fpaoVAoMsbI7OysfuONN7Bp06Zv/tqv/docIaR8xc8mTz31FDt48KAkhOjOkengew0PPPAAs9peeYvzJ5988p0vvvjiA77vPyKE8PV3EL7vq5mZmcVSqfTF6enpn//VX/3Va77NUNl9991HO59MB//ihkHpm+fw937v9/YeOXLkt1dWVs79A+c61FoHQgShlCIIAl8EgS9935Or/77y4Xme9LyW9H0/lFIGWutAShm2n+ctKBaL+uzZs489+OCD/+HAgQO5b/NonVylg3+ZpHv1vz/72c/ecerUqf9RqVTkFedWaq1D3/eF67oqCAIdhqF23ZZuNhvadVva89z/6cN1Xd1sNvTy8rKu1+radV1drVZ1rVbTlUpFVSoV5bpuKIQQWmu1+kOnp6enPv/5z//FXXfdtRcACCF44IEH/jXnKOT/sNix9uic4O+y11j9+td//dff9dxzzx1yXfdNq5AyDIJA+r6vPc/TrutqIcTaQ0qllVJaqX9cWCWl0kIIHYah9jxPV6tVXSqV9OLiol5aWtKNRkNc6V1OnDgh/uzP/uy/Asj+K/Mm5IEHHmCrYe2VHvwfkyu2P0ey+nztoso/6vHAAw90QtkrvcZqRWrjxo2jDz/88F8uLCysnkchhBCe52nf9/Wqt5BSto3hH7YGEQodBqF2W66u1eq6UqnoZrOpXdfV0XMFWkr5vzQcIYSu1Wp6fn5ez8zM6JWVFdU2FKW11i+99NKl3/iN33gvADDG8P1U8frf3PRXlsap1prcd999lJC/Z+PkYx/7WFJrndBaJ/83j8S1166Nr32Q+e/Un7jrrrvuf8MAAAAASUVORK5CYII=";

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE DEFINITIONS
// ─────────────────────────────────────────────────────────────────────────────
const TEMPLATES = [
  {
    id: "classic",
    name: "Harvard Clásico",
    sector: "Académico / General",
    badge: "Más popular",
    badgeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    desc: "Ultra-limpio, jerarquía impecable. Funciona en cualquier sector.",
    accent: "#1e3a8a",
    accentClass: "bg-blue-900",
    tagColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    headerBg: "from-[#1e3a8a] to-[#1e3a5f]",
    sectionColor: "text-blue-600",
  },
  {
    id: "tech",
    name: "Tech / Stanford",
    sector: "Ingeniería & Sistemas",
    badge: "ATS 96+",
    badgeColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    desc: "Sidebar oscuro con stack técnico. Perfecto para ingenieros de software.",
    accent: "#059669",
    accentClass: "bg-emerald-600",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    headerBg: "from-slate-900 to-slate-800",
    sectionColor: "text-emerald-400",
  },
  {
    id: "mining",
    name: "Corporate Mining",
    sector: "Minería / MTPE",
    badge: "ATS 97+",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    desc: "Certificaciones MTPE y horas máquina resaltadas. Ideal para el sector minero.",
    accent: "#d97706",
    accentClass: "bg-amber-600",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    headerBg: "from-amber-900/30 to-[#0f172a]",
    sectionColor: "text-amber-500",
  },
  {
    id: "executive",
    name: "Ejecutivo Premium",
    sector: "Alta Dirección",
    badge: "Premium",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    desc: "Línea lateral de color y tipografía elegante. Para supervisores y jefes de área.",
    accent: "#7c3aed",
    accentClass: "bg-purple-700",
    tagColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    headerBg: "from-purple-900/20 to-[#0f172a]",
    sectionColor: "text-purple-500",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TEMPLATE MOCKUP PREVIEWS
// ─────────────────────────────────────────────────────────────────────────────
function PreviewClassic() {
  return (
    <div className="bg-white rounded-lg w-full h-full p-3 space-y-1.5">
      <div className="w-2/3 h-2.5 bg-blue-900 rounded" />
      <div className="w-1/2 h-1.5 bg-slate-300 rounded" />
      <div className="w-full h-px bg-blue-900/20 my-2" />
      <div className="w-1/3 h-1.5 bg-blue-900 rounded" />
      <div className="w-full h-1 bg-slate-200 rounded" />
      <div className="w-5/6 h-1 bg-slate-200 rounded" />
      <div className="w-4/6 h-1 bg-slate-200 rounded" />
      <div className="w-full h-px bg-blue-900/20 my-2" />
      <div className="w-1/3 h-1.5 bg-blue-900 rounded" />
      <div className="w-full h-1 bg-slate-200 rounded" />
      <div className="w-5/6 h-1 bg-slate-200 rounded" />
      <div className="w-full h-px bg-blue-900/20 my-2" />
      <div className="w-1/3 h-1.5 bg-blue-900 rounded" />
      <div className="flex gap-1 mt-1 flex-wrap">
        {[0,1,2,3].map(i => <div key={i} className="h-1.5 w-8 bg-blue-100 border border-blue-200 rounded-full" />)}
      </div>
    </div>
  );
}

function PreviewTech() {
  return (
    <div className="bg-slate-800 rounded-lg w-full h-full flex overflow-hidden">
      <div className="w-1/3 bg-slate-900 p-2 flex flex-col gap-1.5">
        <div className="w-7 h-7 rounded-full bg-emerald-500/30 mx-auto mb-1 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
        </div>
        <div className="w-full h-1 bg-slate-700 rounded" />
        <div className="w-4/5 h-1 bg-slate-700 rounded" />
        <div className="w-full h-px bg-white/5 my-1" />
        {["React","Next.js","AWS","Git"].map(s => (
          <div key={s} className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0" />
            <div className="h-1 bg-slate-700 rounded flex-grow" />
          </div>
        ))}
      </div>
      <div className="flex-1 p-2 space-y-1.5">
        <div className="w-4/5 h-2 bg-white/80 rounded" />
        <div className="w-1/2 h-1 bg-emerald-400/70 rounded" />
        <div className="w-full h-px bg-white/5 my-1" />
        <div className="w-1/3 h-1 bg-emerald-500/70 rounded" />
        <div className="w-full h-1 bg-white/10 rounded" />
        <div className="w-5/6 h-1 bg-white/10 rounded" />
        <div className="w-1/3 h-1 bg-emerald-500/70 rounded mt-1" />
        <div className="w-full h-1 bg-white/10 rounded" />
      </div>
    </div>
  );
}

function PreviewMining() {
  return (
    <div className="bg-white rounded-lg w-full h-full overflow-hidden">
      <div className="w-full h-2 bg-amber-500" />
      <div className="p-2.5 space-y-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-amber-100 border border-amber-300 flex-shrink-0" />
          <div>
            <div className="w-20 h-2 bg-slate-800 rounded" />
            <div className="w-14 h-1 bg-amber-500/60 rounded mt-0.5" />
          </div>
        </div>
        <div className="w-full h-px bg-amber-200" />
        <div className="w-1/3 h-1.5 bg-amber-600 rounded" />
        <div className="w-full h-1 bg-slate-200 rounded" />
        <div className="w-5/6 h-1 bg-slate-200 rounded" />
        <div className="w-1/3 h-1.5 bg-amber-600 rounded" />
        <div className="flex gap-1 flex-wrap">
          {["MTPE","CERT","OSINER"].map(b => (
            <span key={b} className="text-[5px] font-bold px-1 py-0.5 rounded bg-amber-100 text-amber-700 border border-amber-200">{b}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PreviewExecutive() {
  return (
    <div className="bg-white rounded-lg w-full h-full flex overflow-hidden">
      <div className="w-1.5 bg-purple-700 flex-shrink-0" />
      <div className="flex-1 p-2.5 space-y-1.5">
        <div className="w-3/4 h-2.5 bg-slate-800 rounded" />
        <div className="w-1/2 h-1 bg-purple-500/60 rounded" />
        <div className="flex gap-2 mt-1">
          <div className="h-1 w-12 bg-slate-200 rounded" />
          <div className="h-1 w-10 bg-slate-200 rounded" />
        </div>
        <div className="w-full h-px bg-purple-200 my-1" />
        <div className="w-1/3 h-1.5 bg-purple-700 rounded" />
        <div className="w-full h-1 bg-slate-200 rounded" />
        <div className="w-5/6 h-1 bg-slate-200 rounded" />
        <div className="w-1/3 h-1.5 bg-purple-700 rounded" />
        <div className="w-full h-1 bg-slate-200 rounded" />
        <div className="flex gap-1 mt-0.5 flex-wrap">
          {[0,1,2].map(i => <div key={i} className="h-1.5 w-7 bg-purple-100 border border-purple-200 rounded-full" />)}
        </div>
      </div>
    </div>
  );
}

const PREVIEW_MAP = {
  classic: <PreviewClassic />,
  tech: <PreviewTech />,
  mining: <PreviewMining />,
  executive: <PreviewExecutive />,
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED NAV
// ─────────────────────────────────────────────────────────────────────────────
function NavBar({ subtitle }) {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 py-4 border-b border-white/5">
      <Link href="/" className="flex items-center gap-3">
        <img src={LOGO} alt="TalentSync" className="w-9 h-9 object-contain" />
        <div>
          <span className="text-base font-black tracking-tight">TALENT<span className="text-orange-400">SYNC</span></span>
          <div className="text-[9px] text-slate-500 uppercase tracking-widest">{subtitle}</div>
        </div>
      </Link>
      <Link href="/" className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-1.5">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Inicio
      </Link>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEPS BAR
// ─────────────────────────────────────────────────────────────────────────────
const STEP_LABELS = ["DNI", "Verificando", "Plantilla", "Tu CV", "Publicado"];

function StepsBar({ current }) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 py-5 px-4 overflow-x-auto">
      {STEP_LABELS.map((s, i) => (
        <div key={i} className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
          <div className="flex flex-col items-center gap-1">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-all duration-500 ${
              i < current  ? "bg-emerald-500 text-white" :
              i === current ? "bg-orange-400 text-white ring-4 ring-orange-400/20" :
              "bg-white/5 border border-white/10 text-slate-600"
            }`}>
              {i < current ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : i + 1}
            </div>
            <span className={`text-[8px] font-bold uppercase tracking-widest ${
              i === current ? "text-orange-400" : i < current ? "text-emerald-400" : "text-slate-600"
            }`}>{s}</span>
          </div>
          {i < STEP_LABELS.length - 1 && (
            <div className={`w-5 sm:w-10 h-px mb-4 ${i < current ? "bg-emerald-500/50" : "bg-white/5"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 0 — DNI FORM
// ─────────────────────────────────────────────────────────────────────────────
function StepDNI({ onSubmit }) {
  const [dni, setDni] = useState("");
  const valid = /^\d{8}$/.test(dni);

  return (
    <div className="flex flex-col items-center gap-8 py-8 px-4">
      <div className="text-center">
        <div className="text-5xl mb-4">🪪</div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Ingresa tu DNI</h2>
        <p className="text-slate-400 text-sm mt-2 max-w-xs mx-auto">
          Extraemos tus datos de <span className="text-white font-semibold">RENIEC</span> y <span className="text-white font-semibold">CertiJoven (MTPE)</span> automáticamente.
        </p>
      </div>
      <div className="w-full max-w-sm space-y-4">
        <div>
          <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Número de DNI</label>
          <input
            type="text" maxLength={8} placeholder="Ej: 72834951"
            value={dni} onChange={e => setDni(e.target.value.replace(/\D/g, ""))}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-xl font-black tracking-[0.25em] text-center placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50 transition-all duration-200"
          />
          <div className="flex justify-between mt-2 text-[10px]">
            <span className="text-slate-600">Solo números · 8 dígitos</span>
            <span className={`font-bold ${valid ? "text-emerald-400" : "text-slate-600"}`}>{dni.length}/8</span>
          </div>
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 space-y-2.5">
          {[
            { icon: "🏛️", text: "RENIEC — Datos personales y de identidad" },
            { icon: "📋", text: "MTPE — Historial laboral y certificaciones CertiJoven" },
            { icon: "🔒", text: "Conexión segura con cifrado end-to-end" },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-3 text-xs text-slate-400">
              <span>{item.icon}</span>{item.text}
            </div>
          ))}
        </div>
        <button
          onClick={() => valid && onSubmit(dni)} disabled={!valid}
          className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none text-base tracking-wide"
        >
          Consultar mis datos →
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — LOADING
// ─────────────────────────────────────────────────────────────────────────────
function StepLoading({ progress }) {
  const tasks = [
    { label: "Conectando con RENIEC", sub: "Verificando identidad y datos personales" },
    { label: "Extrayendo datos RENIEC", sub: "Nombre, domicilio, estado civil" },
    { label: "Conectando con CertiJoven (MTPE)", sub: "Portal de certificaciones laborales" },
    { label: "Descargando certificaciones", sub: "Competencias y experiencia registrada" },
    { label: "Generando perfil ATS", sub: "Estructurando CV con formato óptimo" },
  ];
  return (
    <div className="flex flex-col items-center gap-8 py-8 px-4">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-white/5" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-400 animate-spin" style={{ animationDuration:"1.2s" }} />
        <div className="absolute inset-3 rounded-full border-2 border-transparent border-t-blue-400 animate-spin" style={{ animationDuration:"2s", animationDirection:"reverse" }} />
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/30">
          <svg className="w-6 h-6 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-black text-white tracking-tight">Extrayendo tus datos</h3>
        <p className="text-slate-500 text-sm mt-1">Conectando con bases de datos gubernamentales…</p>
      </div>
      <div className="w-full max-w-sm space-y-3">
        {tasks.map((t, i) => (
          <div key={i} className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-500 ${
            i === progress ? "bg-orange-400/10 border border-orange-400/20" :
            i < progress  ? "opacity-60" : "opacity-30"
          }`}>
            <div className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center ${
              i < progress  ? "bg-emerald-500" :
              i === progress ? "bg-orange-400/20 animate-pulse" : "bg-white/5"
            }`}>
              {i < progress ? (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : i === progress ? <div className="w-2 h-2 rounded-full bg-orange-400" /> : null}
            </div>
            <div>
              <div className={`text-xs font-bold ${i === progress ? "text-orange-300" : "text-slate-300"}`}>{t.label}</div>
              <div className="text-[10px] text-slate-600 mt-0.5">{t.sub}</div>
            </div>
            {i === progress && <span className="ml-auto text-[9px] font-bold text-orange-400 animate-pulse self-center">EN CURSO</span>}
          </div>
        ))}
      </div>
      <div className="w-full max-w-sm">
        <div className="flex justify-between text-[10px] text-slate-600 mb-1.5">
          <span>Progreso total</span>
          <span>{Math.round((Math.min(progress, tasks.length) / tasks.length) * 100)}%</span>
        </div>
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-700"
            style={{ width: `${(Math.min(progress, tasks.length) / tasks.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 2 — TEMPLATE PICKER (con mini-preview real al hacer hover)
// ─────────────────────────────────────────────────────────────────────────────
function StepTemplatePicker({ selected, onSelect, onConfirm }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col gap-6 py-6 px-4">
      <div className="text-center">
        <div className="text-4xl mb-3">🎨</div>
        <h2 className="text-2xl font-black text-white tracking-tight">Elige tu plantilla</h2>
        <p className="text-slate-400 text-sm mt-1 max-w-sm mx-auto">
          Todas están <span className="text-white font-semibold">100% optimizadas para filtros ATS</span>. Puedes cambiarla después desde tu CV.
        </p>
      </div>

      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-2 rounded-full">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Todas las plantillas pasan filtros ATS automáticamente
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TEMPLATES.map(t => (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            onMouseEnter={() => setHovered(t.id)}
            onMouseLeave={() => setHovered(null)}
            className={`group relative text-left rounded-2xl border transition-all duration-300 overflow-hidden ${
              selected === t.id
                ? "border-orange-400/80 bg-orange-400/10 shadow-lg shadow-orange-500/20 scale-[1.01]"
                : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
            }`}
          >
            {selected === t.id && (
              <div className="absolute top-3 right-3 z-10 w-5 h-5 rounded-full bg-orange-400 flex items-center justify-center shadow-md">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}

            <div className={`h-1 w-full ${t.accentClass}`} />

            <div className="p-3">
              <div className="rounded-xl overflow-hidden bg-slate-900/50 border border-white/5 h-36 group-hover:scale-[1.02] transition-transform duration-300">
                {PREVIEW_MAP[t.id]}
              </div>
            </div>

            <div className="px-4 pb-4 space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-black text-white text-sm">{t.name}</h3>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${t.badgeColor}`}>{t.badge}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${t.tagColor}`}>{t.sector}</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-snug">{t.desc}</p>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onConfirm} disabled={!selected}
        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none text-sm flex items-center justify-center gap-2.5"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        Generar mi CV con esta plantilla →
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// INLINE EDITABLE FIELD — se activa con clic, desaparece al blur/enter
// ─────────────────────────────────────────────────────────────────────────────
function InlineEditField({ value, onChange, multiline, className = "", placeholder = "Haz clic para editar" }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft]     = useState(value);
  const ref = useRef(null);

  useEffect(() => { setDraft(value); }, [value]);

  const commit = useCallback(() => {
    setEditing(false);
    if (draft !== value) onChange(draft);
  }, [draft, value, onChange]);

  useEffect(() => {
    if (editing && ref.current) ref.current.focus();
  }, [editing]);

  if (!editing) {
    return (
      <span
        onClick={() => { setDraft(value); setEditing(true); }}
        title="Haz clic para editar"
        className={`cursor-text group/inline relative inline-block ${className}`}
      >
        {value || <span className="text-slate-600 italic text-xs">{placeholder}</span>}
        <span className="ml-1.5 opacity-0 group-hover/inline:opacity-100 transition-opacity">
          <svg className="w-3 h-3 text-orange-400 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
          </svg>
        </span>
      </span>
    );
  }

  const inputClass = "bg-white/10 border border-orange-400/50 rounded-lg px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-orange-400/50 transition-all w-full min-w-[120px] text-sm";

  return multiline ? (
    <textarea
      ref={ref}
      rows={3}
      value={draft}
      onChange={e => setDraft(e.target.value)}
      onBlur={commit}
      className={`${inputClass} resize-none ${className}`}
    />
  ) : (
    <input
      ref={ref}
      type="text"
      value={draft}
      onChange={e => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); commit(); } if (e.key === "Escape") { setDraft(value); setEditing(false); } }}
      className={`${inputClass} ${className}`}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TAG CHIPS — editable inline (certs y skills)
// ─────────────────────────────────────────────────────────────────────────────
function TagChipsEditor({ items, onAdd, onRemove, colorClass, addLabel }) {
  const [adding, setAdding] = useState(false);
  const [draft, setDraft]   = useState("");
  const inputRef = useRef(null);

  useEffect(() => { if (adding && inputRef.current) inputRef.current.focus(); }, [adding]);

  const commit = () => {
    const trimmed = draft.trim();
    if (trimmed) onAdd(trimmed);
    setDraft("");
    setAdding(false);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {items.map((item, i) => (
        <span key={i} className={`group/tag inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-full border ${colorClass}`}>
          {item}
          <button
            onClick={() => onRemove(i)}
            className="opacity-0 group-hover/tag:opacity-100 transition-opacity ml-0.5 hover:text-red-400"
            title="Eliminar"
          >
            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </span>
      ))}
      {adding ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); commit(); } if (e.key === "Escape") { setDraft(""); setAdding(false); } }}
          placeholder="Escribe y presiona Enter"
          className="text-[11px] bg-white/10 border border-orange-400/50 rounded-full px-3 py-1 text-white focus:outline-none focus:ring-1 focus:ring-orange-400/50 w-40"
        />
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-full border border-dashed border-white/20 text-slate-500 hover:border-orange-400/40 hover:text-orange-400 transition-all"
        >
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          {addLabel}
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION WRAPPER
// ─────────────────────────────────────────────────────────────────────────────
function CVSection({ title, icon, children, highlight, editMode }) {
  return (
    <div className={`rounded-2xl p-4 border transition-all ${
      editMode ? "border-orange-400/20 bg-orange-400/[0.03]" :
      highlight ? "bg-amber-400/[0.04] border-amber-400/15" : "bg-white/[0.02] border-white/5"
    }`}>
      <h4 className="text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2 text-slate-400">
        <span className={highlight ? "text-amber-400" : "text-orange-400"}>{icon}</span>
        {title}
        {editMode && <span className="ml-auto text-[8px] font-bold text-orange-400/60 normal-case tracking-normal">haz clic en cualquier texto para editar</span>}
      </h4>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CHANGE TEMPLATE MODAL (slide-in panel)
// ─────────────────────────────────────────────────────────────────────────────
function TemplatePickerModal({ currentId, onSelect, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-10 bg-[#0f172a] border border-white/10 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#0f172a] border-b border-white/5 p-5 flex items-center justify-between z-10">
          <div>
            <h3 className="font-black text-white text-lg">Cambiar plantilla</h3>
            <p className="text-xs text-slate-500 mt-0.5">El contenido de tu CV se conserva</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TEMPLATES.map(t => (
            <button
              key={t.id}
              onClick={() => { onSelect(t.id); onClose(); }}
              className={`group text-left rounded-2xl border transition-all duration-300 overflow-hidden ${
                currentId === t.id
                  ? "border-orange-400/80 bg-orange-400/10 shadow-lg shadow-orange-500/20"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
              }`}
            >
              <div className={`h-1 w-full ${t.accentClass}`} />
              <div className="p-3">
                <div className="rounded-xl overflow-hidden bg-slate-900/50 border border-white/5 h-28">
                  {PREVIEW_MAP[t.id]}
                </div>
              </div>
              <div className="px-3 pb-3 flex items-center justify-between flex-wrap gap-1">
                <div>
                  <h4 className="font-black text-white text-xs">{t.name}</h4>
                  <p className="text-[10px] text-slate-500">{t.sector}</p>
                </div>
                {currentId === t.id && (
                  <span className="text-[9px] font-bold text-orange-400 bg-orange-400/10 border border-orange-400/20 px-2 py-0.5 rounded-full">Actual</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 3 — CV + INLINE EDITING + TEMPLATE SWITCH
// ─────────────────────────────────────────────────────────────────────────────
function StepCV({ dni, templateId, setTemplateId, onPublish }) {
  const tpl = TEMPLATES.find(t => t.id === templateId) || TEMPLATES[0];

  const [editMode,       setEditMode]       = useState(false);
  const [showTplModal,   setShowTplModal]   = useState(false);
  const [saved,          setSaved]          = useState(false);

  // ── CV state ──────────────────────────────────────────────────────────────
  const [cv, setCv] = useState({
    nombre:    "Ana Lucía Torres Quispe",
    profesion: "Técnica en Operaciones Mineras",
    ubicacion: "Cerro de Pasco, Pasco",
    telefono:  "+51 987 654 321",
    email:     "ana.torres@email.com",
    resumen:   "Técnica especializada en operaciones mineras con 4 años de experiencia en mina subterránea. Certificada por MTPE en Seguridad Ocupacional y Operación de Equipos de Alto Tonelaje. Sólida formación en estándares OSINERGMIN.",
    experiencias: [
      { cargo: "Operadora de Equipos de Minería", empresa: "Minera Antamina S.A.C.", periodo: "2021 – Actualidad", logro: "Supervisión de equipos Komatsu HD785 · 2,400+ horas máquina certificadas" },
      { cargo: "Asistente de Seguridad Minera",   empresa: "Gold Fields Perú S.A.",   periodo: "2019 – 2021",      logro: "Implementación de IPERC · Reducción de incidentes en 38%" },
    ],
    educTitulo:  "Técnico Superior en Operaciones Mineras",
    educInst:    "Instituto SENATI – Sede Cerro de Pasco",
    educAnno:    "2019",
    certs:  ["Operación de Maquinaria Pesada — MTPE", "Seguridad Minera Nivel III — OSINERGMIN", "CertiJoven 2023 — MTPE", "Primeros Auxilios Industrial — MINSA"],
    skills: ["Komatsu HD785", "SAP PM", "AutoCAD Mine", "IPERC/PETAR", "Explosivos EXSA", "MS Office"],
    atsScore: 96,
  });

  const update   = (key, val) => setCv(p => ({ ...p, [key]: val }));
  const updateExp = (idx, field, val) => setCv(p => {
    const exps = [...p.experiencias];
    exps[idx] = { ...exps[idx], [field]: val };
    return { ...p, experiencias: exps };
  });
  const addExp = () => setCv(p => ({
    ...p,
    experiencias: [...p.experiencias, { cargo: "Nuevo cargo", empresa: "Empresa", periodo: "Año – Actualidad", logro: "Describe tu logro principal aquí" }],
  }));
  const removeExp = (idx) => setCv(p => ({ ...p, experiencias: p.experiencias.filter((_, i) => i !== idx) }));

  const addCert  = (val) => update("certs",  [...cv.certs,  val]);
  const removeCert = (i) => update("certs",  cv.certs.filter((_, j) => j !== i));
  const addSkill   = (val) => update("skills", [...cv.skills, val]);
  const removeSkill = (i) => update("skills", cv.skills.filter((_, j) => j !== i));

  const handleSave = () => {
    setSaved(true);
    setEditMode(false);
    setTimeout(() => setSaved(false), 2500);
  };

  // ── CV header by template ─────────────────────────────────────────────────
  const CVHeader = () => {
    const nameEl  = editMode
      ? <InlineEditField value={cv.nombre}    onChange={v => update("nombre", v)}    className="text-2xl font-black" />
      : <h3 className="text-2xl font-black text-white">{cv.nombre}</h3>;
    const profEl  = editMode
      ? <InlineEditField value={cv.profesion} onChange={v => update("profesion", v)} className={`text-sm font-semibold text-${tpl.sectionColor.split("-")[1]}-400`} />
      : <p className={`${tpl.sectionColor} text-sm font-semibold mt-0.5`}>{cv.profesion}</p>;
    const contactLine = (
      <div className="flex flex-wrap gap-3 text-[11px]">
        {["📍", "📱", "✉️"].map((icon, i) => {
          const field = ["ubicacion","telefono","email"][i];
          return editMode
            ? <span key={i}>{icon} <InlineEditField value={cv[field]} onChange={v => update(field, v)} className="text-sm" /></span>
            : <span key={i} className={tpl.id === "tech" ? "text-slate-400" : tpl.id === "executive" ? "text-slate-300" : "text-blue-200"}>{icon} {cv[field]}</span>;
        })}
      </div>
    );

    if (tpl.id === "classic") return (
      <div className={`bg-gradient-to-br ${tpl.headerBg} p-6 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="w-full border-b border-blue-400/30 pb-4 mb-3">{nameEl}{profEl}</div>
          {contactLine}
        </div>
      </div>
    );
    if (tpl.id === "tech") return (
      <div className={`bg-gradient-to-br ${tpl.headerBg} p-6`}>
        <div className="flex items-start gap-4 flex-wrap">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-2xl font-black text-emerald-400 flex-shrink-0">
            {cv.nombre.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">{nameEl}{profEl}{contactLine}</div>
          <div className="flex gap-2 flex-wrap">
            {cv.skills.slice(0,3).map(s => (
              <span key={s} className="text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">{s}</span>
            ))}
          </div>
        </div>
      </div>
    );
    if (tpl.id === "mining") return (
      <div className="relative overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-amber-600 to-amber-400" />
        <div className={`bg-gradient-to-br ${tpl.headerBg} p-6`}>
          <div className="flex items-start gap-4 flex-wrap">
            <div className="w-14 h-14 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-2xl font-black text-amber-400 flex-shrink-0">
              {cv.nombre.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">{nameEl}{profEl}{contactLine}</div>
          </div>
        </div>
      </div>
    );
    return (
      <div className="flex overflow-hidden">
        <div className="w-1.5 bg-purple-700 flex-shrink-0" />
        <div className={`flex-1 bg-gradient-to-br ${tpl.headerBg} p-6`}>
          {nameEl}{profEl}
          <div className="mt-2">{contactLine}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-5 py-4 px-2">
      {/* ── Header bar ── */}
      <div className="flex items-center justify-between flex-wrap gap-3 px-2">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            CV Generado
            {saved && (
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full animate-pulse">
                ✓ Guardado
              </span>
            )}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Plantilla: <span className="text-orange-400 font-bold">{tpl.name}</span> · Datos de RENIEC y MTPE
          </p>
        </div>
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-[10px] font-bold bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 px-2.5 py-1 rounded-full">✓ RENIEC</span>
          <span className="text-[10px] font-bold bg-blue-400/10 border border-blue-400/20 text-blue-400 px-2.5 py-1 rounded-full">✓ MTPE</span>
          <span className="text-[10px] font-bold bg-orange-400/10 border border-orange-400/20 text-orange-400 px-2.5 py-1 rounded-full">ATS {cv.atsScore}/100</span>
        </div>
      </div>

      {/* ── Action toolbar ── */}
      <div className="flex gap-2 flex-wrap px-2">
        {editMode ? (
          <>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Guardar cambios
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 text-xs font-bold hover:bg-white/[0.08] transition-all duration-200"
            >
              Cancelar edición
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-400/10 border border-orange-400/20 text-orange-300 text-xs font-bold hover:bg-orange-400/20 hover:text-orange-200 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
            </svg>
            Editar CV
          </button>
        )}
        <button
          onClick={() => setShowTplModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-bold hover:bg-white/[0.08] hover:text-white transition-all duration-200"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909" />
          </svg>
          Cambiar plantilla
        </button>
      </div>

      {/* ── Edit mode banner ── */}
      {editMode && (
        <div className="mx-2 bg-orange-400/5 border border-orange-400/20 rounded-2xl p-3 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse flex-shrink-0" />
          <p className="text-xs text-orange-300 font-medium">
            <strong>Modo edición activo.</strong> Haz clic sobre cualquier texto del CV para editarlo. Los cambios se muestran en tiempo real.
          </p>
        </div>
      )}

      {/* Template indicator */}
      <div className={`mx-2 flex items-center gap-3 p-3 rounded-xl border ${tpl.tagColor} bg-white/[0.02]`}>
        <div className={`w-3 h-3 rounded-full ${tpl.accentClass} flex-shrink-0`} />
        <div className="text-xs flex-1">
          <span className="font-black text-white">{tpl.name}</span>
          <span className="text-slate-500"> · {tpl.sector}</span>
        </div>
        <button
          onClick={() => setShowTplModal(true)}
          className="text-[10px] text-slate-500 hover:text-white transition-colors"
        >
          cambiar →
        </button>
      </div>

      {/* ── CV Card ── */}
      <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden mx-0">

        <CVHeader />

        {/* CV Body */}
        <div className="p-5 space-y-4">

          {/* Resumen */}
          <CVSection title="Resumen Profesional" icon="✦" editMode={editMode}>
            {editMode
              ? <InlineEditField value={cv.resumen} onChange={v => update("resumen", v)} multiline className="text-sm text-slate-300 leading-relaxed w-full block" />
              : <p className="text-sm text-slate-300 leading-relaxed">{cv.resumen}</p>
            }
          </CVSection>

          {/* Experiencia */}
          <CVSection title="Experiencia Laboral" icon="⬡" editMode={editMode}>
            <div className="space-y-0">
              {cv.experiencias.map((exp, n) => (
                <div key={n} className="flex gap-3 group/exp">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-400 mt-1 flex-shrink-0" />
                    {n < cv.experiencias.length - 1 && <div className="w-px flex-1 bg-white/5 mt-1" />}
                  </div>
                  <div className="pb-4 flex-1 min-w-0">
                    {editMode ? (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <InlineEditField value={exp.cargo}   onChange={v => updateExp(n, "cargo", v)}   className="font-bold text-white text-sm" />
                          <button onClick={() => removeExp(n)} className="opacity-0 group-hover/exp:opacity-100 transition-opacity text-red-400/60 hover:text-red-400 ml-auto flex-shrink-0" title="Eliminar experiencia">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <InlineEditField value={exp.empresa} onChange={v => updateExp(n, "empresa", v)} className="text-orange-400 text-xs font-semibold" />
                          <span className="text-slate-600 text-xs">·</span>
                          <InlineEditField value={exp.periodo} onChange={v => updateExp(n, "periodo", v)} className="text-slate-600 text-xs" />
                        </div>
                        <InlineEditField value={exp.logro} onChange={v => updateExp(n, "logro", v)} className="text-slate-400 text-xs" />
                      </div>
                    ) : (
                      <>
                        <div className="font-bold text-white text-sm">{exp.cargo}</div>
                        <div className="text-orange-400 text-xs font-semibold">{exp.empresa}</div>
                        <div className="text-slate-600 text-xs">{exp.periodo}</div>
                        <p className="text-slate-400 text-xs mt-1">{exp.logro}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
              {editMode && (
                <button
                  onClick={addExp}
                  className="mt-1 ml-5 flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-orange-400 transition-colors font-semibold"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Agregar experiencia
                </button>
              )}
            </div>
          </CVSection>

          {/* Educación */}
          <CVSection title="Educación" icon="◇" editMode={editMode}>
            {editMode ? (
              <div className="space-y-1.5">
                <InlineEditField value={cv.educTitulo} onChange={v => update("educTitulo", v)} className="text-sm font-bold text-white" />
                <InlineEditField value={cv.educInst}   onChange={v => update("educInst", v)}   className="text-orange-400 text-xs" />
                <InlineEditField value={cv.educAnno}   onChange={v => update("educAnno", v)}   className="text-slate-600 text-xs" />
              </div>
            ) : (
              <>
                <div className="text-sm font-bold text-white">{cv.educTitulo}</div>
                <div className="text-orange-400 text-xs">{cv.educInst}</div>
                <div className="text-slate-600 text-xs">{cv.educAnno}</div>
              </>
            )}
          </CVSection>

          {/* Certificaciones */}
          <CVSection title="Certificaciones Oficiales MTPE / OSINERGMIN" icon="🏅" highlight editMode={editMode}>
            <TagChipsEditor
              items={cv.certs}
              onAdd={addCert}
              onRemove={removeCert}
              colorClass="bg-amber-400/10 border-amber-400/20 text-amber-300"
              addLabel={editMode ? "+ Agregar certificación" : ""}
            />
            {!editMode && cv.certs.length === 0 && <p className="text-xs text-slate-600 italic">Sin certificaciones</p>}
          </CVSection>

          {/* Skills */}
          <CVSection title="Habilidades Técnicas" icon="◈" editMode={editMode}>
            <TagChipsEditor
              items={cv.skills}
              onAdd={addSkill}
              onRemove={removeSkill}
              colorClass="bg-blue-400/10 border-blue-400/20 text-blue-300"
              addLabel={editMode ? "+ Agregar habilidad" : ""}
            />
          </CVSection>
        </div>
      </div>

      {/* ── Publish CTA ── */}
      <div className="rounded-3xl bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-400/20 p-6 flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-black text-white text-lg">¿Todo listo?</h3>
          <p className="text-slate-400 text-sm mt-0.5">Publica tu perfil y sé visible para +200 empresas del sector minero.</p>
        </div>
        <button
          onClick={onPublish}
          className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black px-7 py-4 rounded-2xl hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all duration-200 text-sm whitespace-nowrap flex items-center gap-2.5 shadow-lg shadow-orange-500/20"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          Subir mi CV a la Bolsa de Trabajo
        </button>
      </div>

      {/* Template picker modal */}
      {showTplModal && (
        <TemplatePickerModal
          currentId={templateId}
          onSelect={setTemplateId}
          onClose={() => setShowTplModal(false)}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 4 — PUBLISHED
// ─────────────────────────────────────────────────────────────────────────────
function StepPublished() {
  return (
    <div className="flex flex-col items-center gap-6 py-12 px-4 text-center">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/30 flex items-center justify-center">
            <svg className="w-9 h-9 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-400 animate-ping opacity-30" />
      </div>
      <div>
        <h2 className="text-2xl font-black text-white">¡Perfil publicado!</h2>
        <p className="text-slate-400 text-sm mt-2 max-w-xs mx-auto">
          Tu CV ya está visible en la bolsa de trabajo para empresas del sector minero e industrial.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
        {[
          { icon: "👁️", val: "0",    lbl: "Vistas hoy" },
          { icon: "🏢", val: "200+", lbl: "Empresas" },
          { icon: "⚡", val: "Activo", lbl: "Estado" },
        ].map(s => (
          <div key={s.lbl} className="bg-white/[0.03] border border-white/10 rounded-2xl p-3">
            <div className="text-xl">{s.icon}</div>
            <div className="text-base font-black text-white mt-1">{s.val}</div>
            <div className="text-[10px] text-slate-500">{s.lbl}</div>
          </div>
        ))}
      </div>
      <Link href="/" className="text-sm text-orange-400 hover:text-orange-300 transition-colors font-semibold">
        ← Volver al inicio
      </Link>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function PostulantePage() {
  const [step,         setStep]         = useState(0);
  const [dni,          setDni]          = useState("");
  const [loadProgress, setLoadProgress] = useState(0);
  const [templateId,   setTemplateId]   = useState(null);

  const handleDNISubmit = (d) => {
    setDni(d);
    setStep(1);
    let idx = 0;
    const iv = setInterval(() => {
      idx++;
      setLoadProgress(idx);
      if (idx >= 5) {
        clearInterval(iv);
        setTimeout(() => setStep(2), 600);
      }
    }, 900);
  };

  const handleTemplateConfirm = () => { if (templateId) setStep(3); };
  const handlePublish          = () => setStep(4);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <NavBar subtitle="Portal del Estudiante" />
        <StepsBar current={step} />

        <div className="mx-4 mb-10 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
          {step === 0 && <StepDNI            onSubmit={handleDNISubmit} />}
          {step === 1 && <StepLoading        progress={loadProgress} />}
          {step === 2 && (
            <StepTemplatePicker
              selected={templateId}
              onSelect={setTemplateId}
              onConfirm={handleTemplateConfirm}
            />
          )}
          {step === 3 && (
            <StepCV
              dni={dni}
              templateId={templateId}
              setTemplateId={setTemplateId}
              onPublish={handlePublish}
            />
          )}
          {step === 4 && <StepPublished />}
        </div>
      </div>
    </main>
  );
}