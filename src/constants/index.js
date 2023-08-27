import {
  access,
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
  word,
  business_central,
  commerce,
  customer_insights,
  customer_service,
  customer_voice,
  field_service,
  finance,
  fraud_protection,
  hr,
  intelligent_order_mgt,
  marketing,
  project_operations,
  sales,
  supply_chain_mgt,
} from "../assets";

import { BsChevronDown } from "react-icons/bs";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
  {
    id: "partners",
    title: "Partners",
  },
  // {
  //   id: "projects",
  //   title: "Projects",
  // },
  {
    id: "services",
    title: "Services",
    icon: BsChevronDown,
  },
];

const services = [
  {
    id: "microsoft365",
    title: "Microsoft 365",
  },
  {
    id: "domainhosting",
    title: "Domain Name & Hosting",
  },
  {
    id: "websitedev",
    title: "Custom Websites",
  },
  {
    id: "lan",
    title: "LAN Design & Implementation",
  },
  {
    id: "surveillance",
    title: "Surveillance Systems",
  },
  // {
  //   id: "marketplace",
  //   title: "Hardware Marketplace"
  // },
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
        icon: excel,
      },
      {
        id: 3,
        title: "OneNote",
        icon: onenote,
      },
      {
        id: 4,
        title: "Publisher",
        icon: publisher,
      },
      {
        id: 5,
        title: "Access",
        icon: access,
      },
    ],
  },
  {
    id: 1,
    name: "Email & Calendar",
    apps: [
      {
        id: 0,
        title: "Outlook",
        icon: outlook,
      },
      {
        id: 1,
        title: "Exchange",
        icon: exchange,
      },
      {
        id: 2,
        title: "Bookings",
        icon: bookings,
      },
    ],
  },
  {
    id: 2,
    name: "Team Collaboration",
    apps: [
      {
        id: 0,
        title: "Teams",
        icon: teams,
      },
      {
        id: 1,
        title: "SharePoint",
        icon: sharepoint,
      },
      {
        id: 2,
        title: "Yammer",
        icon: yammer,
      },
      {
        id: 3,
        title: "Viva",
        icon: viva,
      },
    ],
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
      },
    ],
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
        icon: power_automate,
      },
      {
        id: 3,
        title: "Todo",
        icon: todo,
      },
    ],
  },
];

