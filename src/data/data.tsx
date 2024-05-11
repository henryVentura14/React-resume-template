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
import TwitterIcon from '../components/Icon/TwitterIcon';
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
  description: "Henry Ventura Resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
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
        I'm a Bogotá DC based <strong className="text-stone-100">Frontend Software Engineer</strong>, previously worked
        in <strong className="text-stone-100">Rappi </strong> helping to build and maintain a store management web app called MiTienda.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, i play <strong className="text-stone-100">a video game</strong>, or watch a series or movie.
      </p>
    </>
  ),

  actions: [
    {
      target: '_blank',
      href: 'https://drive.google.com/file/d/1DdI9aZcNHCdcKhH6U30cJXLTINJ_hb9T/view?usp=drive_link',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a peaceful person, I like to read and learn about general culture and keep up to date with everything that happens in the world of technology.`,
  aboutItems: [
    {label: 'Location', text: 'Bogota, DC', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Venezuelan / Colombian', Icon: FlagIcon},
    {label: 'Interests', text: 'Video games, Sports, Movies and series', Icon: SparklesIcon},
    {label: 'Study', text: 'Alonso Gamero University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Rappi', Icon: BuildingOffice2Icon},
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
  }
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
  },
  {
    title: 'Easy CL',
    description: 'Easy Cl It was quite a difficult project, but we managed to move it forward and deliver it on time, the union of several teams (vtex and itgrlobers)',
    url: 'https://www.easy.cl/',
    image: porfolioImage2,
  },
  {
    title: 'Jumbo Co',
    description: 'Jumbo Co was a project where I participated as a frontend developer',
    url: 'https://www.tiendasjumbo.co/',
    image: porfolioImage3,
  },
  {
    title: 'Mi Tienda',
    description: 'Participate in this project contributing many hours of work where you develop complex modules such as the point of sale and onboarding section',
    url: 'https://mitienda.rappi.com.co/',
    image: porfolioImage4,
  },
  {
    title: 'Under Armour Co',
    description: 'was a project where I participated as a frontend developer',
    url: 'https://www.underarmour.com.co/',
    image: porfolioImage5,
  },
  {
    title: 'Esika Co',
    description: 'Esika Co was a project where I participated',
    url: 'https://esika.tiendabelcorp.com.co/',
    image: porfolioImage6,
  },
  {
    title: 'Crisantemo Makeup',
    description: 'Crisantemo makeup is a venture in which to invest time to create your own website',
    url: 'https://crisantemomakeup.com/',
    image: porfolioImage7,
  },
  {
    title: 'Cryptocurrencies',
    description: 'Cryptocurrencies is an app created by me where you can consume an API that handles information about cryptocurrencies, using the ant Design library',
    url: 'https://stoic-colden-f27935.netlify.app/',
    image: porfolioImage8,
  },
  {
    title: 'MoviesAndSeries',
    description: 'Movies and series is a small app developed by me where I use the IMDB API to display data related to movies and series on the screen, I do it with React js',
    url: 'https://xenodochial-newton-e42ffc.netlify.app/',
    image: porfolioImage9,
  },
  {
    title: 'Jansport Pe',
    description: 'Jansport Pe was a project where I participated as a frontend developer',
    url: 'https://www.jansport.pe/',
    image: porfolioImage10,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2018',
    location: 'Alonso Gamero University',
    title: 'Computer Engineer',
    content: <p>I learned to perform system security tests, audit web systems and I developed a thesis based on the implementation of a complete system hosted on a web server.</p>,
  },
  {
    date: 'March 2015',
    location: 'Alonso Gamero University',
    title: 'Senior computer technician',
    content: <p>I learned about network and server systems, and how to maintain computer equipment.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 - Present',
    location: 'Rappi - Awesome Development Company',
    title: 'Frontend Developer Semi Senior ',
    content: (
      <p>
        My first experience in a large Latam company, I have learned a lot about how a great development team is formed and what role each team member plays, I have learned a lot about agile methodologies and how to multiply my productivity, it is a very demanding company that employ at least 100% of its employees
      </p>
    ),
  },
  {
    date: 'September 2021 - May 2022',
    location: 'Itglobers - Very good technology agency (e-commerce)',
    title: 'Front End Web Developer',
    content: (
      <p>
        Face good challenges and great projects, manage to carry out stagnant projects and offer my 100% support, work hand in hand with the VTEX team and provide technological solutions to major brands such as ESIKA, VELEZ and the CENCOSUD group
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
      text: 'Its good to have colleagues like Henry who are always available and willing to help.',
      image: 'https://media.licdn.com/dms/image/D4E35AQEP1PcckTcuaw/profile-framedphoto-shrink_200_200/0/1689257734712?e=1711310400&v=beta&t=1PLdnk6wOgZGsD8he8LrcxDJssT4rT7pI3AocoflLos',
    },
    {
      name: 'Shamaru Primera',
      text: 'I have known Henry for many years and we have had the opportunity to work together, I feel that he has grown a lot and has gained very good experiences over time.',
      image: 'https://media.licdn.com/dms/image/D4E35AQFMYdyyhE_cTA/profile-framedphoto-shrink_200_200/0/1658525643745?e=1711310400&v=beta&t=R2-VY1CXegbeANbRR7HIhKqbksLgkIribhJ2753U-S8',
    },
    {
      name: 'David Ochoa',
      text: 'Henry is a great professional who shows great skills, he is never afraid to contribute and share his knowledge.',
      image: 'https://media.licdn.com/dms/image/C4E03AQHTuCpHTXzZoQ/profile-displayphoto-shrink_200_200/0/1664063203205?e=1716422400&v=beta&t=-874vY9MDCZERQJfSMjLoiWnmtNbWdNs2yaZIyR1PEs',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
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
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/henryHVG14'},
];
