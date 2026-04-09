
export type IconKey = 'Compass' | 'Target' | 'BrainCircuit' | 'Layers' | 'Zap' | 'ClipboardCheck' | 'Heart' | 'Sparkles' | 'Users' | 'DollarSign' | 'Briefcase' | 'Calendar' | 'GraduationCap' | 'FileText' | 'Flag' | 'PencilRuler' | 'Search' | 'FileSignature' | 'Rocket' | 'BarChart3';

export interface SlideData {
  id: string;
  type: 'cover' | 'objectives' | 'info' | 'timeline' | 'grid' | 'table-granos' | 'table-capital' | 'mentoring-split' | 'academy-split' | 'closing' | 'tutor-content' | 'candidate';
  title?: string;
  subtitle?: string;
  content?: any;
}

export interface CandidateData {
  name: string;
  age: number;
  study: string;
  courses: string[];
  experience: string[];
  notable: string;
  toConsider: string;
  image?: string;
}

export const SLIDES: SlideData[] = [
  {
    id: 'cover',
    type: 'cover',
    title: 'Candidatos JP 25-26',
    subtitle: 'Informe de candidatos para Assessment Center',
    content: {
      highlight: 'Estrategia de Crecimiento fyo',
      tags: ['Talento joven', 'Proceso de selección', 'Mesa comercial']
    }
  },
  {
    id: 'sofia-carignano',
    type: 'candidate',
    content: {
      name: 'Sofía Carignano',
      age: 23,
      study: 'Estudiante avanzada de Contador Público (UNR).',
      courses: ['Técnica en equipos e instalaciones eléctricas.'],
      experience: [
        'Auxiliar contable en Estudio contable A.M. Rodeni y Asoc. (2024-Actualidad).',
        'Gestión de haberes, impuestos y balances.'
      ],
      notable: 'Perfil metódico con alta capacidad de organización y compromiso. Experiencia práctica en gestión contable e impositiva.',
      toConsider: 'Fase final de carrera; evaluar disponibilidad horaria para la mesa.',
      image: ''
    } as CandidateData
  },
  {
    id: 'tiago-cordoba',
    type: 'candidate',
    content: {
      name: 'Tiago Córdoba',
      age: 28,
      study: 'Ingeniero Industrial (UCA).',
      courses: ['Lean Manufacturing', 'ISO 9001', 'Power BI', 'Excel avanzado', 'AutoCAD.'],
      experience: [
        'Analista de Mejora Continua y Calidad en Grupo Cufer (2023-Actualidad).',
        'Analista de procesos en Marcopolo (2023).',
        'Ventas en Vail Resorts (EE.UU.).'
      ],
      notable: 'Sólida experiencia en mejora de procesos y gestión de calidad. Perfil analítico, proactivo y con experiencia internacional.',
      toConsider: 'Transición de perfil técnico a comercial; validar habilidades de negociación.',
      image: ''
    } as CandidateData
  },
  {
    id: 'edgardo-kaial',
    type: 'candidate',
    content: {
      name: 'Edgardo Antonio Kaial',
      age: 23,
      study: 'Lic. en Economía Empresarial y Lic. en Administración de Empresas (Austral).',
      courses: ['CFA Institute Research Challenge 2024', 'Finanzas Corporativas', 'Excel Avanzado.'],
      experience: [
        'Pasantía Profesional en Administración y Finanzas en Maincal S.A. (2025).',
        'Rotación por Tesorería, Pagos y Cobranzas.'
      ],
      notable: 'Potencial analítico sobresaliente y formación de excelencia. Ganador de la primera etapa del CFA Research Challenge.',
      toConsider: 'Escasa exposición comercial directa; validar habilidades de persuasión.',
      image: ''
    } as CandidateData
  },
  {
    id: 'valentin-luzi',
    type: 'candidate',
    content: {
      name: 'Valentín Luzi',
      age: 26,
      study: 'Lic. en Comercialización (Universidad Siglo 21).',
      courses: ['Manejo avanzado de Office', 'Inglés intermedio.'],
      experience: [
        'Analista Comercial en AL2 (Billetera virtual de ACA) (2025-Actualidad).',
        'Sector TACI en ACA (2023-2025).',
        'Operaciones en Sahilices.'
      ],
      notable: 'Conocimiento del ecosistema agro y experiencia en comercialización digital. Buen manejo de personal a cargo.',
      toConsider: 'Validar ajuste a programa de formación inicial vs. trayecto acelerado.',
      image: ''
    } as CandidateData
  },
  {
    id: 'erika-mellano',
    type: 'candidate',
    content: {
      name: 'Erika Mellano',
      age: 24,
      study: 'Estudiante avanzada de Relaciones Internacionales (UNR) - 4 materias restantes.',
      courses: ['Power BI', 'IA con prompting', 'Formación sobre mercados (BCR).'],
      experience: [
        'Responsable de ventas ecommerce en Forza Ferretería Integral (2022-Actualidad).',
        'Coordinadora logística de granos en Prince Cereales (2019).'
      ],
      notable: 'Combinación estratégica de logística de granos y ventas digitales. Perfil resiliente con fuerte orientación al cliente.',
      toConsider: 'Finalización de carrera; profundizar en competencias financieras.',
      image: ''
    } as CandidateData
  },
  {
    id: 'jose-nannini',
    type: 'candidate',
    content: {
      name: 'José Nannini',
      age: 22,
      study: 'Licenciado en Negocios Digitales (UCA).',
      courses: ['Metodologías Ágiles', 'Finanzas y Negocios', 'Inglés (B2).'],
      experience: [
        'Pasante de Finanzas en Grupo Sancor Seguros (2025).',
        'Gestión administrativa de caja y conciliaciones.'
      ],
      notable: 'Perfil híbrido con capacidad para integrar visión estratégica de negocios con soluciones tecnológicas.',
      toConsider: 'Experiencia laboral incipiente; requiere mentoría en negociación tradicional.',
      image: ''
    } as CandidateData
  },
  {
    id: 'lucas-petrolo',
    type: 'candidate',
    content: {
      name: 'Lucas Rubén Petrolo',
      age: 24,
      study: 'Licenciatura en Relaciones Internacionales (UNR) - 30/36 materias.',
      courses: ['Miembro Académico IREMAI', 'Análisis de política exterior', 'Inglés (B1).'],
      experience: [
        'Gerente Comercial en MetalGrill (2025-2026).',
        'Analista de Mercados en F.M Metalúrgica.',
        'Gestión de vínculos comerciales en Metalúrgica J.S.'
      ],
      notable: 'Experiencia comercial en apertura de mercados internacionales. Perfil con alta autonomía y visión global.',
      toConsider: 'Evaluar motivación a largo plazo dado su nivel de experiencia previa.',
      image: ''
    } as CandidateData
  },
  {
    id: 'lucas-ragno',
    type: 'candidate',
    content: {
      name: 'Lucas Ragno',
      age: 24,
      study: 'Estudiante de Ingeniería Industrial (UCA) - Cursando 5to año.',
      courses: ['SAP (Nivel usuario)', 'Power BI', 'AutoCAD', 'Inglés (B1).'],
      experience: [
        'Pasantía en Comercio Exterior y Compras en Marcopolo SA (2025-Actualidad).',
        'Analista Técnico y Logístico en Selecsa SRL (2020-2024).'
      ],
      notable: 'Sólida trayectoria en gestión de operaciones y abastecimiento. Capacidad analítica aplicada a la cadena de valor.',
      toConsider: 'Compatibilidad horaria con el último año de Ingeniería.',
      image: ''
    } as CandidateData
  },
  {
    id: 'juan-rosselli',
    type: 'candidate',
    content: {
      name: 'Juan Ignacio Rosselli',
      age: 22,
      study: 'Licenciado en Marketing (UCA). Técnico Superior en Administración Bancaria (ISET 58).',
      courses: ['Habilidades comerciales', 'Mercado de capitales', 'Inglés intermedio.'],
      experience: [
        'Asesor comercial en Giorgi Concesionario Oficial Ford (2025).',
        'Panelista y Productor en Vive TV (2024).',
        'Auxiliar administrativo contable.'
      ],
      notable: 'Perfil netamente comercial con experiencia en ventas y comunicación. Visión comercial aplicada al entorno digital.',
      toConsider: 'Validar profundidad analítica para herramientas financieras complejas.',
      image: ''
    } as CandidateData
  },
  {
    id: 'lucca-sorrentino',
    type: 'candidate',
    content: {
      name: 'Lucca Sorrentino',
      age: 22,
      study: 'Estudiante avanzado de Lic. en Administración de Empresas (UNR) - 85% aprobado.',
      courses: ['SAP', 'Análisis de estados de resultados', 'Inglés.'],
      experience: [
        'Analista de Compras en Milicic S.A. (2025-Actualidad).',
        'Analista Comercial en Maineri y Asociados (2025).'
      ],
      notable: 'Perfil analítico, confiable y orientado a resultados. Capacidad para proyectar escenarios futuros y toma de decisiones.',
      toConsider: 'Compatibilidad horaria (cursa de noche); requiere 6 materias y tesis para finalizar.',
      image: ''
    } as CandidateData
  },
  {
    id: 'nicolas-valdettaro',
    type: 'candidate',
    content: {
      name: 'Nicolás Valdettaro',
      age: 22,
      study: 'Licenciado en Economía Empresarial (Austral). Estudiante de Lic. en Administración (Austral).',
      courses: ['CFA Research Challenge', 'Formación Bolsa de Comercio Rosario.'],
      experience: [
        'Pasante de Finanzas Operativas en Maincal S.A. (2025).',
        'Facturación y cobranzas.'
      ],
      notable: 'Sólida formación académica. Finalista del CFA Research Challenge. Perfil proactivo con interés en mercados.',
      toConsider: 'Desarrollo de habilidades específicas para la negociación de granos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'juan-vinderola',
    type: 'candidate',
    content: {
      name: 'Juan Cruz Vinderola Breppe',
      age: 23,
      study: 'Estudiante avanzado de Lic. en Economía (UNR) - Cursada finalizada.',
      courses: ['Mercado de Capitales (BCR)', 'Programación para finanzas (Python, R).'],
      experience: [
        'Atención al Cliente y Caja en Librerías Lader (2024).',
        'Técnico electrónico en ASM-electrónica (2021-2022).'
      ],
      notable: 'Fuerte base financiera y analítica. Conocimiento en herramientas de análisis de datos (Python, R).',
      toConsider: 'Validar habilidades comerciales y de negociación directa.',
      image: ''
    } as CandidateData
  },
  {
    id: 'closing',
    type: 'closing',
    title: 'MUCHAS GRACIAS',
    subtitle: 'Programa JP 25-26 | Candidatos granos',
    content: {
      description: 'En fyo, creemos en el poder de las personas para transformar el agro. La cultura de fyo se basa en la confianza, la colaboracion y la innovación.',
      contacts: [
        { role: 'TBP', email: 'mbarrull@fyo.com' },
        { role: 'Talento', email: 'talentos@fyo.com' }
      ]
    }
  }
];
