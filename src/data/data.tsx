import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import XIcon from '../components/Icon/XIcon';
import heroImage from '../images/bogota.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.png';
import porfolioImage9 from '../images/portfolio/portfolio-9.png';
import porfolioImage10 from '../images/portfolio/portfolio-10.png';
import porfolioImage11 from '../images/portfolio/portfolio-11.png';
import porfolioImage12 from '../images/portfolio/portfolio-12.png';
import profilepic from '../images/profile.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Henry Ventura Resume',
  description: 'Henry Ventura Resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Sobre mí',
  Contact: 'Contáctame',
  Portfolio: 'Portafolio',
  Resume: 'Resumen',
  Skills: 'Skills',
  Stats: 'Stats',
  Testimonials: 'Testimonios',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Henry Ventura.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Soy desarrollador web con residencia en <strong className="text-stone-100">Bogotá</strong> y experiencia en el diseño y desarrollo de soluciones digitales a medida. Actualmente formo parte de <strong className="text-stone-100">Mercado Libre</strong> como Desarrollador Web Frontend en el proyecto Sell Your Item (SYI), donde diseño y optimizo interfaces dinámicas y escalables para mejorar el proceso de publicación de productos. Trabajo con tecnologías como <strong className="text-stone-100">React</strong>, <strong className="text-stone-100">SCSS</strong> y <strong className="text-stone-100">pruebas unitarias</strong>, aplicando buenas prácticas de arquitectura de componentes y optimización de rendimiento.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Anteriormente trabajé en <strong className="text-stone-100">Gradiweb</strong>, desarrollando funcionalidades personalizadas con Liquid, adaptando temas y módulos, e integrando GraphQL para optimizar la carga de datos. También he utilizado Remix y TypeScript para construir aplicaciones web escalables y de alto rendimiento.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Previamente colaboré en <strong className="text-stone-100">Rappi</strong> en el desarrollo y mantenimiento de <strong className="text-stone-100">MiTienda</strong>, una plataforma para la gestión integral de tiendas.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        En mi tiempo libre disfruto de los <strong className="text-stone-100">videojuegos</strong>, el <strong className="text-stone-100">cine</strong> y las <strong className="text-stone-100">series</strong>.
      </p>
    </>
  ),

  actions: [
    {
      target: '_blank',
      href: 'https://drive.google.com/file/d/1RXb4ebZ5EsYLZb58uz3YKeUzwUpykZeG/view?usp=sharing',
  text: 'Descargar CV (PDF)',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
  text: 'Contáctame',
      primary: false,
    },
  ],
};

// Add birth date constant
const BIRTH_DATE = new Date('1993-06-23');

