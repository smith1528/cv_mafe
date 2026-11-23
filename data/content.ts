// Todo el contenido del portafolio vive aquí.
// Para agregar un trabajo nuevo, copia un objeto de `works` y cambia sus datos.

export type Category = "periodismo" | "audiovisual";

export type Work = {
  num: string;
  category: Category;
  kind: string;
  medium: string;
  date: string;
  role: string;
  title: string;
  description: string;
  url: string;
  cta: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export const profile = {
  name: "María Fernanda Moncada Molina",
  role: "Comunicadora social y periodista",
  location: "Bogotá · Sabana Centro, Colombia",
  email: "mariamonmol@unisabana.edu.co",
  phoneDisplay: "321 961 5891",
  whatsapp: "https://wa.me/573219615891",
  instagram: "https://www.instagram.com/moncada_82/",
  instagramHandle: "@moncada_82",
  linkedin:
    "https://www.linkedin.com/in/mar%C3%ADa-fernanda-moncada-molina-14b0351b1/",
  sabana360: "https://www.conexionsabana360.com/perfil/maria-fernanda-moncada-molina",
  // Cuando tengas su foto, ponla en public/images/retrato.jpg y cambia esto a "/images/retrato.jpg"
  portrait: null as string | null,
};

export const tools = [
  "Adobe Premiere",
  "Audition",
  "CapCut",
  "Canva",
  "Fotografía y edición",
  "Guion y narrativa",
  "Power BI",
];

export const skills = [
  "Periodismo",
  "Producción audiovisual",
  "Fotografía",
  "Contenido para redes",
  "Entrevista",
];

export const works: Work[] = [
  {
    num: "01",
    category: "periodismo",
    kind: "Perfil",
    medium: "Conexión Sabana 360",
    date: "Agosto 2026",
    role: "Bloguera periodista",
    title: "Un pequeño piloto entre las tareas y las pistas de motocross",
    description:
      "Dominic tiene nueve años: estudia entre semana y entrena ocho horas diarias los fines de semana. Un perfil sobre disciplina, familia y la falta de educación flexible para deportistas en Colombia.",
    url: "https://www.conexionsabana360.com/historias/personajes/un-pequeno-piloto-entre-las-tareas-y-las-pistas-de-motocross",
    cta: "Leer la historia",
    image: "/images/motocross.jpg",
    imageAlt:
      "Dominic, niño piloto de motocross, toma una curva en la pista levantando polvo",
    imagePosition: "55% 50%",
  },
  {
    num: "02",
    category: "periodismo",
    kind: "Crónica multimedia",
    medium: "Conexión Sabana 360",
    date: "Septiembre 2026",
    role: "Equipo periodístico",
    title:
      "Cajicá y Bogotá se unieron a través de la música por las víctimas del terremoto",
    description:
      "Conciertos benéficos que recogieron víveres, insumos médicos y donaciones para las zonas afectadas por el sismo del 10 de agosto. Texto, fotografía y video.",
    url: "https://www.conexionsabana360.com/historias/escenarios/bogota-y-sabana-centro-se-unen-por-los-damnificados-del-terremoto",
    cta: "Leer la crónica",
    image: "/images/terremoto.jpg",
    imageAlt:
      "Público con las manos en alto frente al escenario del concierto benéfico Bogotá Responde",
  },
  {
    num: "03",
    category: "audiovisual",
    kind: "Reportaje en video · 9 min",
    medium: "Conexión Sabana 360",
    date: "Agosto 2025",
    role: "Equipo de realización audiovisual",
    title:
      "Madres comunitarias en Sabana Centro y su rol en el cuidado de la primera infancia",
    description:
      "Mujeres que cuidan y educan a niños en condiciones precarias y aun así no los abandonan. Un reportaje sobre su vocación y el acompañamiento psicológico, financiero y legal que les hace falta.",
    url: "https://www.youtube.com/watch?v=bRII7t8Ml7k",
    cta: "Ver el video",
    image: "/images/video.jpg",
    imageAlt: "Niño armando con fichas de colores la frase Madre no solo hay una",
    imagePosition: "85% 40%",
  },
];

export const experience = [
  {
    period: "Jul 2026 — hoy",
    title: "Realizadora audiovisual",
    org: "Fundación Clan Academy · práctica social",
    description:
      "Ideas y propuestas audiovisuales para los eventos de la fundación, formatos para redes sociales y entrevistas pensadas para visibilizar historias de vida.",
  },
  {
    period: "2025 — 2026",
    title: "Bloguera periodista",
    org: "Conexión Sabana 360 · Universidad de La Sabana",
    orgUrl: "https://www.conexionsabana360.com/perfil/maria-fernanda-moncada-molina",
    description:
      "Reportería y producción de historias multimedia sobre Bogotá y Sabana Centro: perfiles, cultura y comunidad.",
  },
  {
    period: "2023",
    title: "Reportera",
    org: "Cajicá Radio Internacional",
    description:
      "Cobertura en campo de las elecciones territoriales en distintos puntos de Cajicá: ambiente de la jornada, entrevistas y testimonios de ciudadanos y actores del proceso.",
  },
  {
    period: "2022 — 2025",
    title: "Docente de danza tradicional",
    org: "Colegio Mi Felicidad · Colegio Howard",
    description:
      "Formación en danza tradicional colombiana: coreografías, historia y contexto de las expresiones culturales, adaptando el contenido a niños, familias y docentes.",
  },
];
