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
  const objectives = slides.find(s => s.type === 'objectives');
  const info = slides.find(s => s.type === 'info');
  const closing = slides.find(s => s.id === 'closing');

  if (!closing) {
    return <div className="p-12 text-center text-red-600 font-bold">Error: Datos incompletos para el reporte.</div>;
  }

  const Header = ({ sectionTitle = "PERFIL DE CANDIDATO" }) => (
    <header className="mb-6 border-b border-indigo-100 pb-3 flex justify-between items-end">
        <div>
            <h3 className="text-[8px] text-indigo-500 font-black uppercase tracking-[0.3em] mb-0.5">
                ASSESSMENT CENTER JP 2026
            </h3>
            <h1 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                {sectionTitle}
            </h1>
        </div>
        <div className="text-right">
            <div className="text-2xl font-black text-slate-200 tracking-tighter leading-none">fyo<span className="text-indigo-500">.</span></div>
        </div>
    </header>
  );

  const Footer = ({ page, total }: { page: number, total: number }) => (
    <footer className="mt-auto pt-4 flex justify-between items-center text-[8px] text-slate-400 border-t border-slate-50">
        <div className="flex items-center gap-3">
            <span className="font-black uppercase tracking-[0.15em] text-slate-800">Dossier de Candidatos</span>
            <span className="w-0.5 h-0.5 rounded-full bg-slate-200" />
            <span className="font-medium">Confidencial - Programa JP fyo</span>
        </div>
        <div className="font-bold text-slate-500">
            PÁGINA {page} DE {total}
        </div>
    </footer>
  );

  const totalPages = candidateSlides.length + (objectives ? 1 : 0) + (info ? 1 : 0) + 2; // +1 cover, +1 closing
  let currentPage = 1;

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans text-[10px] leading-relaxed print:p-0 print:bg-white">
        
      {/* --- PORTADA --- */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2.5cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full -mr-24 -mt-24 blur-3xl" />
          
          <div className="relative z-10 mt-32">
              <div className="text-6xl font-black text-slate-100 tracking-tighter mb-4 leading-none">fyo<span className="text-indigo-500">.</span></div>
              <div className="h-1 w-16 bg-indigo-500 mb-12"></div>
              
              <h3 className="text-base font-black text-indigo-500 uppercase tracking-[0.4em] mb-4">Programa JP</h3>
              <h1 className="text-5xl font-black text-slate-900 leading-[1] tracking-tighter mb-10 uppercase">
                  Candidatos<br /><span className="text-indigo-500">JP 25-26</span>
              </h1>
              
              <div className="max-w-sm border-l-2 border-indigo-100 pl-6 py-1">
                  <p className="text-base text-slate-500 font-medium leading-relaxed">
                      Informe de candidatos para Assessment Center. Mesa Comercial Vendedora.
                  </p>
              </div>
          </div>

          <div className="mt-auto relative z-10">
              <div className="grid grid-cols-2 gap-10 border-t border-slate-200 pt-8">
                  <div>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Documento</span>
                      <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Reporte de Selección</span>
                  </div>
                  <div>
                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2">Fecha</span>
                      <span className="text-sm font-black text-slate-900 uppercase tracking-tight">Abril 2026</span>
                  </div>
              </div>
          </div>
      </div>

      {/* --- OBJETIVOS (If exists) --- */}
      {objectives && (
        <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
            <Header sectionTitle="OBJETIVOS DEL PROGRAMA" />
            <div className="flex-1 flex flex-col justify-center">
                <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 mb-8">
                    <p className="text-lg font-black text-indigo-900 text-center leading-tight">
                        {objectives.content.mainGoal}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Pilares Estratégicos</h4>
                        <div className="grid grid-cols-1 gap-2">
                            {objectives.content.pillars.map((p: string, i: number) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                    <span className="font-bold text-slate-700">{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Métricas del Proceso</h4>
                        <div className="grid grid-cols-1 gap-2">
                            {objectives.content.stats.map((s: any, i: number) => (
                                <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                    <span className="font-bold text-slate-500">{s.label}</span>
                                    <span className="text-lg font-black text-indigo-600">{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer page={++currentPage} total={totalPages} />
        </div>
      )}

      {/* --- INFO FYO (If exists) --- */}
      {info && (
        <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
            <Header sectionTitle="EL ECOSISTEMA FYO" />
            <div className="flex-1 flex flex-col justify-center gap-10">
                <div className="grid grid-cols-3 gap-4">
                    {info.content.stats.map((s: any, i: number) => (
                        <div key={i} className="p-6 bg-indigo-600 rounded-2xl text-center text-white shadow-lg">
                            <span className="block text-[8px] font-black uppercase tracking-widest opacity-70 mb-1">{s.label}</span>
                            <span className="text-xl font-black">{s.value}</span>
                        </div>
                    ))}
                </div>
                <div className="space-y-6">
                    <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Nuestra Propuesta de Valor</h4>
                    <div className="grid grid-cols-2 gap-6">
                        {info.content.valueProp.map((v: any, i: number) => (
                            <div key={i} className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                <h5 className="text-sm font-black text-indigo-600 mb-2">{v.title}</h5>
                                <p className="text-[10px] font-bold text-slate-600 leading-relaxed">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer page={++currentPage} total={totalPages} />
        </div>
      )}

      {/* --- CANDIDATE PAGES --- */}
      {candidateSlides.map((slide) => {
          const candidate = slide.content;
          return (
            <div key={slide.id} className="w-[210mm] h-[297mm] mx-auto p-[1.5cm] relative flex flex-col bg-white shadow-2xl mb-12 print:shadow-none print:mb-0 print:break-after-page">
                <Header sectionTitle={`PERFIL: ${candidate.name.toUpperCase()}`} />
                
                <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-3">
                            <div className="aspect-[3/4] rounded-xl overflow-hidden border border-slate-100 shadow-sm mb-3">
                                {candidate.image ? (
                                    <img 
                                        src={candidate.image} 
                                        alt={candidate.name}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <CandidateAvatar name={candidate.name} />
                                )}
                            </div>
                            <div className="space-y-2">
                                <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="text-[6px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">Edad</span>
                                    <span className="text-xs font-bold text-slate-900">{candidate.age} años</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-span-9 space-y-4">
                            <section className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                <h2 className="text-[8px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2">
                                    <GraduationCap size={10} /> Formación Académica
                                </h2>
                                <p className="text-[9px] font-bold text-slate-700 leading-tight">{candidate.study}</p>
                            </section>

                            <div className="grid grid-cols-2 gap-4">
                                <section>
                                    <h2 className="text-[8px] font-black text-indigo-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                        <Briefcase size={10} /> Experiencia
                                    </h2>
                                    <div className="space-y-1.5">
                                        {candidate.experience.map((exp: string, i: number) => (
                                            <div key={i} className="p-2 bg-slate-50 rounded-lg border border-slate-100 text-[8px] font-medium text-slate-600 leading-tight">
                                                {exp}
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-[8px] font-black text-emerald-500 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                        <GraduationCap size={10} /> Capacitaciones
                                    </h2>
                                    <ul className="space-y-1">
                                        {candidate.courses.map((c: string, i: number) => (
                                            <li key={i} className="flex items-start gap-1.5 text-[8px] font-bold text-slate-500 leading-tight">
                                                <div className="w-1 h-1 rounded-full bg-emerald-400 mt-1 shrink-0" />
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                                    <span className="text-[6px] font-black text-indigo-500 uppercase tracking-widest block mb-1">Fortalezas</span>
                                    <p className="text-[8px] font-bold text-indigo-900 leading-tight">{candidate.notable}</p>
                                </div>
                                <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                                    <span className="text-[6px] font-black text-amber-500 uppercase tracking-widest block mb-1">A considerar</span>
                                    <p className="text-[8px] font-bold text-amber-900 leading-tight">{candidate.toConsider}</p>
                                </div>
                            </div>

                            {/* Evaluation Section for Leaders - Redesigned for Print */}
                            <div className="mt-4 border-t border-slate-200 pt-4">
                                <div className="flex justify-between items-center mb-3">
                                    <h3 className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Evaluación del Líder</h3>
                                    <div className="flex gap-3">
                                        {['Avanza', 'Duda', 'No Avanza'].map((label) => (
                                            <div key={label} className="flex items-center gap-1.5">
                                                <div className="w-3 h-3 border border-slate-300 rounded-sm" />
                                                <span className="text-[7px] font-bold text-slate-500 uppercase">{label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-20 w-full border border-slate-200 rounded-lg bg-slate-50/20 p-2 relative">
                                    <span className="text-[6px] font-black text-slate-300 uppercase tracking-widest absolute top-2 left-2">Observaciones:</span>
                                    {/* Lines for handwriting */}
                                    <div className="mt-4 space-y-3">
                                        <div className="border-b border-slate-100 h-px w-full" />
                                        <div className="border-b border-slate-100 h-px w-full" />
                                        <div className="border-b border-slate-100 h-px w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer page={++currentPage} total={totalPages} />
            </div>
          );
      })}

      {/* --- CIERRE --- */}
      <div className="w-[210mm] h-[297mm] mx-auto p-[2cm] relative flex flex-col bg-white shadow-2xl print:shadow-none">
          <Header sectionTitle="CONCLUSIÓN Y SIGUIENTES PASOS" />
          
          <div className="flex-1 flex flex-col justify-center items-center text-center max-w-lg mx-auto">
              <div className="text-6xl mb-8">🚀</div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">{closing.title}</h2>
              <p className="text-sm text-indigo-500 font-black uppercase tracking-[0.4em] mb-12">{closing.subtitle}</p>
              
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 w-full mb-10">
                  <p className="text-base font-bold text-slate-700 leading-relaxed italic">
                      "{closing.content.description}"
                  </p>
              </div>
          </div>

          <div className="mt-12 border-t border-slate-100 pt-8">
              <h3 className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 text-center">Contacto Programa JP</h3>
              <div className="flex justify-center gap-16">
                  {closing.content.contacts.map((c: any, i: number) => (
                      <div key={i} className="flex items-center gap-3">
                          <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
                              <Mail size={16} />
                          </div>
                          <div className="text-left">
                              <span className="text-[7px] font-black text-slate-400 uppercase block">{c.role}</span>
                              <span className="text-xs font-black text-slate-900">{c.email}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          <Footer page={totalPages} total={totalPages} />
      </div>
    </div>
  );
};