// Function to calculate age
const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Apasionado por la tecnología, me mantengo en constante aprendizaje para seguir las tendencias del desarrollo web. Me motivan la programación y la creación de soluciones innovadoras. Valoro el trabajo en equipo y disfruto compartir conocimientos y experiencias para contribuir al éxito colectivo.`,
  aboutItems: [
    {label: 'Ubicación', text: 'Bogotá D.C., Colombia', Icon: MapIcon},
    {label: 'Edad', text: calculateAge(BIRTH_DATE).toString(), Icon: CalendarIcon},
    {label: 'Nacionalidad', text: 'Venezolano y colombiano', Icon: FlagIcon},
    {label: 'Intereses', text: 'Videojuegos, deportes, cine y series', Icon: SparklesIcon},
    {label: 'Formación', text: 'Ingeniero en Informática', Icon: AcademicCapIcon},
    {label: 'Último empleo', text: 'Desarrollador Web — Mercado Libre', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Angular',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'Vtex',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Mykommu',
    description:
      'MyKommu es una aplicación para la gestión de eventos y seminarios web. Participé en sus primeras versiones, adquiriendo experiencia práctica en desarrollo con React.',
    url: 'https://www.mykommu.com/',
    image: porfolioImage1,
    technologies: ['React', 'Sass', 'Redux', 'Webpack'],
  },
  {
    title: 'Easy CL',
    description:
      'Easy CL es el e-commerce de una de las ferreterías más grandes de LATAM. Fue un proyecto desafiante que se entregó a tiempo gracias a la colaboración entre equipos (VTEX e Itglobers).',
    url: 'https://www.easy.cl/',
    image: porfolioImage2,
    technologies: ['React', 'Vtex', 'Css', 'Jquery', 'Grunt'],
  },
  {
    title: 'Jumbo Co',
    description:
      'Jumbo.co es la tienda online de una cadena de supermercados reconocida en LATAM. Participé en el desarrollo de funcionalidades clave del sitio.',
    url: 'https://www.tiendasjumbo.co/',
    image: porfolioImage3,
    technologies: ['React', 'Vtex'],
  },
  {
    title: 'Mi Tienda',
    description:
      'Mi Tienda es una plataforma de e-commerce de Rappi con amplias opciones de configuración para tiendas, campañas y productos. Contribuí desarrollando módulos complejos, como la sección de puntos de venta y el onboarding.',
    url: 'https://mitienda.rappi.com.co/',
    image: porfolioImage4,
    technologies: ['Angular', 'Redux', 'Sass', 'TypeScript', 'Webpack', 'Microfrontends'],
  },
  {
    title: 'Under Armour Co',
    description:
      'Under Armour es una marca global de ropa deportiva. Participé como desarrollador frontend en este proyecto de e-commerce.',
    url: 'https://www.underarmour.com.co/',
    image: porfolioImage5,
    technologies: ['React', 'Vtex'],
  },
  {
    title: 'Esika Co',
    description:
      'Esika es una reconocida marca de belleza. Participé como desarrollador frontend en este proyecto de e-commerce.',
    url: 'https://esika.tiendabelcorp.com.co/',
    image: porfolioImage6,
    technologies: ['React', 'Vtex'],
  },
  {
    title: 'Generik Paris',
    description:
      'Colaboré en el desarrollo de una tienda online en Shopify orientada al mercado francés. Implementé personalizaciones avanzadas para promociones y funcionalidades específicas de localización y gestión de mercados, priorizando una experiencia de usuario optimizada y escalable.',
    url: 'https://generik.fr/',
    image: porfolioImage7,
    technologies: ['Shopify', 'Scss', 'Liquid', 'Javascript', 'Remix', 'TypeScript'],
  },
  {
    title: 'Cryptocurrencies',
    description:
      'Aplicación que consume una API pública para mostrar información y conversiones de criptomonedas, con soporte para monedas de LATAM (COP, CLP, ARS).',
    url: 'https://crypto-ant.netlify.app/',
    image: porfolioImage8,
    repository: 'https://github.com/henryVentura14/Ant-design-crypto-app',
    technologies: ['React', 'AntDesign', 'Css'],
  },
  {
    title: 'Dragon Ball Vue',
    description:
      'Aplicación interactiva desarrollada con Vue 3 y TypeScript que consume la API de Dragon Ball para mostrar y buscar personajes, con carga progresiva mediante scroll.',
    url: 'https://dragon-ball-one.vercel.app/',
    image: porfolioImage9,
    repository: 'https://github.com/henryVentura14/Dragon-ball-vue',
    technologies: ['Vue3', 'Tailwind', 'DragonballApi', 'Vite'],
  },
  {
    title: 'Jansport Pe',
    description:
      'Jansport Pe es una marca de moda reconocida; participé como desarrollador frontend en este proyecto de e-commerce.',
    url: 'https://www.jansport.pe/',
    image: porfolioImage10,
    technologies: ['React', 'Vtex'],
  },
  {
    title: 'Poke Battle',
    description:
      'Aplicación que simula batallas Pokémon permitiendo seleccionar y enfrentar equipos. Calcula el ganador sumando las estadísticas de cada equipo.',
    url: 'https://pokebatller.vercel.app/',
    image: porfolioImage11,
    repository: 'https://github.com/henryVentura14/Pokebatller',
    technologies: ['React', 'Tailwind', 'Context', 'PokeApi'],
  },
  {
    title: 'Rico B2B',
    description: 'Primera tienda B2B desarrollada con Shopify, con múltiples funcionalidades personalizadas.',
    url: 'https://ricoh-imaging.eu',
    image: porfolioImage12,
    technologies: ['Shopify', 'Scss', 'Liquid', 'Javascript'],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Abril 2018',
    location: 'Universidad Politécnica Territorial de Falcón Alonso Gamero',
    title: 'Ingeniero en Informática',
    content: (
      <p>
        Adquirí conocimientos en pruebas de seguridad y auditoría de sistemas web. Mi tesis consistió en la implementación de un sistema completo desplegado en un servidor web.
      </p>
    ),
    urlTitle: 'https://drive.google.com/file/d/1JCFN99U124h-hcuAxgrYZOXYHiYMJYBn/view',
    urlLocation: 'https://uptag.net/',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Octubre 2025 - Actualidad',
    location: 'Mercado Libre',
    title: 'Desarrollador Web Frontend',
    content: (
      <p>
        Formo parte del equipo de Mercado Libre como Desarrollador Web Frontend en el proyecto Sell Your Item (SYI).
        <br />
        Mi rol incluye diseñar, desarrollar y optimizar interfaces dinámicas y escalables para mejorar la experiencia de los vendedores al publicar productos. Trabajo con tecnologías como <strong>React</strong>, <strong>SCSS</strong> y <strong>pruebas unitarias</strong>, aplicando buenas prácticas de desarrollo, arquitectura de componentes y optimización de rendimiento.
      </p>
    ),
  },
  {
    date: 'Agosto 2024 - Septiembre 2025',
    location: 'Gradiweb - Gradiweb | Agencia E-commerce Shopify Partner',
    title: 'Desarrollador Web',
    content: (
      <p>
        Desarrollo de funcionalidades personalizadas con Liquid, adaptación de temas y módulos para cumplir los requisitos de cada cliente. Integración con GraphQL para optimizar la carga de datos y mejorar la experiencia de usuario. Uso de Remix y JavaScript para construir aplicaciones escalables y de alto rendimiento. Mantenimiento y mejora continua de sitios existentes, abordando problemas de rendimiento y aplicando actualizaciones para asegurar estabilidad y eficiencia.
      </p>
    ),
  },
  {
    date: 'Mayo 2022 - Abril 2024',
    location: 'Rappi - S.A.S',
    title: 'Desarrollador Frontend',
    content: (
      <p>
        Fue mi primera experiencia en una gran empresa de LATAM, donde aprendí cómo se conforman equipos de desarrollo y el rol de cada miembro. Me familiaricé con metodologías ágiles y técnicas para incrementar la productividad en entornos exigentes.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Anthony Medina',
      text: 'Henry es un colaborador disponible y siempre dispuesto a ayudar, una gran aportación para cualquier equipo.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmARy0OnZne63mLv7c0lMDm-XFKP3GOukLaujWBfiqCmF6kfb1ulD7mFdgHYtYmoUTIQ&usqp=CAU',
    },
    {
      name: 'Shamaru Primera',
      text: 'Conozco a Henry desde hace años; ha demostrado un crecimiento profesional notable y ha acumulado experiencia relevante en sus proyectos.',
      image: 'https://cdn-icons-png.flaticon.com/256/1801/1801308.png',
    },
    {
      name: 'David Ochoa',
      text: 'Henry es un profesional competente que demuestra habilidades sólidas y contribuye proactivamente compartiendo su conocimiento.',
      image: 'https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png',
    },
  ],
};

export const contact: ContactSection = {
  headerText: 'Contáctame',
  description: 'Puedes escribirme por correo electrónico o a través de mis redes sociales.',
  items: [
    {
      type: ContactType.Email,
      text: 'henry.ventura14@gmail.com',
      href: 'mailto:henry.ventura14@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bogotá D.C., Colombia',
      href: 'https://goo.gl/maps/bbEY2KFkXKn9WR2o9',
    },
    {
      type: ContactType.Instagram,
      text: '@henry_jahaz',
      href: 'https://www.instagram.com/henry_jahaz/',
    },
    {
      type: ContactType.X,
      text: '@HenryVenturaDev',
      href: 'https://x.com/HenryVenturaDev',
    },
    {
      type: ContactType.Github,
      text: 'henryVentura14',
      href: 'https://github.com/henryVentura14',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/henryVentura14'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/henry-j-ventura/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/henry_jahaz/'},
  {label: 'X', Icon: XIcon, href: 'https://x.com/HenryVenturaDev'},
];
