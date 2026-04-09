
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
      toConsider: 'Manejo de ansiedades y proyeccion dentro de la compañía, acompañamiento en su desarrollo profesional.',
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
      toConsider: 'No posee conocimiento en la comercializacion de granos',
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
    id: 'erika-mellano',
    type: 'candidate',
    content: {
      name: 'Erika Mellano',
      age: 24,
      study: 'Estudiante avanzada de Relaciones Internacionales (UNR) - 4 materias restantes.',
      courses: ['Programa de Formación comercial (BCR).'],
      experience: [
        'Responsable de ventas ecommerce en Forza Ferretería Integral (2022-Actualidad).',
        'Pasantía como Coordinadora logística de granos en Prince Cereales (2019).'
      ],
      notable: 'Perfil con muchas ganas de aprender y desarrollarse profesionalmente. Disfruta de entornos dinámicos y valora la posibilidad de seguir incorporando conocimientos.',
      toConsider: 'Profundizar su perfil tecnico y comercial.',
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
      courses: ['Inglés (B2).'],
      experience: [
        'Pasante de Finanzas en Grupo Sancor Seguros (2025). Mantenía diálogo con clientes y proveedores para la resolución de cobros y pagos y elaboraba reportes diarios de saldo de caja al cierre de la jornada.'
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
      courses: ['Inglés (B1).'],
      experience: [
        'Gerente Comercial en MetalGrill (2025-2026).',
        'Analista de Mercados en F.M Metalúrgica.',
        'Gestión de vínculos comerciales en Metalúrgica J.S.'
      ],
      notable: 'Experiencia comercial en apertura de mercados internacionales. Perfil con alta autonomía y visión global.',
      toConsider: 'Acompañamiento en su plan profesional y motivacion.',
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
      notable: 'Perfil con gran interes en la comercializacion de granos, considera su carrera como un abanico de posibilidades.',
      toConsider: 'No posee experiencia directa en la comercialización.',
      image: ''
    } as CandidateData
  },
  {
    id: 'sofia-carignano',
    type: 'candidate',
    content: {
      name: 'Sofía Carignano',
      age: 23,
      study: 'Estudiante avanzada de Contador Público (UNR).',
      courses: [],
      experience: [
        'Auxiliar contable en Estudio contable A.M. Rodeni y Asoc. (2024-Actualidad). Gran parte de los clientes del estudio pertenecen al sector agropecuario'
      ],
      notable: 'Perfil metódico con alta capacidad de organización y compromiso. Menciona que el hecho de trabajar actualmente con clientes del agro dentro del estudio reforzó ese interés.',
      toConsider: 'Desarrollar su perfil comercial.',
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
      courses: ['CFA Institute Research Challenge 2024', 'Excel Avanzado.'],
      experience: [
        'Pasantía Profesional en Administración y Finanzas en Maincal S.A. (2025).',
        'Rotación por Tesorería, Pagos y Cobranzas.'
      ],
      notable: 'Perfil comprometido con las tareas que asume. Suele intentar resolver los desafíos de manera autónoma, recurriendo a distintos recursos y alternativas para encontrar soluciones.',
      toConsider: 'Escasa exposición comercial directa; validar habilidades de persuasión.',
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
      courses: ['Habilidades comerciales', 'Inglés intermedio.'],
      experience: [
        'Asesor comercial en Giorgi Concesionario Oficial Ford (2025).',
        'Panelista y Productor en Vive TV (2024).',
        'Auxiliar administrativo contable.'
      ],
      notable: 'Perfil netamente comercial con experiencia en ventas y comunicación.',
      toConsider: 'Validar ajuste a la cultura fyo.',
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
      notable: 'Fuerte base analítica con gran interés en volcar sus conocimientos al mercado de granos. Proactivo en la búsqueda de soluciones basadas en datos.',
      toConsider: 'Desarrollo de experiencia específica en el sector agropecuario y negociación comercial.',
      image: ''
    } as CandidateData
  },
  {
    id: 'nicolas-baccin',
    type: 'candidate',
    content: {
      name: 'Nicolás Baccin',
      age: 27,
      study: 'Estudiante avanzado de Ingeniería Industrial (UCA).',
      courses: [],
      experience: [
        'Analista de Energía & Utilidades en BASF SA Argentina (2025-Actualidad).',
        'Pasante de Energía & Utilidades en BASF SA Argentina (2024-2025).',
        'Asistente de Operaciones en Metalúrgica Baccin (2020-2021).'
      ],
      notable: 'Perfil con formación en Ingeniería que permite una visión global de los procesos y un enfoque altamente analítico. Posee gran capacidad de comunicación y facilidad para integrar datos complejos.',
      toConsider: 'Busca reorientar su carrera hacia el área comercial y un nuevo rubro, alejándose del enfoque estrictamente técnico de procesos para incursionar en el desarrollo de negocios.',
      image: ''
    } as CandidateData
  },
  {
    id: 'mirko-viscovich',
    type: 'candidate',
    content: {
      name: 'Mirko Viscovich',
      age: 21,
      study: 'Técnico en Gestión de Agronegocios (Instituto Superior Parque España).',
      courses: ['Operador del mercado de granos (Bolsa de Comercio de Rosario).'],
      experience: [
        'Administración comercial en Turbom Argentina I.C.S.A. (2023-Actualidad).',
        'Gestión integral en empresa familiar de equipos de riego.'
      ],
      notable: 'Perfil proactivo y emprendedor con marcada actitud comercial. Gran facilidad para generar relaciones interpersonales y pasión por el dinamismo del agro.',
      toConsider: 'Busca especializarse exclusivamente en el mercado de granos en una organización de mayor envergadura.',
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
