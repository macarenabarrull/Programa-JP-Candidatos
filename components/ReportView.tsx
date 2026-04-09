import React from 'react';
import { SlideData } from '../constants';
import { 
  Briefcase, Mail, CheckCircle2, Star, AlertCircle, TrendingUp, UserCheck, X
} from 'lucide-react';
import { CandidateAvatar } from './Slides';

interface ReportViewProps {
  slides: SlideData[];
}

export const ReportView: React.FC<ReportViewProps> = ({ slides }) => {
  const candidateSlides = slides.filter(s => s.type === 'candidate');
  const closing = slides.find(s => s.id === 'closing');

  if (!closing) {
    return <div className="p-12 text-center text-red-600 font-bold">Error: Datos incompletos para el reporte.</div>;
  }

  const Header = ({ sectionTitle = "PERFIL DE CANDIDATO" }) => (
    <header className="mb-6 border-b border-slate-200 pb-3 flex justify-between items-end">
        <div>
            <div className="flex items-center gap-2 mb-1">
                <div className="h-1 w-8 bg-indigo-600 rounded-full" />
                <h3 className="text-[8px] text-indigo-600 font-black uppercase tracking-[0.4em]">
                    PROGRAMA JP 25-26 | fyo
                </h3>
            </div>
            <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                {sectionTitle}
            </h1>
        </div>
        <div className="text-right">
            <div className="text-2xl font-black text-slate-900 tracking-tighter leading-none">fyo<span className="text-indigo-500">.</span></div>
            <div className="text-[6px] font-bold text-slate-400 uppercase tracking-widest mt-1">Talento & Cultura</div>
        </div>
    </header>
  );

  const Footer = ({ page, total }: { page: number, total: number }) => (
    <footer className="mt-auto pt-6 flex justify-between items-center text-[8px] text-slate-400 border-t border-slate-100">
        <div className="flex items-center gap-4">
            <span className="font-black uppercase tracking-[0.2em] text-slate-900">Dossier Ejecutivo de Selección</span>
            <div className="h-3 w-px bg-slate-200" />
            <span className="font-bold">Confidencial - Uso Interno</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="font-black text-slate-900 bg-slate-100 px-4 py-1.5 rounded-lg">
                PÁGINA {page} DE {total}
            </div>
        </div>
    </footer>
  );

  // Group candidates in pairs for the layout
  const candidatePairs = [];
  for (let i = 0; i < candidateSlides.length; i += 2) {
    candidatePairs.push(candidateSlides.slice(i, i + 2));
  }

  const totalPages = 1 + 1 + candidatePairs.length + 1 + 1;
  let currentPage = 1;

  return (
    <div className="w-full bg-slate-100 text-slate-900 font-sans text-[9px] leading-tight print:p-0 print:bg-white">
        
      {/* PAGE 1: PORTADA */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2.5cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page overflow-hidden">
          <div className="absolute top-0 right-0 w-[160%] h-[60%] bg-slate-900 -rotate-12 -translate-y-1/2 translate-x-1/4">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 to-transparent" />
          </div>
          
          <div className="relative z-10 mt-48">
              <div className="text-9xl font-black text-white tracking-tighter mb-10 leading-none">fyo<span className="text-indigo-400">.</span></div>
              <div className="h-2 w-48 bg-indigo-600 mb-24"></div>
              
              <div className="space-y-2 mb-8">
                  <h3 className="text-2xl font-black text-indigo-600 uppercase tracking-[0.6em]">Programa JP</h3>
                  <div className="h-0.5 w-12 bg-slate-200" />
              </div>
              
              <h1 className="text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-16 uppercase">
                  Dossier de<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-900">Candidatos</span>
              </h1>
              
              <div className="max-w-lg border-l-8 border-indigo-600 pl-10 py-4 bg-slate-50/50 rounded-r-3xl">
                  <p className="text-2xl text-slate-600 font-bold leading-tight">
                      Evaluación estratégica de perfiles.<br />
                      <span className="text-slate-400">Mesa Comercial Vendedora 25-26.</span>
                  </p>
              </div>
          </div>

          <div className="mt-auto relative z-10 flex justify-between items-end border-t border-slate-100 pt-12">
              <div className="flex gap-20">
                  <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] block mb-4">Documento</span>
                      <span className="text-xl font-black text-slate-900 uppercase tracking-tight">Reporte Ejecutivo</span>
                  </div>
                  <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] block mb-4">Fecha</span>
                      <span className="text-xl font-black text-slate-900 uppercase tracking-tight">Abril 2026</span>
                  </div>
              </div>
              <div className="text-right">
                  <div className="flex items-center gap-3 justify-end mb-3">
                      <div className="h-1 w-6 bg-indigo-600 rounded-full" />
                      <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em]">Propiedad de</span>
                  </div>
                  <span className="text-lg font-black text-slate-900">Talento & Cultura fyo</span>
              </div>
          </div>
      </div>

      {/* PAGE 2: ÍNDICE Y OBJETIVOS */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
          <Header sectionTitle="ÍNDICE DE CANDIDATOS" />
          <div className="flex-1 py-10">
              <div className="grid grid-cols-2 gap-12">
                  <div className="space-y-6">
                      <h4 className="text-xs font-black text-indigo-600 uppercase tracking-widest border-b border-indigo-100 pb-2">Nómina de Perfiles</h4>
                      <div className="space-y-3">
                          {candidateSlides.map((s, i) => (
                              <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-1">
                                  <span className="font-bold text-slate-700 text-xs">{s.content.name}</span>
                                  <span className="font-black text-slate-300">Pág. {Math.floor(i/2) + 3}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div className="space-y-8">
                      <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                          <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Objetivo del Dossier</h4>
                          <p className="text-sm font-medium text-slate-600 leading-relaxed">
                              Este documento ha sido diseñado para facilitar la toma de decisiones durante el Assessment Center. 
                              Contiene una síntesis curricular de cada candidato, destacando sus fortalezas y áreas de oportunidad, 
                              con espacios dedicados para anotaciones en tiempo real por parte de los evaluadores.
                          </p>
                      </div>
                      <div className="p-8 border-2 border-dashed border-indigo-100 rounded-3xl">
                          <h4 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-4">Criterios de Evaluación</h4>
                          <ul className="space-y-3">
                              {['Potencial Analítico', 'Perfil Comercial', 'Ajuste Cultural', 'Autonomía'].map((c, i) => (
                                  <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-700">
                                      <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                      {c}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <Footer page={++currentPage} total={totalPages} />
      </div>

      {/* PAGES 3-8: CANDIDATE PAIRS */}
      {candidatePairs.map((pair, pairIdx) => (
          <div key={pairIdx} className="w-[210mm] h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
              <Header sectionTitle={`EVALUACIÓN DE PERFILES: GRUPO ${pairIdx + 1}`} />
              
              <div className="flex-1 grid grid-cols-2 gap-10 py-2">
                  {pair.map((slide, idx) => {
                      const candidate = slide.content;
                      return (
                          <div key={idx} className="flex flex-col border-r last:border-r-0 border-slate-100 pr-5 last:pr-0 last:pl-5">
                              {/* Candidate Header */}
                              <div className="flex gap-5 mb-8">
                                  <div className="w-28 h-36 rounded-2xl overflow-hidden border border-slate-200 shrink-0 shadow-lg relative">
                                      {candidate.image ? (
                                          <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                      ) : (
                                          <CandidateAvatar name={candidate.name} />
                                      )}
                                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                  </div>
                                  <div className="flex flex-col justify-center">
                                      <h2 className="text-2xl font-black text-slate-900 leading-tight mb-2 tracking-tighter uppercase">{candidate.name}</h2>
                                      <div className="flex items-center gap-2 mb-3">
                                          <div className="px-2.5 py-1 bg-indigo-600 text-white text-[9px] font-black rounded-lg uppercase tracking-widest shadow-md shadow-indigo-100">
                                              {candidate.age} AÑOS
                                          </div>
                                          <div className="h-1 w-1 rounded-full bg-slate-300" />
                                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Postulante JP</span>
                                      </div>
                                      <p className="text-[10px] font-bold text-slate-500 leading-tight max-w-[180px]">{candidate.study}</p>
                                  </div>
                              </div>

                              {/* Experience & Skills */}
                              <div className="space-y-6 mb-8">
                                  <section>
                                      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-1.5">
                                          <h3 className="text-[9px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                                              <Briefcase size={10} /> Trayectoria Relevante
                                          </h3>
                                          <TrendingUp size={10} className="text-slate-200" />
                                      </div>
                                      <div className="space-y-2">
                                          {candidate.experience.map((exp: string, i: number) => (
                                              <div key={i} className="text-[9px] font-medium text-slate-600 leading-snug flex gap-3">
                                                  <div className="mt-1.5 h-1 w-1 rounded-full bg-indigo-400 shrink-0" />
                                                  {exp}
                                              </div>
                                          ))}
                                      </div>
                                  </section>
                                  
                                  <div className="grid grid-cols-1 gap-3">
                                      <div className="p-3 bg-indigo-50/50 rounded-2xl border border-indigo-100/50 relative overflow-hidden">
                                          <div className="absolute top-0 right-0 p-2 opacity-10">
                                              <Star size={24} className="text-indigo-600" />
                                          </div>
                                          <span className="text-[8px] font-black text-indigo-600 uppercase tracking-widest block mb-1.5 flex items-center gap-2">
                                              <UserCheck size={9} /> Fortalezas Destacadas
                                          </span>
                                          <p className="text-[9px] font-bold text-indigo-900 leading-relaxed">{candidate.notable}</p>
                                      </div>
                                      <div className="p-3 bg-rose-50/50 rounded-2xl border border-rose-100/50 relative overflow-hidden">
                                          <div className="absolute top-0 right-0 p-2 opacity-10">
                                              <AlertCircle size={24} className="text-rose-600" />
                                          </div>
                                          <span className="text-[8px] font-black text-rose-600 uppercase tracking-widest block mb-1.5 flex items-center gap-2">
                                              <TrendingUp size={9} /> Áreas de Desarrollo
                                          </span>
                                          <p className="text-[9px] font-bold text-rose-900 leading-relaxed">{candidate.toConsider}</p>
                                      </div>
                                  </div>
                              </div>

                              {/* EVALUATOR PANEL - REDESIGNED FOR COMMERCIAL LEADERS */}
                              <div className="mt-auto pt-6 border-t border-slate-100">
                                  <div className="flex justify-between items-center mb-4">
                                      <div className="flex flex-col">
                                          <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Evaluación Comercial</span>
                                          <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest">Anotaciones del Líder</span>
                                      </div>
                                      <div className="flex gap-1.5">
                                          {[
                                              { label: 'AV', color: 'bg-emerald-500', text: 'Avanza' },
                                              { label: 'DU', color: 'bg-amber-500', text: 'Duda' },
                                              { label: 'NA', color: 'bg-rose-500', text: 'No Avanza' }
                                          ].map(opt => (
                                              <div key={opt.label} className="flex flex-col items-center gap-1">
                                                  <div className="w-7 h-7 border-2 border-slate-200 rounded-lg flex items-center justify-center text-[8px] font-black text-slate-300 hover:border-slate-400 transition-colors cursor-pointer">{opt.label}</div>
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-4 mb-4">
                                      <div className="flex flex-col gap-2">
                                          <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Potencial Comercial</span>
                                          <div className="flex gap-1.5">
                                              {[1,2,3,4,5].map(i => (
                                                  <div key={i} className="w-2.5 h-2.5 rounded-full border border-slate-200" />
                                              ))}
                                          </div>
                                      </div>
                                      <div className="flex flex-col gap-2">
                                          <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Ajuste Cultural</span>
                                          <div className="flex gap-1.5">
                                              {[1,2,3,4,5].map(i => (
                                                  <div key={i} className="w-2.5 h-2.5 rounded-full border border-slate-200" />
                                              ))}
                                          </div>
                                      </div>
                                  </div>

                                  <div className="h-32 w-full bg-slate-50/50 rounded-2xl border border-slate-100 p-4 relative overflow-hidden">
                                      <div className="space-y-4">
                                          {[1,2,3,4,5].map(i => (
                                              <div key={i} className="border-b border-slate-200/40 h-px w-full" />
                                          ))}
                                      </div>
                                      <div className="absolute bottom-2 right-3 text-[6px] font-black text-slate-300 uppercase tracking-widest">Observaciones Libres</div>
                                  </div>
                              </div>
                          </div>
                      );
                  })}
              </div>

              <Footer page={++currentPage} total={totalPages} />
          </div>
      ))}

      {/* PAGE 9: CIERRE Y CONTACTO */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
          <Header sectionTitle="CONCLUSIÓN DEL PROCESO" />
          
          <div className="flex-1 flex flex-col justify-center items-center text-center max-w-xl mx-auto">
              <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center text-white text-5xl mb-10 shadow-xl rotate-3">🚀</div>
              <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">{closing.title}</h2>
              <p className="text-xl text-indigo-600 font-black uppercase tracking-[0.4em] mb-16">{closing.subtitle}</p>
              
              <div className="bg-slate-900 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                  <p className="text-2xl font-bold text-white leading-tight italic relative z-10">
                      "{closing.content.description}"
                  </p>
              </div>
          </div>

          <div className="mt-20 border-t-2 border-slate-100 pt-10">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Mesa de Ayuda - Programa JP</h3>
              <div className="flex justify-center gap-20">
                  {closing.content.contacts.map((c: any, i: number) => (
                      <div key={i} className="flex items-center gap-4">
                          <div className="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg">
                              <Mail size={20} />
                          </div>
                          <div className="text-left">
                              <span className="text-[9px] font-black text-indigo-600 uppercase block mb-0.5">{c.role}</span>
                              <span className="text-sm font-black text-slate-900 tracking-tight">{c.email}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          <Footer page={++currentPage} total={totalPages} />
      </div>

      {/* PAGE 10: NOTAS GENERALES Y VOTACIÓN FINAL */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2.5cm] relative flex flex-col bg-white shadow-2xl print:shadow-none">
          <Header sectionTitle="NOTAS GENERALES Y DECISIÓN FINAL" />
          
          <div className="flex-1 py-6 space-y-10">
              <section>
                  <div className="flex items-center gap-3 mb-6">
                      <div className="h-8 w-8 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                          <TrendingUp size={16} />
                      </div>
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Observaciones Consolidadas de la Jornada</h4>
                  </div>
                  <div className="h-[450px] w-full bg-slate-50/30 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-12 relative overflow-hidden">
                      <div className="space-y-8">
                          {[1,2,3,4,5,6,7,8,9,10,11].map(i => (
                              <div key={i} className="border-b border-slate-200/60 h-px w-full" />
                          ))}
                      </div>
                      <div className="absolute bottom-6 right-10 text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">Espacio para síntesis grupal</div>
                  </div>
              </section>

              <section className="bg-slate-900 p-12 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="flex items-center gap-4 mb-10">
                      <div className="h-10 w-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                          <CheckCircle2 size={20} />
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-300">Resumen de Votación Mesa Directiva</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-8">
                      {[
                          { label: 'Seleccionados', icon: UserCheck, color: 'text-emerald-400' },
                          { label: 'En Espera', icon: AlertCircle, color: 'text-amber-400' },
                          { label: 'No Seleccionados', icon: X, color: 'text-rose-400' }
                      ].map(group => (
                          <div key={group.label} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                              <div className="flex items-center gap-3 mb-6">
                                  <group.icon size={14} className={group.color} />
                                  <span className="text-[9px] font-black uppercase tracking-widest opacity-60">{group.label}</span>
                              </div>
                              <div className="h-12 border-b border-white/10" />
                          </div>
                      ))}
                  </div>
              </section>
          </div>

          <Footer page={totalPages} total={totalPages} />
      </div>
    </div>
  );
};
