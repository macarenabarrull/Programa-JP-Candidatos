import React from 'react';
import { SlideData } from '../constants';
import { 
  Briefcase, Mail, GraduationCap
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
    <header className="mb-4 border-b-2 border-slate-900 pb-2 flex justify-between items-end">
        <div>
            <h3 className="text-[7px] text-indigo-600 font-black uppercase tracking-[0.4em] mb-0.5">
                PROGRAMA JP 25-26 | fyo
            </h3>
            <h1 className="text-lg font-black text-slate-900 uppercase tracking-tighter">
                {sectionTitle}
            </h1>
        </div>
        <div className="text-right">
            <div className="text-xl font-black text-slate-900 tracking-tighter leading-none">fyo<span className="text-indigo-500">.</span></div>
        </div>
    </header>
  );

  const Footer = ({ page, total }: { page: number, total: number }) => (
    <footer className="mt-auto pt-4 flex justify-between items-center text-[7px] text-slate-400 border-t border-slate-100">
        <div className="flex items-center gap-3">
            <span className="font-black uppercase tracking-[0.2em] text-slate-900">Dossier Ejecutivo de Selección</span>
            <span className="w-1 h-1 rounded-full bg-indigo-500" />
            <span className="font-bold">Confidencial - Uso Interno</span>
        </div>
        <div className="font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
            PÁGINA {page} DE {total}
        </div>
    </footer>
  );

  const totalPages = 10;
  let currentPage = 1;

  // Group candidates in pairs for the 10-page layout
  const candidatePairs = [];
  for (let i = 0; i < candidateSlides.length; i += 2) {
    candidatePairs.push(candidateSlides.slice(i, i + 2));
  }

  return (
    <div className="w-full bg-slate-100 text-slate-900 font-sans text-[9px] leading-tight print:p-0 print:bg-white">
        
      {/* PAGE 1: PORTADA */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page overflow-hidden">
          <div className="absolute top-0 right-0 w-[150%] h-[50%] bg-indigo-600 -rotate-12 -translate-y-1/2 translate-x-1/4" />
          
          <div className="relative z-10 mt-40">
              <div className="text-8xl font-black text-white tracking-tighter mb-8 leading-none">fyo<span className="text-indigo-300">.</span></div>
              <div className="h-2 w-32 bg-white mb-20"></div>
              
              <h3 className="text-xl font-black text-indigo-100 uppercase tracking-[0.5em] mb-6">Programa JP</h3>
              <h1 className="text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-12 uppercase">
                  Dossier de<br /><span className="text-indigo-600">Candidatos</span>
              </h1>
              
              <div className="max-w-md border-l-4 border-indigo-600 pl-8 py-2">
                  <p className="text-xl text-slate-500 font-bold leading-tight">
                      Evaluación de perfiles para Assessment Center.<br />
                      Mesa Comercial Vendedora 25-26.
                  </p>
              </div>
          </div>

          <div className="mt-auto relative z-10 flex justify-between items-end border-t-2 border-slate-100 pt-10">
              <div className="grid grid-cols-2 gap-16">
                  <div>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-3">Documento</span>
                      <span className="text-base font-black text-slate-900 uppercase tracking-tight">Reporte Ejecutivo</span>
                  </div>
                  <div>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] block mb-3">Fecha</span>
                      <span className="text-base font-black text-slate-900 uppercase tracking-tight">Abril 2026</span>
                  </div>
              </div>
              <div className="text-right">
                  <span className="text-[8px] font-black text-indigo-600 uppercase tracking-[0.3em] block mb-2">Propiedad de</span>
                  <span className="text-sm font-black text-slate-900">Talento & Cultura fyo</span>
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
              
              <div className="flex-1 grid grid-cols-2 gap-8 py-4">
                  {pair.map((slide, idx) => {
                      const candidate = slide.content;
                      return (
                          <div key={idx} className="flex flex-col border-r last:border-r-0 border-slate-100 pr-4 last:pr-0 last:pl-4">
                              {/* Candidate Header */}
                              <div className="flex gap-4 mb-6">
                                  <div className="w-24 h-32 rounded-xl overflow-hidden border-2 border-slate-100 shrink-0 shadow-sm">
                                      {candidate.image ? (
                                          <img src={candidate.image} alt={candidate.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                      ) : (
                                          <CandidateAvatar name={candidate.name} />
                                      )}
                                  </div>
                                  <div className="flex flex-col justify-center">
                                      <h2 className="text-xl font-black text-slate-900 leading-tight mb-1">{candidate.name}</h2>
                                      <div className="inline-block px-2 py-0.5 bg-indigo-600 text-white text-[8px] font-black rounded uppercase tracking-widest mb-2">
                                          {candidate.age} AÑOS
                                      </div>
                                      <p className="text-[9px] font-bold text-slate-500 leading-tight">{candidate.study}</p>
                                  </div>
                              </div>

                              {/* Experience & Skills */}
                              <div className="space-y-4 mb-6">
                                  <section>
                                      <h3 className="text-[8px] font-black text-indigo-600 uppercase tracking-widest mb-2 border-b border-indigo-50 pb-1 flex items-center gap-1">
                                          <Briefcase size={8} /> Experiencia Clave
                                      </h3>
                                      <div className="space-y-1.5">
                                          {candidate.experience.map((exp: string, i: number) => (
                                              <div key={i} className="text-[8px] font-medium text-slate-600 leading-tight flex gap-2">
                                                  <span className="text-indigo-400">•</span>
                                                  {exp}
                                              </div>
                                          ))}
                                      </div>
                                  </section>
                                  
                                  <div className="grid grid-cols-2 gap-3">
                                      <div className="p-2 bg-indigo-50 rounded-lg border border-indigo-100">
                                          <span className="text-[7px] font-black text-indigo-600 uppercase tracking-widest block mb-1 flex items-center gap-1">
                                              <GraduationCap size={7} /> Fortalezas
                                          </span>
                                          <p className="text-[8px] font-bold text-indigo-900 leading-tight">{candidate.notable}</p>
                                      </div>
                                      <div className="p-2 bg-amber-50 rounded-lg border border-amber-100">
                                          <span className="text-[7px] font-black text-amber-600 uppercase tracking-widest block mb-1">A considerar</span>
                                          <p className="text-[8px] font-bold text-amber-900 leading-tight">{candidate.toConsider}</p>
                                      </div>
                                  </div>
                              </div>

                              {/* ANNOTATION AREA - SPACIOUS FOR LEADERS */}
                              <div className="mt-auto pt-4 border-t-2 border-slate-100">
                                  <div className="flex justify-between items-center mb-3">
                                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Anotaciones del Evaluador</span>
                                      <div className="flex gap-2">
                                          {['AV', 'DU', 'NA'].map(l => (
                                              <div key={l} className="w-5 h-5 border-2 border-slate-200 rounded flex items-center justify-center text-[7px] font-black text-slate-300">{l}</div>
                                          ))}
                                      </div>
                                  </div>
                                  <div className="h-40 w-full bg-slate-50/50 rounded-xl border border-slate-100 p-3 relative overflow-hidden">
                                      <div className="space-y-4">
                                          {[1,2,3,4,5,6].map(i => (
                                              <div key={i} className="border-b border-slate-200/50 h-px w-full" />
                                          ))}
                                      </div>
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
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl print:shadow-none">
          <Header sectionTitle="NOTAS GENERALES Y DECISIÓN FINAL" />
          
          <div className="flex-1 py-10 space-y-12">
              <section>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 border-b-2 border-slate-100 pb-2">Observaciones de la Jornada</h4>
                  <div className="h-[400px] w-full bg-slate-50/30 border-2 border-dashed border-slate-200 rounded-[2rem] p-10">
                      <div className="space-y-8">
                          {[1,2,3,4,5,6,7,8,9,10].map(i => (
                              <div key={i} className="border-b border-slate-200 h-px w-full" />
                          ))}
                      </div>
                  </div>
              </section>

              <section className="bg-indigo-900 p-10 rounded-[2.5rem] text-white">
                  <h4 className="text-xs font-black uppercase tracking-widest mb-8 text-indigo-300">Resumen de Votación Mesa Directiva</h4>
                  <div className="grid grid-cols-3 gap-10">
                      <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                          <span className="text-[8px] font-black uppercase tracking-widest block mb-2 opacity-60">Seleccionados</span>
                          <div className="h-10 border-b border-white/20" />
                      </div>
                      <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                          <span className="text-[8px] font-black uppercase tracking-widest block mb-2 opacity-60">En Espera</span>
                          <div className="h-10 border-b border-white/20" />
                      </div>
                      <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                          <span className="text-[8px] font-black uppercase tracking-widest block mb-2 opacity-60">No Seleccionados</span>
                          <div className="h-10 border-b border-white/20" />
                      </div>
                  </div>
              </section>
          </div>

          <Footer page={totalPages} total={totalPages} />
      </div>
    </div>
  );
};
