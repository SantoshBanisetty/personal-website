import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';
import {BiLinkExternal} from 'react-icons/bi'

//import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
//import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
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
  title: 'Personal website of Santosh Banisetty',
  description: 'This is where I live online',
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
  name: `I'm Santosh.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an <strong className="text-stone-100">Entrepreneur</strong>, building{' '}
        <strong className="text-stone-100"><a href="http://zebu.ai/" target='_blank'>Zebu Intelligent Systems <BiLinkExternal className='inline' /></a></strong>, empowering business & organizations to
        harness the power of AI & Robotics.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Finance is my newfound interest and in my free time,{' '}
        <strong className="text-stone-100">I analyze Indian and US public companies</strong>, seeking investment
        opportunities. An aspiring private equity investor,{' '}
        <strong className="text-stone-100">I invest sweat and/or capital</strong>, driving innovation and empowering
        startups to soar to new heights.
      </p> */}
    </>
  ),
  actions: [
    {
      href: 'resume.pdf',
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
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify">
        I am a Ph.D. graduate in Computer Science and Engineering with a focus on intelligent systems and robotics.
        Passionate about technology in all its facets, I have worked extensively on projects encompassing software,
        hardware, and everything in between. I have a particular affinity for IoT, Robotics, and AI. Alongside my
        academic pursuits, I have actively engaged in STEM outreach activities. I have a track record of success in
        hackathons, such as securing the first place in the Microsoft Hackathon, and entrepreneurship competitions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify">
        Furthermore, I have entrepreneurial experience, having successfully exited my first startup in the IoT Domain.
        As a rainmaker and innovator at my startup, I relish the opportunity to utilize my skills in commercializing
        technology.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg text-justify">
        Finance has become a newfound passion, and on weekends, I immerse myself in analyzing public companies across
        India and the US, seeking promising investment opportunities. I aspire to become a private equity investor one 
        day. With that long-term goal in mind, I'm deeply interested in supporting innovation and envision contributing 
        sweat or capital to help startups grow and thrive in the future.
        {/* Finance is my newfound interest and in my free time,{' '}
        <strong className="text-stone-100">I analyze Indian and US public companies</strong>, seeking investment
        opportunities. An aspiring private equity investor,{' '}
        <strong className="text-stone-100">I invest sweat and/or capital</strong>, driving innovation and empowering
        startups to soar to new heights. */}
      </p>
    </>
  ),
  // description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  // to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  // in.`,
  aboutItems: [
    // {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Business Stack',
    skills: [
      {
        name: 'Communication',
        level: 8,
      },
      {
        name: 'Problem Solving',
        level: 9,
      },
      {
        name: 'Strategy',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Stack',
    skills: [
      {
        name: 'C',
        level: 8,
      },
      {
        name: 'C++',
        level: 7,
      },
      {
        name: 'Python',
        level: 8,
      },
    ],
  },
  {
    name: 'Robotics Stack',
    skills: [
      {
        name: 'ROS',
        level: 8,
      },
      {
        name: 'Gazebo',
        level: 8,
      },
      {
        name: 'Embedded Systems',
        level: 7,
      },
    ],
  },
  {
    name: 'AI Stack',
    skills: [
      {
        name: 'Keras',
        level: 8,
      },
      {
        name: 'Scikit-Learn',
        level: 8,
      },
      {
        name: 'OpenCV',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2020',
    location: 'University of Nevada Reno',
    title: 'PhD in Computer Science and Engineering',
    content: (
      <p>
        Specialized in Intelligent Systems and Robotics; Worked with Dr. David Feil-Seifer in Socially Assistive Robotics Group (SARG).
      </p>
    ),
    imageLocation: './unr.png',
  },
  {
    date: 'May 2015',
    location: 'NYU Tandon School of Engineering',
    title: 'MS Electrical Engineering',
    content: <p>Specialized in Controls Systems and Robotics.</p>,
    imageLocation: './nyu.png',
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2021 - Present',
    location: 'Zebu Intelligent Systems',
    title: 'Founder',
    content: (
      <p>
        Spearheading technology and business development, leveraging AI to drive continuous innovation.
      </p>
    ),
    imageLocation: './zebu.png',
  },
  {
    date: 'May 2020 - April 2021',
    location: 'Colorado School of Mines',
    title: 'Post Doctoral Researcher',
    content: (
      <p>
        I served as a postdoctoral researcher in MIRROR Lab at Colorado School of Mines, under the guidance of
        Dr. Tom Williams.
      </p>
    ),
    imageLocation: './mines.png',
  },
  {
    date: 'May 2018 - August 2018',
    location: 'Tesla Inc',
    title: 'Firmware Validation Intern',
    content: (
      <p>
        Performed system validation (regression testing) on Model S/X/3 by utilizing robot framework and python.
      </p>
    ),
    imageLocation: './tesla.png',
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'Sandesh Kannan, Mill Bundle',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    // },
    // {
    //   name: 'Jane Doe',
    //   text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
    //   image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    // },
    {
      name: 'Abivishaq (former colleague/mentee), Georgia Tech',
      text: 'At Zebu, not only was I immersed in a nurturing environment ripe for learning and growth, but I genuinely felt my individual career aspirations were recognized, offering me the flexibility to shape my own path.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Anonymized, Stealth Startup Founder',
      text: 'Santosh\'s business acumen combined with his expertise in AI, neural networks, computer vision, and software adds a ton of value to the product. His mastery of these cutting-edge technologies is evident in the exceptional solutions he delivers. Collaborating with Santosh means benefiting from a visionary mind that seamlessly translates complex concepts into practical, game-changing outcomes.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Drop a line, let's connect and explore exciting opportunities together!",
  items: [
    {
      type: ContactType.Email,
      text: 'sbanisetty [at] zebu [dot] ai',
      // href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Reno NV, USA',
      // href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Location,
      text: 'Hyderabad TG, India',
      // href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'sbanisetty',
      href: 'https://www.linkedin.com/in/sbanisetty/',
    },
    {
      type: ContactType.Twitter,
      text: 'SBanisetty',
      href: 'https://twitter.com/SBanisetty',
    },
    // {
    //   type: ContactType.Topmate,
    //   text: 'topmate',
    //   href: 'https://topmate.io/santosh_banisetty',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/tbakerx/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
