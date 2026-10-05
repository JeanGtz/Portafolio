// ============================================================
//  TU INFORMACIÓN — edita solo este archivo para personalizar
//  todo el portafolio. Los valores marcados con "// TODO" son
//  placeholders: reemplázalos por los tuyos.
// ============================================================

export const perfil = {
  nombre: 'Jean Gutiérrez',
  titulo: 'Desarrollador Full Stack',
  ubicacion: 'Monterrey, Nuevo León, México',
  presentacion:
    'Ingeniero en Sistemas Computacionales enfocado en desarrollo web, ' +
    'con experiencia real en campo en infraestructura y sistemas. Construyo ' +
    'aplicaciones limpias y funcionales, con preferencia por el código nativo.',
};

export const sobreMi =
  'Ingeniero en Sistemas Computacionales con experiencia práctica en ' +
  'instalación de infraestructura de redes, configuración de cámaras de ' +
  'seguridad IP y sistemas de llamado de enfermera en entornos hospitalarios. ' +
  'Orientado al detalle y con disposición para seguir creciendo en el ' +
  'desarrollo de software y las tecnologías de la información.';

export const contacto = {
  email: 'jeangut2302@gmail.com',
};

export const tecnologias = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'PHP', 'Laravel',
  'ASP.NET Core', 'React', 'MySQL', 'HTML', 'CSS', 'Git',
];

export const habilidadesPersonales = [
  'Trabajo en equipo', 'Puntualidad', 'Adaptabilidad',
  'Resolución de problemas', 'Disposición para aprender',
];

export const experiencia = [
  {
    puesto: 'Técnico en Sistemas',
    lugar: 'Hospital · Infraestructura TI',
    periodo: 'Feb. 2026 – Actualidad',
    puntos: [
      'Instalación y tendido de cableado estructurado de red en áreas hospitalarias.',
      'Instalación y configuración de access points (APs) y antenas de internet.',
      'Montaje y configuración de nodos de red.',
      'Configuración e instalación de cámaras de seguridad IP.',
      'Instalación de consolas del sistema de llamado de enfermera.',
      'Verificación y pruebas de funcionamiento de los sistemas instalados.',
    ],
  },
];

export const educacion = {
  titulo: 'Ingeniería en Sistemas Computacionales',
  institucion: 'UMOV Academy',
  lugar: 'En Línea',
};

export const proyectos = [
  {
    nombre: 'Plataforma web empresarial', // TODO: nombre de la empresa si lo quieres mostrar
    descripcion:
      'Sitio web corporativo con panel administrativo y portal de clientes. ' +
      'Incluye gestión de servicios, inventario con exportación, sistema de ' +
      'tickets de soporte, cotizaciones, autenticación de usuarios y bot de ' +
      'WhatsApp. Backend a medida en PHP con MySQL.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    demo: '',
    repo: '',
    capturas: [
      { src: '/capturas/01-dashboard-kpis.png',     cap: 'Dashboard — indicadores clave: cotizaciones y tickets.' },
      { src: '/capturas/02-dashboard-graficas.png', cap: 'Dashboard — gráficas de cotizaciones y tickets.' },
      { src: '/capturas/03-actividad-reciente.png', cap: 'Actividad reciente del sistema.' },
      { src: '/capturas/04-registro-actividad.png', cap: 'Registro de actividad con filtros.' },
      { src: '/capturas/05-cotizaciones.png',       cap: 'Gestión de cotizaciones.' },
      { src: '/capturas/06-tickets.png',            cap: 'Tickets de soporte con prioridad y SLA.' },
      { src: '/capturas/07-clientes.png',           cap: 'Directorio de clientes.' },
      { src: '/capturas/08-servicios.png',          cap: 'Gestor de contenido de servicios.' },
      { src: '/capturas/09-busqueda.png',           cap: 'Búsqueda global.' },
      { src: '/capturas/10-trazabilidad.png',       cap: 'Trazabilidad de acciones (usuario, fecha, IP).' },
    ],
  },
  {
    nombre: 'Tienda Laravel',
    descripcion:
      'Tienda online completa con catálogo de productos, carrito de compras ' +
      'y panel de administración. Proyecto de portafolio.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Tailwind'],
    demo: '',
    repo: '',
  },
  {
    nombre: 'NodoTrack',
    descripcion:
      'Sistema de gestión de instalaciones y equipo técnico, basado en mi ' +
      'trabajo real de campo. Registro de nodos, equipos y mantenimientos.',
    stack: ['C#', 'ASP.NET Core', 'SQL Server'],
    demo: '',
    repo: '',
  },
];