const dynamics_module = [
  {
    id: 0,
    title: "Business Central",
    icon: business_central,
    short_desc: "Manage, adapt, and streamline operations like finance, manufacturing, sales, and more, across your small or medium-sized business.",
    long_desc: "Business Central is a business management solution for small and mid-sized organizations that automates and streamlines business processes and helps you manage your business. Highly adaptable and rich with features, Business Central enables companies to manage their business, including finance, manufacturing, sales, shipping, project management, services, and more. Companies can easily add functionality that is relevant to the region of operation, and that is customized to support even highly specialized industries. Business Central is fast to implement, easy to configure, and simplicity guides innovations in product design, development, implementation, and usability."
  },
  {
    id: 1,
    title: "Commerce",
    icon: commerce,
    short_desc: "Deliver unified, personalized, and seamless buying experiences for customers and partners.",
    long_desc: "Microsoft Dynamics 365 Commerce is an integrated omnichannel e-commerce platform designed to empower businesses with comprehensive tools for managing sales, customer interactions, and operations. It enables companies to deliver personalized shopping experiences, streamline order processing, and optimize inventory management across online and physical retail channels, enhancing overall customer engagement and operational efficiency.",
  },
  {
    id: 2,
    title: "Customer Insights",
    icon: customer_insights,
    short_desc: "Aggregate and unify customer data from various sources, generating actionable insights and enhancing customer engagement and experiences. ",
    long_desc: "Customer Insights can help you build a deeper understanding of your customers. Connect data from various transactional, behavioral, and observational sources to create a 360-degree customer view. Use these insights to drive customer-centric experiences and processes. Unify and understand customer data and harness it for intelligent insights and actions.",
  },
  {
    id: 3,
    title: "Customer Service",
    icon: customer_service,
    short_desc: "Access tools for managing customer inquiries, tracking cases, and delivering personalized assistance, enabling companies to streamline customer service operations and cultivate stronger customer relationships.",
    long_desc: "Dynamics 365 Customer Service offers you a suite of capabilities to ensure your business can deliver the best customer service experience possible to your customers. We believe that knowing your customers enables you to personalize each experience and optimizes your agents' productivity so you can earn customers for life. The agent experience is the heart of Dynamics 365 Customer Service. The key to improving satisfaction in service delivery is enabling agents to take customer requests from any channel, handle multiple sessions at a time, interact with multiple apps without losing context, and enhance their workflow with productivity tools."
  },
  {
    id: 4,
    title: "Customer Voice",
    icon: customer_voice,
    short_desc: "Create surveys, collect feedback across various touchpoints, and derive actionable insights to enhance customer experiences and drive improvements in products and services.",
    long_desc: "Dynamics 365 Customer Voice is an enterprise feedback management application you can use to easily keep track of the customer metrics that matter the most to your business. With deep integration from the Dynamics 365 line-of-business applications and built on Microsoft Forms, Dynamics 365 Customer Voice adds rich insights by feeding real-time survey data into customer records. Dynamics 365 Customer Voice provides an easy and friction-free experience, from creating surveys to generating actionable insights based on customer feedback with minimal setup time. It helps you to keep a pulse on what customers value and how they view your products and services, so you can rest assured that your data is supported by Microsoft security and compliance policies.",
  },
  {
    id: 5,
    title: "Field Service",
    icon: field_service,
    short_desc: "Manage scheduling, dispatching, and tracking of field technicians, while providing real-time visibility into work orders, asset maintenance, and customer interactions with built-in analytics and collaboration tools. ",
    long_desc: "The Dynamics 365 Field Service business application helps organizations deliver onsite service to customer locations. The application combines workflow automation, scheduling algorithms, and mobility to set up mobile workers for success when they're onsite with customers fixing issues.",
  },
  {
    id: 6,
    title: "Finance",
    icon: finance,
    short_desc: "Monitor your global financial operations in real time, predict outcomes, and make data-driven decisions to drive business agility and growth.",
    long_desc: "Microsoft Dynamics 365 Finance is an enterprise resource planning (ERP) software solution that empowers businesses with comprehensive financial management capabilities. It streamlines financial processes, enhances visibility into financial data, and enables informed decision-making through features like budgeting, accounting, analytics, and real-time reporting, facilitating efficient financial operations within organizations."
  },
  {
    id: 7,
    title: "Fraud Protection",
    icon: fraud_protection,
    short_desc: "Leverage advanced AI-driven insights to detect, prevent, and mitigate fraud risks, enhancing transaction security, reducing financial losses, and preserving customer trust. ",
    long_desc: "Microsoft has many years of experience protecting its own e-commerce businesses from fraud. We have developed a sophisticated technology stack that uses connected big data across multiple lines of business and applies cutting-edge artificial intelligence (AI) to help provide more accurate decisions in real time. By using Fraud Protection, you can help protect your business from fraud through several innovative and advanced capabilities.",
  },
  {
    id: 8,
    title: "Human Resource",
    icon: hr,
    short_desc: "Streamline and optimize human resource management processes. Manage employee data, benefits, performance, and compliance, facilitating better workforce planning and enhancing employee engagement.",
    long_desc: "Microsoft Dynamics 365 Human Resources is a comprehensive cloud-based software solution designed to streamline and optimize human resource management processes. It enables businesses to efficiently manage employee data, benefits, performance, and compliance, facilitating better workforce planning and enhancing employee engagement. The platform offers tools for recruitment, onboarding, talent management, and analytics, helping organizations make informed decisions and enhance their overall HR operations.",
  },
  {
    id: 9,
    title: "Intelligent Order Management",
    icon: intelligent_order_mgt,
    short_desc: "Coordinate, standardize, and optimize orders captured in a mix of channels and systems through a single point of order orchestration.",
    long_desc: "Dynamics 365 offers you a suite of capabilities that helps your organization coordinate, standardize, and optimize orders captured in a mix of channels and systems through a single point of order orchestration. The standardization and optimization, together with incorporated intelligence, optimize the speed of delivery while minimizing costs, resulting in improved customer satisfaction and higher gross margin to your organization.",
  },
  {
    id: 10,
    title: "Marketing",
    icon: marketing,
    short_desc: "Access tools for segmenting audiences, managing customer journeys, and automating marketing tasks, enhancing customer engagement and driving more effective marketing strategies.",
    long_desc: "Dynamics 365 Marketing isn't just for marketers anymore. With AI and natural language input assistance, business users can build trigger-based journeys that reach customers across multiple touch-points, growing relationships from prospects, through sales and support. "
  },
  {
    id: 11,
    title: "Project Operations",
    icon: project_operations,
    short_desc: "Connects sales, resourcing, project management, and finance teams in a single application to win more deals, accelerate project delivery, and maximize profitability.`",
    long_desc: "Microsoft Dynamics 365 Project Operations connects sales, resourcing, project management, and finance teams in a single application to win more deals, accelerate project delivery, and maximize profitability. Project Operations is powerful on its own, but can be expanded by our customers who require more capabilities from Dynamics 365. These capabilities include Marketing, Human Resources, Customer Service, and more. Whether you want the added functionality of another Dynamics 365 application or to add on a custom application built with Power Apps, everything works together and works like you expect because they share the common foundation of a secure, private, and compliant cloud-delivered solution."
  },
  {
    id: 12,
    title: "Sales",
    icon: sales,
    short_desc: "Build strong relationships with your customers, take actions based on insights, and close deals faster.",
    long_desc: "Dynamics 365 Sales enables salespeople to build strong relationships with their customers, take actions based on insights, and close deals faster. Use Dynamics 365 Sales to keep track of your accounts and contacts, nurture your sales from lead to order, and create sales collateral. You can also create marketing lists and campaigns, and follow service cases associated with specific accounts or opportunities. ",
  },
  {
    id: 13,
    title: "Supply Chain Management",
    icon: supply_chain_mgt,
    short_desc: "Build an adaptable, resilient supply chain that automatically reacts to challenges using real-time visibility, agile planning, and advanced insights.",
    long_desc: "Microsoft Dynamics 365 Supply Chain Management is an integrated software solution that enables businesses to optimize their supply chain operations. It offers real-time insights, automation, and collaboration tools to streamline procurement, production, inventory management, and logistics, enhancing efficiency and visibility throughout the supply chain. This platform helps organizations make informed decisions, adapt to market changes, and deliver products and services more effectively.",
  },
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

export { services, microsoft_365, dynamics_module };

// export { services, technologies, experiences, testimonials, projects };
