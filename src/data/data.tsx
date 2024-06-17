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
  About: 'sobre mí',
  Contact: 'contáctame',
  Portfolio: 'portafolio',
  Resume: 'resumen',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonios',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Henry J Ventura.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Vivo en Bogotá, me dedico al <strong className="text-stone-100">desarrollo aplicaciones web</strong>, trabaje en
        <strong className="text-stone-100"> Rappi </strong> ayudando a construir y mantener una aplicación web de
        gestión de tiendas llamada MiTienda.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        En mis tiempos libres me gusta jugar <strong className="text-stone-100">videojuegos</strong>, ver una película o
        serie.
      </p>
    </>
  ),

  actions: [
    {
      target: '_blank',
      href: 'https://drive.google.com/file/d/1RXb4ebZ5EsYLZb58uz3YKeUzwUpykZeG/view?usp=sharing',
      text: 'CV en PDF',
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

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Soy un apasionado por la tecnología, me gusta aprender cosas nuevas y siempre estoy en constante aprendizaje, me gusta la programación y el desarrollo web, me gusta trabajar en equipo y aportar mis conocimientos y experiencias.`,
  aboutItems: [
    {label: 'Ubicación', text: 'Bogota, DC', Icon: MapIcon},
    {label: 'Edad', text: '30', Icon: CalendarIcon},
    {label: 'Nacionalidad', text: 'Venezolano / Colombiano', Icon: FlagIcon},
    {label: 'Pasatiempo', text: 'videojuegos, deportes, peliculas y series', Icon: SparklesIcon},
    {label: 'Estudios', text: 'Ingeniero en Informática', Icon: AcademicCapIcon},
    {label: 'Último  empleo', text: 'Desarrollador Frontend - Rappi', Icon: BuildingOffice2Icon},
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
    description: 'MyKommu was a project where I participated',
    url: 'https://www.mykommu.com/',
    image: porfolioImage1,
    technologies: ['React', 'Sass'],
  },
  {
    title: 'Easy CL',
    description:
      'Easy Cl It was quite a difficult project, but we managed to move it forward and deliver it on time, the union of several teams (vtex and itgrlobers)',
    url: 'https://www.easy.cl/',
    image: porfolioImage2,
    technologies: ['React', 'Vtex', 'Css', 'Jquery', 'Grunt'],
  },
  {
    title: 'Jumbo Co',
    description: 'Jumbo Co was a project where I participated as a frontend developer',
    url: 'https://www.tiendasjumbo.co/',
    image: porfolioImage3,
    technologies: ['React', 'Vtex'],
  },
  {
    title: 'Mi Tienda',
    description:
      'Participate in this project contributing many hours of work where you develop complex modules such as the point of sale and onboarding section',
    url: 'https://mitienda.rappi.com.co/',
    image: porfolioImage4,
    technologies: ['Angular', 'Redux', 'Sass', 'TypeScript', 'Webpack', 'Microfrontends'],
  },
  {
    title: 'Under Armour Co',
    description: 'was a project where I participated as a frontend developer',
    url: 'https://www.underarmour.com.co/',
    image: porfolioImage5,
    technologies: ['React', 'Vtex'],
  },
  {
    title: 'Esika Co',
    description: 'Esika Co was a project where I participated',
    url: 'https://esika.tiendabelcorp.com.co/',
    image: porfolioImage6,
    technologies: ['React', 'Vtex'],
  },
  {
    title: 'Crisantemo Makeup',
    description:
      'Crisantemo makeup is a project that I did from scratch, designing and creating the database, as well as the business logic and the final design, the deployment on the server and domain configuration. It is an ecommerce that sells makeup and facial care.',
    url: 'https://crisantemomakeup.com/',
    image: porfolioImage7,
    repository: 'https://github.com/henryVentura14/crisantemo',
    technologies: ['AngularJs', 'Css', 'Tailwind', 'Html', 'PHP', 'Mysql'],
  },
  {
    title: 'Cryptocurrencies',
    description:
      'Cryptocurrencies is an app created by me where you can consume an API that handles information about cryptocurrencies, using the ant Design library',
    url: 'https://crypto-ant.netlify.app/',
    image: porfolioImage8,
    repository: 'https://github.com/henryVentura14/Ant-design-crypto-app',
    technologies: ['React', 'AntDesign', 'Css'],
  },
  {
    title: 'MoviesAndSeries',
    description:
      'Movies and series is a small app developed by me where I use the IMDB API to display data related to movies and series on the screen, I do it with React js',
    url: 'https://movies-and-series-imdb.netlify.app/',
    image: porfolioImage9,
    repository: 'https://github.com/henryVentura14/Movies-web-app',
    technologies: ['React', 'Css', 'Redux', 'Imdb'],
  },
  {
    title: 'Jansport Pe',
    description: 'Jansport Pe was a project where I participated as a frontend developer',
    url: 'https://www.jansport.pe/',
    image: porfolioImage10,
    technologies: ['React', 'Vtex'],
  },
  {
    title: 'Poke Battle',
    description: 'It is a pokemon battle app, developed with react and the poke api API',
    url: 'https://pokebatller.vercel.app/',
    image: porfolioImage11,
    repository: 'https://github.com/henryVentura14/Pokebatller',
    technologies: ['React', 'Tailwind', 'Context', 'PokeApi'],
  },
  {
    title: 'Drinks and recipes',
    description:
      'It is an app where you can find drinks and recipes, developed with react and the thecocktaildb API API',
    url: 'https://drinks-and-recipes.netlify.app/',
    image: porfolioImage12,
    repository: 'https://github.com/henryVentura14/Drinks-and-recipes',
    technologies: ['React', 'Bootstrap', 'Context', 'Thecocktaildb'],
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
        Aprendí a realizar pruebas de seguridad de sistemas, auditar sistemas web y desarrollé una tesis basada en la
        implementación de un sistema completo alojado en un servidor web.
      </p>
    ),
    urlTitle: 'https://drive.google.com/file/d/1JCFN99U124h-hcuAxgrYZOXYHiYMJYBn/view',
    urlLocation: 'https://uptag.net/',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Mayo 2022 - Abril 2024',
    location: 'Rappi - Impresionante empresa de tecnología',
    title: 'Desarrollador frontend semi senior',
    content: (
      <p>
        Mi primera experiencia en una gran empresa de Latam, he aprendido mucho sobre como se forma un gran equipo de
        desarrollo y que rol juega cada miembro del equipo, he aprendido mucho sobre metodologías ágiles y como
        multiplicar mi productividad, es un trabajo muy exigente. Empresa que emplea al menos al 100% de sus empleados.
      </p>
    ),
  },
  {
    date: 'Septiembre 2021 - Mayo 2022',
    location: 'Itglobers - Muy buena agencia de tecnología (e-commerce)',
    title: 'Desarrollador frontend',
    content: (
      <p>
        Enfrente buenos retos y grandes proyectos, lograr sacar adelante proyectos estancados y ofrecer mi apoyo 100%,
        trabajo de la mano del equipo de VTEX y brindar soluciones tecnológicas a grandes marcas como ESIKA, VELEZ y la
        grupo CENCOSUD
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
      text: 'Es bueno tener colegas como Henry que siempre están disponibles y dispuestos a ayudar.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmARy0OnZne63mLv7c0lMDm-XFKP3GOukLaujWBfiqCmF6kfb1ulD7mFdgHYtYmoUTIQ&usqp=CAU',
    },
    {
      name: 'Shamaru Primera',
      text: 'Conozco a Henry desde hace muchos años y hemos tenido la oportunidad de trabajar juntos, siento que ha crecido mucho y ha adquirido muy buenas experiencias con el tiempo.',
      image: 'https://cdn-icons-png.flaticon.com/256/1801/1801308.png',
    },
    {
      name: 'David Ochoa',
      text: 'Henry es un gran profesional que demuestra grandes habilidades, nunca tiene miedo de contribuir y compartir sus conocimientos.',
      image: 'https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Ponte en contacto conmigo.',
  description: 'Puedes escribir un correo electrónico o por alguna de mis redes sociales.',
  items: [
    {
      type: ContactType.Email,
      text: 'henry.ventura14@gmail.com',
      href: 'mailto:henry.ventura14@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bogota DC, Colombia',
      href: 'https://goo.gl/maps/bbEY2KFkXKn9WR2o9',
    },
    {
      type: ContactType.Instagram,
      text: '@henry_jahaz',
      href: 'https://www.instagram.com/henry_jahaz/',
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
];
