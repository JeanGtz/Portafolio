// ============================================================
//  TU INFORMACIÓN — edita solo este archivo para personalizar
//  todo el portafolio.
// ============================================================

export const perfil = {
  nombre: 'Jean Gutiérrez',
  titulo: 'Desarrollador Full Stack',
  ubicacion: 'Monterrey, Nuevo León, México',
  presentacion:
    'Ingeniero en Sistemas en formación con experiencia práctica en ' +
    'infraestructura de TI, redes y desarrollo web full stack. Construyo ' +
    'aplicaciones limpias y funcionales, con preferencia por el código nativo.',
};

export const sobreMi =
  'Ingeniero en Sistemas en formación con experiencia real en campo en ' +
  'infraestructura de TI y redes, y en desarrollo web full stack. Instalo y ' +
  'configuro cableado estructurado, access points, videovigilancia IP y ' +
  'sistemas hospitalarios; y diseño y construyo aplicaciones con panel ' +
  'administrativo, portal de clientes y sistemas de gestión (PHP/MySQL, ' +
  'C#/.NET y JavaScript). Capaz de aportar tanto en infraestructura como en ' +
  'desarrollo, orientado a resolver problemas técnicos de extremo a extremo.';

export const contacto = {
  email: 'jeangutierrez416@gmail.com',
};

export const tecnologias = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'PHP', 'Laravel',
  'ASP.NET Core', 'React', 'MySQL', 'HTML', 'CSS', 'Git',
];

export const habilidadesPersonales = [
  'Trabajo en equipo', 'Adaptabilidad', 'Resolución de problemas',
  'Atención al detalle', 'Disposición para aprender',
];

export const experiencia = [
  {
    puesto: 'Ayudante de Sistemas',
    lugar: 'Etéreo Sistemas · Infraestructura TI',
    periodo: 'Feb. 2026 – Actualidad',
    puntos: [
      'Instalación y tendido de cableado estructurado de red en áreas hospitalarias, garantizando conectividad estable en entornos críticos.',
      'Configuración de access points y antenas de internet para ampliar la cobertura inalámbrica de los sitios.',
      'Montaje y configuración de nodos de red, validando enrutamiento y conectividad punto a punto.',
      'Instalación y configuración de sistemas de videovigilancia IP (cámaras), con pruebas de funcionamiento y conectividad.',
      'Instalación de consolas del sistema de llamado de enfermera y verificación de su operación integral.',
    ],
  },
];

export const educacion = {
  titulo: 'Ingeniería en Sistemas Computacionales',
  institucion: 'UMOV Academy',
  lugar: 'En línea',
};

export const proyectos = [
  {
    nombre: 'Plataforma web corporativa — Etéreo Sistemas',
    descripcion:
      'Sitio corporativo full stack con panel administrativo y portal de ' +
      'clientes. Módulos de cotizaciones, tickets de soporte con SLA, ' +
      'inventario con exportación, gestión de contenido, autenticación y ' +
      'registro de actividad, más un bot de WhatsApp para altas de tickets.',
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
    nombre: 'Tienda en línea (E-commerce)',
    descripcion:
      'Tienda online con catálogo de productos, carrito de compras y panel ' +
      'de administración. Proyecto de portafolio.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Tailwind'],
    demo: '',
    repo: '',
  },
  {
    nombre: 'NodoTrack',
    descripcion:
      'App móvil para registrar sitios, equipos/nodos (cámaras, APs, nodos de ' +
      'red) y sus mantenimientos, basada en mi trabajo real de campo. ' +
      'En desarrollo.',
    stack: ['Flutter', 'Firebase'],
    demo: '',
    repo: '',
  },
];