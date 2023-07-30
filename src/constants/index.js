import {access,
  bookings,
  excel,
  exchange,
  forms,
  lists,
  onedrive,
  onenote,
  outlook,
  power_apps,
  power_automate,
  powerpoint,
  project,
  publisher,
  sharepoint,
  stream,
  sway,
  teams,
  todo,
  visio,
  viva,
  // windows,
  yammer,
  word} from "../assets";

import {BsChevronDown} from 'react-icons/bs'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "partners",
    title: "Partners",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "services",
    title: "Services",
    icon: BsChevronDown,
  },
];


const services = [
  {
    id: 0,
    title: "Microsoft 365",
  },
  {
    id: 1,
    title: "Domain Name & Hosting"
  },
  {
    id: 2,
    title: "Custom Websites"
  },
  {
    id: 3,
    title: "LAN Design & Implementation"
  },
  {
    id: 4,
    title: "Surveillance Systems"
  },
  {
    id: 5,
    title: "Hardware Marketplace"
  },
];

const microsoft_365 = [
  {
    id: 0,
    name: "Office Apps",
    apps: [
      {
        id: 0,
        title: "Word",
        icon: word,
      },
      {
        id: 1,
        title: "Power Point",
        icon: powerpoint,
      },
      {
        id: 2,
        title: "Excel",
        icon: excel
      },
      {
        id: 3,
        title: "OneNote",
        icon: onenote
      },
      {
        id: 4,
        title: "Publisher",
        icon: publisher
      },
      {
        id: 5,
        title: "Access",
        icon: access
      }
    ]
  },
  {
    id: 1,
    name: "Email & Calendar",
    apps: [
      {
        id: 0,
        title: "Outlook",
        icon: outlook
      },
      {
        id: 1,
        title: "Exchange",
        icon: exchange,
      },
      {
        id: 2,
        title: "Bookings",
        icon: bookings
      }
    ]
  },
  {
    id: 2,
    name: "Team Collaboration",
    apps: [
      {
        id: 0,
        title: "Teams",
        icon: teams
      },
      {
        id: 1,
        title: "SharePoint",
        icon: sharepoint
      },
      {
        id: 2,
        title: "Yammer",
        icon: yammer
      },
      {
        id: 3,
        title: "Viva",
        icon: viva
      }
    ]
  },
  {
    id: 3,
    name: "Files & Content",
    apps: [
      {
        id: 0,
        title: "OneDrive",
        icon: onedrive,
      },
      {
        id: 1,
        title: "Stream",
        icon: stream,
      },
      {
        id: 2,
        title: "Sway",
        icon: sway,
      },
      {
        id: 3,
        title: "Lists",
        icon: lists,
      },
      {
        id: 4,
        title: "Forms",
        icon: forms,
      },
      {
        id: 5,
        title: "Visio",
        icon: visio,
      }
    ]
  },
  {
    id: 4,
    name: "Project Management",
    apps: [
      {
        id: 0,
        title: "Project",
        icon: project,
      },
      {
        id: 1,
        title: "Power Apps",
        icon: power_apps,
      },
      {
        id: 2,
        title: "Power Automate",
        icon: power_automate
      },
      {
        id: 3,
        title: "Todo",
        icon: todo,
      }
    ]
  }
]

// const projects = [
//   {
//     name: "Custom-Shirts",
//     description: "A web app that allows users that allows users customise shirts. Users can add personal logos, textures or AI generated image to their shirts. Ecommerce fearures not added yet.",
//     tags: [
//       {
//         name: "reactjs",
//         color: "blue-text-gradient"
//       },
//       {
//         name: "threejs",
//         color: "green-text-gradient"
//       },
//       {
//         name: "openai",
//         color: "pink-text-gradient",
//       }
//     ],
//     image: customShirts,
//     source_code_link: "https://github.com/Odikanwa/Shirts",
//     web_link: "https://custom-shirts.onrender.com/",
//   },
//   {
//     name: "Trilopay",
//     description:
//       "Mobile app(RN expo) that allows user register for an account, receive money and make transactions. Other financial use cases are embedded but inactive.",
//     tags: [
//       {
//         name: "react native",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "nodejs",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: trilopay,
//     source_code_link: "https://github.com/Odikanwa/TriloPay",
//   },
//   {
//     name: "Oreegi",
//     description:
//       "An ecommerce web-based application that allows users place orders purchase original wines from the comfort of their homes. Payments are made online.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "sanity.io",
//         color: "green-text-gradient",
//       },
//       {
//         name: "api",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: oreegi,
//     source_code_link: "https://github.com/Odikanwa/Oreegi",
//     web_link: "https://oreegi.vercel.app/",
//   },
//   {
//     name: "Umbranded",
//     description:
//       "A modern official website for a branding company(hypothetical) that allows users create custom logos, flyers and cards. Features are inactive.",
//     tags: [
//       {
//         name: "reactjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "styled components",
//         color: "green-text-gradient",
//       },
//     ],
//     image: umbranded,
//     source_code_link: "https://github.com/Odikanwa/umbranded",
//     web_link: "https://umbranded.netlify.app/",
//   },
// ];

export { services, microsoft_365 };

// export { services, technologies, experiences, testimonials, projects };
