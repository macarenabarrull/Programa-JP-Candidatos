
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
    title: 'JORNADA DE SELECCIÓN 2026',
    subtitle: 'Mesa Comercial Vendedora | Informe de Candidatos',
    content: {
      highlight: 'Estrategia de Crecimiento fyo',
      tags: ['Talento fyo', 'Mentalidad Comercial', 'Innovación Agro']
    }
  },
  {
    id: 'objectives',
    type: 'objectives',
    title: 'OBJETIVOS DEL PROGRAMA',
    subtitle: 'Hacia la Excelencia Comercial',
    content: {
      mainGoal: 'Incorporar 10 Jóvenes Profesionales con mentalidad comercial y visión estratégica para liderar el futuro del agro.',
      stats: [
        { label: 'Candidatos', value: '45', icon: 'Users' },
        { label: 'Vacantes', value: '10', icon: 'Target' },
        { label: 'Semanas', value: '4', icon: 'Calendar' }
      ],
      pillars: ['Agilidad Comercial', 'Visión de Negocio', 'Excelencia Operativa', 'Cultura fyo']
    }
  },
  {
    id: 'info',
    type: 'info',
    title: 'EL ECOSISTEMA FYO',
    subtitle: 'Liderazgo y Transformación',
    content: {
      bullets: [
        'Compañía líder en servicios integrales para el agro.',
        'Cultura de alto desempeño y mejora continua.',
        'Plan de carrera diseñado para el crecimiento acelerado.'
      ],
      stats: [
        { label: 'Presencia', value: 'Nacional', icon: 'Flag' },
        { label: 'Colaboradores', value: '+1000', icon: 'Users' },
        { label: 'Trayectoria', value: '25 Años', icon: 'Rocket' }
      ],
      valueProp: [
        { title: 'Mentoreo', text: 'Acompañamiento directo por líderes de la mesa.' },
        { title: 'Academia', text: 'Formación técnica y comercial de primer nivel.' }
      ]
    }
  },
  {
    id: 'grid',
    type: 'grid',
    title: 'NUESTROS VALORES',
    subtitle: 'El ADN que nos define',
    content: {
      items: [
        { title: 'Pasión por el Cliente', desc: 'Entendemos sus necesidades para brindar soluciones de valor.', icon: 'Heart' },
        { title: 'Mentalidad Ganadora', desc: 'Buscamos la excelencia y superamos nuestros límites.', icon: 'Zap' },
        { title: 'Integridad', desc: 'Actuamos con transparencia y coherencia en cada paso.', icon: 'Shield' },
        { title: 'Innovación', desc: 'Desafiamos el status quo para crear el futuro del agro.', icon: 'Sparkles' }
      ]
    }
  },
  {
    id: 'table-granos',
    type: 'table-granos',
    title: 'ROTACIÓN COMERCIAL GRANOS',
    subtitle: 'Cronograma de Aprendizaje Práctico',
    content: {}
  },
  {
    id: 'table-capital',
    type: 'table-capital',
    title: 'ROTACIÓN FYOCAPITAL',
    subtitle: 'Especialización Financiera',
    content: {}
  },
  {
    id: 'mentoring-split',
    type: 'mentoring-split',
    title: 'PROGRAMA DE MENTOREO',
    subtitle: 'Guía y Acompañamiento Estratégico',
    content: {
      granosMentors: ['Alejandro C.', 'Marina S.', 'Federico L.', 'Paula M.'],
      capitalMentors: ['Gustavo R.', 'Julieta B.', 'Marcos T.', 'Sofía G.'],
      consultoriaMentors: ['Dante P.', 'Lucía V.'],
      considerations: [
        'Sesiones semanales de feedback.',
        'Definición de objetivos trimestrales.',
        'Sombra comercial en negociaciones reales.'
      ]
    }
  },
  {
    id: 'academy-split',
    type: 'academy-split',
    title: 'FYO ACADEMY',
    subtitle: 'Formación Técnica Intensiva',
    content: {
      topics: [
        'Mercado de Granos',
        'Finanzas Agrarias',
        'Estrategias de Venta',
        'Logística y Operativa',
        'Herramientas Digitales',
        'Negociación Avanzada',
        'Análisis de Riesgo',
        'Coyuntura Económica'
      ]
    }
  },
  {
    id: 'rol-tutor',
    type: 'tutor-content',
    title: 'EL ROL DEL TUTOR',
    subtitle: 'Facilitador del Aprendizaje',
    content: {
      description: 'El tutor es el nexo fundamental entre el conocimiento teórico y la práctica comercial diaria.'
    }
  },
  {
    id: 'etapas-aprendizaje',
    type: 'tutor-content',
    title: 'ETAPAS DE APRENDIZAJE',
    subtitle: 'Evolución del Joven Profesional',
    content: {
      description: 'Un proceso estructurado para garantizar la autonomía y el dominio del rol.',
      table: {
        rows: [
          ['Observación', 'Acompaña', 'Entiende el flujo'],
          ['Ejecución Guiada', 'Realiza', 'Bajo supervisión'],
          ['Autonomía', 'Lidera', 'Con soporte puntual']
        ]
      }
    }
  },
  {
    id: 'sofia-carignano',
    type: 'candidate',
    content: {
      name: 'Sofía Carignano',
      age: 23,
      study: 'Estudiante avanzada de Contador Público (UNR) - 5 materias restantes.',
      courses: ['Técnica en equipos e instalaciones eléctricas (Secundario).'],
      experience: [
        'Auxiliar contable en Estudio A.M. Rodeni y Asoc (2024-Actualidad).',
        'Gestión de haberes, impuestos y balances.'
      ],
      notable: 'Perfil con alta capacidad de autogestión y rigor analítico. Demuestra un equilibrio sólido entre formación técnica y administrativa, lo que sugiere versatilidad operativa.',
      toConsider: 'Fase final de carrera; requiere seguimiento de carga académica para asegurar disponibilidad de tiempo completo en la mesa.',
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
      courses: ['Mejora de Procesos', 'Normas ISO 9001', 'Power BI', 'Excel avanzado', 'Experiencia Internacional (EE.UU.).'],
      experience: [
        'Analista de Mejora Continua y Calidad en Grupo Cufer (2023-2025).',
        'Analista de procesos en Marcopolo (2023).',
        'Ventas en Vail Resorts (EE.UU.).'
      ],
      notable: 'Candidato con madurez profesional y mentalidad de mejora continua. Su experiencia internacional aporta adaptabilidad y dominio del idioma en contextos dinámicos.',
      toConsider: 'Transición de perfil técnico a comercial; evaluar empuje de ventas y tolerancia a la frustración en el mercado de granos.',
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
      courses: ['CFA Institute Research Challenge 2024 (Ganador 1ra etapa)', 'Excel Avanzado', 'Finanzas.'],
      experience: [
        'Pasantía Profesional en Administración y Finanzas en Maincal S.A. (2025).',
        'Rotación por Tesorería, Pagos y Cobranzas.'
      ],
      notable: 'Potencial analítico sobresaliente. Formación de excelencia con visión estratégica. Perfil de alto potencial para áreas que requieran modelado financiero complejo.',
      toConsider: 'Escasa exposición comercial directa; validar habilidades de negociación y persuasión frente a productores.',
      image: ''
    } as CandidateData
  },
  {
    id: 'valentin-luzi',
    type: 'candidate',
    content: {
      name: 'Valentín Luzi',
      age: 26,
      study: 'Lic. en Comercialización (Siglo 21 - Finalizando cursada).',
      courses: ['Manejo avanzado de Office.', 'Inglés intermedio.'],
      experience: [
        'Analista Comercial en AL2 (Billetera virtual de ACA) (2025-Actualidad).',
        'Sector Aplicaciones en ACA (2023-2025).',
        'Operaciones en Sahilices.'
      ],
      notable: 'Conocimiento previo del ecosistema agro, lo que reduce la curva de aprendizaje. Perfil orientado a la comercialización digital, alineado con la transformación de fyo.',
      toConsider: 'Validar si su experiencia actual se ajusta a un programa de formación inicial o si requiere un trayecto acelerado.',
      image: ''
    } as CandidateData
  },
  {
    id: 'erika-mellano',
    type: 'candidate',
    content: {
      name: 'Erika Mellano',
      age: 24,
      study: 'Estudiante avanzada de Relaciones Internacionales (UNR) - 3 finales restantes.',
      courses: ['Power BI', 'Inteligencia Artificial', 'Formación sobre mercados (BCR).'],
      experience: [
        'Responsable de ventas digitales en Forza Ferretería Integral (2022-Actualidad).',
        'Coordinadora logística de granos en Prince Cereales (2019).'
      ],
      notable: 'Combinación estratégica de logística de granos y ventas digitales. Perfil resiliente con fuerte orientación al cliente y conocimiento operativo del flujo de mercadería.',
      toConsider: 'Formación de base en Relaciones Internacionales; profundizar en el desarrollo de competencias financieras y de mercado de capitales.',
      image: ''
    } as CandidateData
  },
  {
    id: 'jose-nannini',
    type: 'candidate',
    content: {
      name: 'José Nannini',
      age: 22,
      study: 'Lic. en Negocios Digitales (UCA).',
      courses: ['Metodologías Ágiles', 'Inglés (FCE).'],
      experience: [
        'Pasante de Finanzas en Grupo Sancor Seguros (2025).',
        'Gestión administrativa de caja y conciliaciones.'
      ],
      notable: 'Mentalidad digital nativa. Su formación es un activo para la evolución de la mesa comercial. Perfil innovador con capacidad de síntesis.',
      toConsider: 'Experiencia laboral incipiente; requiere mentoría intensiva en la dinámica de negociación tradicional del agro.',
      image: ''
    } as CandidateData
  },
  {
    id: 'lucas-petrolo',
    type: 'candidate',
    content: {
      name: 'Lucas Rubén Petrolo',
      age: 24,
      study: 'Estudiante avanzado de Relaciones Internacionales (UNR) - 30/36 materias.',
      courses: ['Miembro Académico IREMAI', 'Inglés intermedio', 'Italiano inicial.'],
      experience: [
        'Gerente Comercial en MetalGrill (2025-2026).',
        'Analista de Mercados y Vínculos Institucionales.',
        'Gestión de vínculos comerciales en Metalúrgica J.S.'
      ],
      notable: 'Experiencia comercial destacada con apertura de mercados internacionales. Perfil con alta autonomía, liderazgo natural y visión global del negocio.',
      toConsider: 'Evaluar motivación a largo plazo dentro de un programa de jóvenes profesionales dada su experiencia previa.',
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
      courses: ['SAP (Nivel usuario)', 'Power BI', 'AutoCAD', 'Inglés intermedio.'],
      experience: [
        'Pasante en Comercio Exterior y Compras en Marcopolo SA (2025-Actualidad).',
        'Analista Técnico y Logístico en Selecsa SRL (2020-2024).'
      ],
      notable: 'Perfil de Ingeniería con sólida base en Comercio Exterior y Logística. Demuestra estabilidad y progresión en sus experiencias previas. Capacidad analítica aplicada.',
      toConsider: 'Compatibilidad horaria con el último tramo de la carrera de Ingeniería.',
      image: ''
    } as CandidateData
  },
  {
    id: 'juan-rosselli',
    type: 'candidate',
    content: {
      name: 'Juan Ignacio Rosselli',
      age: 22,
      study: 'Lic. en Marketing (UCA). Técnico Superior en Administración Bancaria (ISET 58).',
      courses: ['Certificación en habilidades comerciales', 'Inglés intermedio.'],
      experience: [
        'Asesor comercial en Giorgi (Ford) (2025).',
        'Panelista y Productor en Vive TV (2024).',
        'Auxiliar administrativo contable.'
      ],
      notable: 'Perfil netamente comercial con empuje de ventas comprobado en sectores competitivos. Excelentes habilidades interpersonales y capacidad de cierre.',
      toConsider: 'Validar profundidad analítica para el manejo de herramientas financieras complejas de la mesa.',
      image: ''
    } as CandidateData
  },
  {
    id: 'nicolas-valdettaro',
    type: 'candidate',
    content: {
      name: 'Nicolás Valdettaro',
      age: 22,
      study: 'Lic. en Economía Empresarial (Austral). Estudiante de Lic. en Administración (Austral).',
      courses: ['CFA Research Challenge', 'Formación Bolsa de Comercio Rosario.'],
      experience: [
        'Pasante de Finanzas Operativas en Maincal S.A. (2025).',
        'Facturación y cobranzas.'
      ],
      notable: 'Sólida formación académica. Perfil proactivo con interés genuino en la dinámica de mercados. Buen equilibrio entre análisis y sociabilidad.',
      toConsider: 'Desarrollo de habilidades específicas para la negociación de granos y manejo de objeciones del productor.',
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
      courses: ['Especialización en Mercado de Capitales (BCR)', 'Programación para finanzas.'],
      experience: [
        'Técnico electrónico en ASM-electrónica (2021-2022).',
        'Atención al cliente en Librerías Lader.'
      ],
      notable: 'Fuerte enfoque analítico y financiero. Tesina orientada a riesgo climático en el agro. Perfil técnico-económico con gran potencial para inteligencia de mercado.',
      toConsider: 'Carga académica remanente; evaluar impacto en la dedicación horaria inmediata.',
      image: ''
    } as CandidateData
  },
  {
    id: 'felipe-sanchez',
    type: 'candidate',
    content: {
      name: 'Felipe Sanchez',
      age: 24,
      study: 'Ingeniero Agrónomo (UNR).',
      courses: ['Manejo de Suelos', 'Agrotecnología', 'Excel Avanzado.'],
      experience: [
        'Pasantía en INTA (2024).',
        'Ayudante de cátedra en Fitopatología.'
      ],
      notable: 'Perfil técnico con gran capacidad de observación en campo. Proactivo y con excelente disposición para el trabajo en equipo.',
      toConsider: 'Enfocar su desarrollo en habilidades de negociación comercial.',
      image: ''
    } as CandidateData
  },
  {
    id: 'geronimo-martinez',
    type: 'candidate',
    content: {
      name: 'Gerónimo Martínez',
      age: 23,
      study: 'Lic. en Economía (Austral).',
      courses: ['Análisis de Datos', 'Python para Finanzas', 'Mercado de Capitales.'],
      experience: [
        'Analista Junior en Consultora Económica (2024-2025).',
        'Investigación de mercados locales.'
      ],
      notable: 'Capacidad analítica superior y manejo de herramientas de modelado. Visión estratégica del mercado.',
      toConsider: 'Validar su adaptabilidad a entornos comerciales de alta presión.',
      image: ''
    } as CandidateData
  },
  {
    id: 'francisco-lopez',
    type: 'candidate',
    content: {
      name: 'Francisco López',
      age: 25,
      study: 'Lic. en Administración de Empresas (UCA).',
      courses: ['Liderazgo', 'Gestión de Proyectos', 'Inglés Avanzado.'],
      experience: [
        'Coordinador de Ventas en Pyme Familiar (2023-2025).',
        'Gestión de cartera de clientes.'
      ],
      notable: 'Marcada orientación a resultados y liderazgo natural. Experiencia práctica en gestión comercial.',
      toConsider: 'Profundizar en conocimientos técnicos específicos del mercado de granos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'manuel-garcia',
    type: 'candidate',
    content: {
      name: 'Manuel García',
      age: 22,
      study: 'Lic. en Comercialización (UADE).',
      courses: ['Marketing Digital', 'Estrategias de Venta', 'CRM.'],
      experience: [
        'Vendedor en sector automotriz (2024).',
        'Atención al cliente y prospección.'
      ],
      notable: 'Gran capacidad de persuasión y comunicación. Perfil dinámico y orientado al cliente.',
      toConsider: 'Fortalecer su base técnica en finanzas y economía agraria.',
      image: ''
    } as CandidateData
  },
  {
    id: 'agustina-perez',
    type: 'candidate',
    content: {
      name: 'Agustina Pérez',
      age: 23,
      study: 'Contador Público (UNR).',
      courses: ['Impuestos', 'Auditoría', 'Power BI.'],
      experience: [
        'Asistente contable en Estudio Integral (2024-Actualidad).',
        'Conciliaciones bancarias y balances.'
      ],
      notable: 'Rigurosidad en el manejo de datos y procesos. Perfil confiable y con gran capacidad de aprendizaje.',
      toConsider: 'Evaluar su interés en roles comerciales vs. administrativos/financieros.',
      image: ''
    } as CandidateData
  },
  {
    id: 'martina-rodriguez',
    type: 'candidate',
    content: {
      name: 'Martina Rodríguez',
      age: 24,
      study: 'Lic. en Relaciones Internacionales (Austral).',
      courses: ['Comercio Exterior', 'Negociación Internacional', 'Chino Básico.'],
      experience: [
        'Pasantía en Cámara de Comercio Exterior (2025).',
        'Gestión de documentos de exportación.'
      ],
      notable: 'Visión global y excelentes habilidades de comunicación. Capacidad para manejar vínculos institucionales.',
      toConsider: 'Orientar su formación hacia la logística y operativa del mercado local de granos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'lorenzo-rossi',
    type: 'candidate',
    content: {
      name: 'Lorenzo Rossi',
      age: 22,
      study: 'Estudiante de Ingeniería Industrial (UCA).',
      courses: ['Lean Manufacturing', 'Six Sigma Yellow Belt', 'Excel Avanzado.'],
      experience: [
        'Pasante de Procesos en Planta Industrial (2024).',
        'Optimización de tiempos de carga.'
      ],
      notable: 'Perfil metódico con gran capacidad para la resolución de problemas complejos. Orientado a la eficiencia operativa.',
      toConsider: 'Desarrollar habilidades blandas para la interacción comercial directa.',
      image: ''
    } as CandidateData
  },
  {
    id: 'simon-varela',
    type: 'candidate',
    content: {
      name: 'Simón Varela',
      age: 23,
      study: 'Lic. en Economía Empresarial (Austral).',
      courses: ['Finanzas Corporativas', 'Valuación de Empresas', 'Inglés (C1).'],
      experience: [
        'Analista de Créditos en Entidad Bancaria (2024-2025).',
        'Evaluación de riesgo crediticio agro.'
      ],
      notable: 'Sólida base financiera y capacidad de síntesis. Perfil ejecutivo con gran potencial de crecimiento.',
      toConsider: 'Validar su tolerancia a la frustración en ciclos de venta largos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'catalina-diaz',
    type: 'candidate',
    content: {
      name: 'Catalina Díaz',
      age: 22,
      study: 'Lic. en Administración Agraria (UNR).',
      courses: ['Gestión de Agronegocios', 'Sustentabilidad', 'Power BI.'],
      experience: [
        'Administración en Empresa Agropecuaria Familiar (2022-2025).',
        'Gestión de compras e insumos.'
      ],
      notable: 'Conocimiento profundo del negocio desde la base. Perfil práctico y con gran sentido común.',
      toConsider: 'Ampliar su visión hacia el mercado de capitales y herramientas financieras complejas.',
      image: ''
    } as CandidateData
  },
  {
    id: 'delfina-soria',
    type: 'candidate',
    content: {
      name: 'Delfina Soria',
      age: 24,
      study: 'Lic. en Comunicación Social (Austral).',
      courses: ['Marketing Estratégico', 'Oratoria', 'Redes Sociales.'],
      experience: [
        'Responsable de Comunicación en Startup Agtech (2023-2025).',
        'Generación de contenido y eventos.'
      ],
      notable: 'Excelentes habilidades interpersonales y de comunicación. Perfil creativo y con gran empuje.',
      toConsider: 'Fortalecer sus competencias analíticas y numéricas para la mesa comercial.',
      image: ''
    } as CandidateData
  },
  {
    id: 'pedro-gomez',
    type: 'candidate',
    content: {
      name: 'Pedro Gomez',
      age: 23,
      study: 'Lic. en Administración (UCA).',
      courses: ['Excel Avanzado', 'Negociación', 'Finanzas.'],
      experience: [
        'Pasantía en Banco Galicia (2024).',
        'Asistente administrativo en Pyme.'
      ],
      notable: 'Perfil equilibrado con buena capacidad de gestión y organización.',
      toConsider: 'Desarrollar mayor proactividad en la toma de decisiones.',
      image: ''
    } as CandidateData
  },
  {
    id: 'marcos-silva',
    type: 'candidate',
    content: {
      name: 'Marcos Silva',
      age: 25,
      study: 'Ingeniero Industrial (UNR).',
      courses: ['Gestión de Proyectos', 'Logística', 'Power BI.'],
      experience: [
        'Analista de Procesos en Arcor (2023-2025).',
        'Optimización de cadena de suministro.'
      ],
      notable: 'Fuerte capacidad analítica y enfoque en la mejora de procesos.',
      toConsider: 'Adaptar su lenguaje técnico a un entorno más comercial.',
      image: ''
    } as CandidateData
  },
  {
    id: 'bautista-fernandez',
    type: 'candidate',
    content: {
      name: 'Bautista Fernandez',
      age: 22,
      study: 'Lic. en Economía (Austral).',
      courses: ['Macroeconomía', 'Estadística', 'Python.'],
      experience: [
        'Ayudante de investigación (2024).',
        'Freelance en análisis de datos.'
      ],
      notable: 'Gran potencial intelectual y curiosidad por el mercado de granos.',
      toConsider: 'Ganar experiencia práctica en entornos corporativos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'matias-blanco',
    type: 'candidate',
    content: {
      name: 'Matías Blanco',
      age: 24,
      study: 'Contador Público (UCA).',
      courses: ['Auditoría', 'Costos', 'Gestión Financiera.'],
      experience: [
        'Junior en Big Four (2024-Actualidad).',
        'Auditoría externa de empresas agro.'
      ],
      notable: 'Rigurosidad profesional y conocimiento de normativas contables.',
      toConsider: 'Evaluar su transición de un perfil técnico a uno comercial.',
      image: ''
    } as CandidateData
  },
  {
    id: 'valentina-costa',
    type: 'candidate',
    content: {
      name: 'Valentina Costa',
      age: 23,
      study: 'Lic. en Comercialización (UADE).',
      courses: ['Marketing', 'Ventas B2B', 'Comunicación.'],
      experience: [
        'Ejecutiva de Cuentas Junior (2024).',
        'Gestión de clientes corporativos.'
      ],
      notable: 'Excelente llegada al cliente y capacidad de persuasión.',
      toConsider: 'Profundizar en el conocimiento técnico del producto agro.',
      image: ''
    } as CandidateData
  },
  {
    id: 'lucia-mendez',
    type: 'candidate',
    content: {
      name: 'Lucía Mendez',
      age: 24,
      study: 'Lic. en Relaciones Internacionales (UNR).',
      courses: ['Comercio Exterior', 'Protocolo', 'Inglés Jurídico.'],
      experience: [
        'Pasante en Aduana (2024).',
        'Gestión de trámites de exportación.'
      ],
      notable: 'Capacidad de negociación y visión estratégica internacional.',
      toConsider: 'Focalizar su interés en el mercado local de granos.',
      image: ''
    } as CandidateData
  },
  {
    id: 'camila-sosa',
    type: 'candidate',
    content: {
      name: 'Camila Sosa',
      age: 22,
      study: 'Lic. en Administración de Empresas (Austral).',
      courses: ['Liderazgo', 'Emprendedurismo', 'Finanzas.'],
      experience: [
        'Emprendimiento propio de e-commerce (2022-2025).',
        'Gestión integral de negocio.'
      ],
      notable: 'Gran iniciativa y autonomía. Perfil emprendedor y resiliente.',
      toConsider: 'Adaptarse a estructuras corporativas más jerárquicas.',
      image: ''
    } as CandidateData
  },
  {
    id: 'victoria-ruiz',
    type: 'candidate',
    content: {
      name: 'Victoria Ruiz',
      age: 25,
      study: 'Ingeniera Agrónoma (UCA).',
      courses: ['Producción Vegetal', 'Maquinaria Agrícola', 'SIG.'],
      experience: [
        'Asesora técnica en campo (2023-2025).',
        'Monitoreo de cultivos y prescripciones.'
      ],
      notable: 'Sólido conocimiento técnico y experiencia directa en el campo.',
      toConsider: 'Desarrollar visión comercial y financiera del negocio.',
      image: ''
    } as CandidateData
  },
  {
    id: 'paula-gimenez',
    type: 'candidate',
    content: {
      name: 'Paula Gimenez',
      age: 23,
      study: 'Lic. en Economía (UNR).',
      courses: ['Econometría', 'Mercado de Granos', 'Excel.'],
      experience: [
        'Pasantía en Bolsa de Comercio de Rosario (2024).',
        'Análisis de precios de pizarra.'
      ],
      notable: 'Conocimiento específico del mercado local y capacidad analítica.',
      toConsider: 'Ganar confianza en presentaciones y oratoria.',
      image: ''
    } as CandidateData
  },
  {
    id: 'julieta-alvarez',
    type: 'candidate',
    content: {
      name: 'Julieta Alvarez',
      age: 24,
      study: 'Lic. en Recursos Humanos (UADE).',
      courses: ['Selección de Personal', 'Clima Laboral', 'Coaching.'],
      experience: [
        'Asistente de RRHH en empresa agroindustrial (2024).',
        'Apoyo en procesos de reclutamiento.'
      ],
      notable: 'Gran empatía y capacidad para trabajar con personas. Perfil integrador.',
      toConsider: 'Evaluar su motivación real por un rol comercial puro.',
      image: ''
    } as CandidateData
  },
  {
    id: 'closing',
    type: 'closing',
    title: 'CONSTRUYENDO EL FUTURO DE LA MESA',
    subtitle: 'Próximos Pasos y Definición de Terna Final',
    content: {
      description: "El talento es el motor de fyo. La decisión de hoy define la excelencia operativa y comercial de nuestra mesa mañana.",
      bullets: [
        "Priorizar Agilidad de Aprendizaje y Afinidad Cultural.",
        "Evaluar potencial de liderazgo y resiliencia.",
        "Validar vocación comercial y empuje de mercado.",
        "Definir terna final para entrevistas con Dirección.",
        "Devolución constructiva para todos los participantes."
      ],
      highlight: "En fyo, transformamos el potencial en liderazgo.",
      contacts: [
        { role: 'Responsable de Talento', email: 'mbarrull@fyo.com' },
        { role: 'Equipo de Selección', email: 'talentos@fyo.com' }
      ]
    }
  }
];
