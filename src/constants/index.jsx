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
  m365,
  dynamics,
  domains_photo,
  network_photo,
  surveillance_photo,
  website_photo,
  wifi,
} from "../assets";

import {
  BsFillClockFill,
  BsFillRocketTakeoffFill,
  BsFillSignpostFill,
  BsMicrosoftTeams,
  BsFillClipboard2PlusFill,
  BsFillShieldLockFill,
  BsPersonFillCheck,
  BsClockFill,
  BsFillHandIndexThumbFill,
  BsFillHddNetworkFill,
  BsGraphUpArrow,
  BsFillRouterFill,
  BsFillPatchCheckFill,
  BsFillCloudArrowDownFill,
  BsGraphUp,
  BsFillAwardFill,
  BsFillGearFill,
  BsFillDoorOpenFill,
  BsFillHandIndexFill,
  BsArrowsAngleContract,
  BsFillStopwatchFill,
  BsCoin,
  BsHourglassSplit,
  BsSearch,
  BsShieldFillCheck,
  BsBinocularsFill,
  BsPerson,
  BsTicket,
  BsTagsFill,
} from "react-icons/bs";
import { MdOutlineJoinFull, MdOutlineSecurity, MdContactSupport, MdUpdate, MdEmail, MdShoppingCart } from "react-icons/md";
import {
  FaRecycle,
  FaHandshake,
  FaGlobe,
  FaCut,
  FaPenNib,
  FaPencilAlt,
  FaLightbulb,
  FaLink,
  FaVideo,
  FaBolt,
  FaWifi,
  FaDiceD20,
  FaServer, 
} from "react-icons/fa";
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
  {
    id: "signin",
    title: "Sign In",
  },
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
    icon: m365,
    short_desc: "A comprehensive suite of productivity tools(Windows applications) and cloud-based services developed by Microsoft for businesses."
  },
  {
    id: "dynamics365",
    title: "Dynamics 365",
    icon: dynamics,
    short_desc: "A broad suite of integrated business applications that combines customer relationship management (CRM) and enterprise resource planning (ERP) functionalities."
  },
  {
    id: "domainhosting",
    title: "Domain Name & Hosting",
    icon: domains_photo,
    short_desc: "We offer domain names and domain hosting - shared hosting, virtual servers and dedicated servers as well as SSL certificates for securrity."
  },
  {
    id: "websitedev",
    title: "Custom Websites",
    icon: website_photo,
    short_desc: "Pick from our easy-to-use stunning and responsive corporate website templates or have our design and engineering team build a custom website for you from scratch."
  },
  {
    id: "lan",
    title: "LAN Design & Implementation",
    icon: network_photo,
    short_desc: "Explore the realm of next-generation connectivity and network solutions with our specialized network design and implementation services."
  },
  {
    id: "surveillance",
    title: "Surveillance Systems",
    icon: surveillance_photo,
    short_desc: "Choose our comprehensive video surveillance and intelligent analytics, for a safer, more secure environment."
  },
  {
    id: "managedwifi",
    title: "Managed Wifi",
    icon: wifi,
    short_desc: "Have our team of specialist network engineers manage the configuration, patching and maintenance of your Wifi infrastructure."
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
    short_desc:
      "Manage, adapt, and streamline operations like finance, manufacturing, sales, and more, across your small or medium-sized business.",
    long_desc:
      "Business Central is a business management solution for small and mid-sized organizations that automates and streamlines business processes and helps you manage your business. Highly adaptable and rich with features, Business Central enables companies to manage their business, including finance, manufacturing, sales, shipping, project management, services, and more. Companies can easily add functionality that is relevant to the region of operation, and that is customized to support even highly specialized industries. Business Central is fast to implement, easy to configure, and simplicity guides innovations in product design, development, implementation, and usability.",
  },
  {
    id: 1,
    title: "Commerce",
    icon: commerce,
    short_desc:
      "Deliver unified, personalized, and seamless buying experiences for customers and partners.",
    long_desc:
      "Microsoft Dynamics 365 Commerce is an integrated omnichannel e-commerce platform designed to empower businesses with comprehensive tools for managing sales, customer interactions, and operations. It enables companies to deliver personalized shopping experiences, streamline order processing, and optimize inventory management across online and physical retail channels, enhancing overall customer engagement and operational efficiency.",
  },
  {
    id: 2,
    title: "Customer Insights",
    icon: customer_insights,
    short_desc:
      "Aggregate and unify customer data from various sources, generating actionable insights and enhancing customer engagement and experiences. ",
    long_desc:
      "Customer Insights can help you build a deeper understanding of your customers. Connect data from various transactional, behavioral, and observational sources to create a 360-degree customer view. Use these insights to drive customer-centric experiences and processes. Unify and understand customer data and harness it for intelligent insights and actions.",
  },
  {
    id: 3,
    title: "Customer Service",
    icon: customer_service,
    short_desc:
      "Access tools for managing customer inquiries, tracking cases, and delivering personalized assistance, enabling companies to streamline customer service operations and cultivate stronger customer relationships.",
    long_desc:
      "Dynamics 365 Customer Service offers you a suite of capabilities to ensure your business can deliver the best customer service experience possible to your customers. We believe that knowing your customers enables you to personalize each experience and optimizes your agents' productivity so you can earn customers for life. The agent experience is the heart of Dynamics 365 Customer Service. The key to improving satisfaction in service delivery is enabling agents to take customer requests from any channel, handle multiple sessions at a time, interact with multiple apps without losing context, and enhance their workflow with productivity tools.",
  },
  {
    id: 4,
    title: "Customer Voice",
    icon: customer_voice,
    short_desc:
      "Create surveys, collect feedback across various touchpoints, and derive actionable insights to enhance customer experiences and drive improvements in products and services.",
    long_desc:
      "Dynamics 365 Customer Voice is an enterprise feedback management application you can use to easily keep track of the customer metrics that matter the most to your business. With deep integration from the Dynamics 365 line-of-business applications and built on Microsoft Forms, Dynamics 365 Customer Voice adds rich insights by feeding real-time survey data into customer records. Dynamics 365 Customer Voice provides an easy and friction-free experience, from creating surveys to generating actionable insights based on customer feedback with minimal setup time. It helps you to keep a pulse on what customers value and how they view your products and services, so you can rest assured that your data is supported by Microsoft security and compliance policies.",
  },
  {
    id: 5,
    title: "Field Service",
    icon: field_service,
    short_desc:
      "Manage scheduling, dispatching, and tracking of field technicians, while providing real-time visibility into work orders, asset maintenance, and customer interactions with built-in analytics and collaboration tools. ",
    long_desc:
      "The Dynamics 365 Field Service business application helps organizations deliver onsite service to customer locations. The application combines workflow automation, scheduling algorithms, and mobility to set up mobile workers for success when they're onsite with customers fixing issues.",
  },
  {
    id: 6,
    title: "Finance",
    icon: finance,
    short_desc:
      "Monitor your global financial operations in real time, predict outcomes, and make data-driven decisions to drive business agility and growth.",
    long_desc:
      "Microsoft Dynamics 365 Finance is an enterprise resource planning (ERP) software solution that empowers businesses with comprehensive financial management capabilities. It streamlines financial processes, enhances visibility into financial data, and enables informed decision-making through features like budgeting, accounting, analytics, and real-time reporting, facilitating efficient financial operations within organizations.",
  },
  {
    id: 7,
    title: "Fraud Protection",
    icon: fraud_protection,
    short_desc:
      "Leverage advanced AI-driven insights to detect, prevent, and mitigate fraud risks, enhancing transaction security, reducing financial losses, and preserving customer trust. ",
    long_desc:
      "Microsoft has many years of experience protecting its own e-commerce businesses from fraud. We have developed a sophisticated technology stack that uses connected big data across multiple lines of business and applies cutting-edge artificial intelligence (AI) to help provide more accurate decisions in real time. By using Fraud Protection, you can help protect your business from fraud through several innovative and advanced capabilities.",
  },
  {
    id: 8,
    title: "Human Resource",
    icon: hr,
    short_desc:
      "Streamline and optimize human resource management processes. Manage employee data, benefits, performance, and compliance, facilitating better workforce planning and enhancing employee engagement.",
    long_desc:
      "Microsoft Dynamics 365 Human Resources is a comprehensive cloud-based software solution designed to streamline and optimize human resource management processes. It enables businesses to efficiently manage employee data, benefits, performance, and compliance, facilitating better workforce planning and enhancing employee engagement. The platform offers tools for recruitment, onboarding, talent management, and analytics, helping organizations make informed decisions and enhance their overall HR operations.",
  },
  {
    id: 9,
    title: "Intelligent Order Management",
    icon: intelligent_order_mgt,
    short_desc:
      "Coordinate, standardize, and optimize orders captured in a mix of channels and systems through a single point of order orchestration.",
    long_desc:
      "Dynamics 365 offers you a suite of capabilities that helps your organization coordinate, standardize, and optimize orders captured in a mix of channels and systems through a single point of order orchestration. The standardization and optimization, together with incorporated intelligence, optimize the speed of delivery while minimizing costs, resulting in improved customer satisfaction and higher gross margin to your organization.",
  },
  {
    id: 10,
    title: "Marketing",
    icon: marketing,
    short_desc:
      "Access tools for segmenting audiences, managing customer journeys, and automating marketing tasks, enhancing customer engagement and driving more effective marketing strategies.",
    long_desc:
      "Dynamics 365 Marketing isn't just for marketers anymore. With AI and natural language input assistance, business users can build trigger-based journeys that reach customers across multiple touch-points, growing relationships from prospects, through sales and support. ",
  },
  {
    id: 11,
    title: "Project Operations",
    icon: project_operations,
    short_desc:
      "Connects sales, resourcing, project management, and finance teams in a single application to win more deals, accelerate project delivery, and maximize profitability.`",
    long_desc:
      "Microsoft Dynamics 365 Project Operations connects sales, resourcing, project management, and finance teams in a single application to win more deals, accelerate project delivery, and maximize profitability. Project Operations is powerful on its own, but can be expanded by our customers who require more capabilities from Dynamics 365. These capabilities include Marketing, Human Resources, Customer Service, and more. Whether you want the added functionality of another Dynamics 365 application or to add on a custom application built with Power Apps, everything works together and works like you expect because they share the common foundation of a secure, private, and compliant cloud-delivered solution.",
  },
  {
    id: 12,
    title: "Sales",
    icon: sales,
    short_desc:
      "Build strong relationships with your customers, take actions based on insights, and close deals faster.",
    long_desc:
      "Dynamics 365 Sales enables salespeople to build strong relationships with their customers, take actions based on insights, and close deals faster. Use Dynamics 365 Sales to keep track of your accounts and contacts, nurture your sales from lead to order, and create sales collateral. You can also create marketing lists and campaigns, and follow service cases associated with specific accounts or opportunities. ",
  },
  {
    id: 13,
    title: "Supply Chain Management",
    icon: supply_chain_mgt,
    short_desc:
      "Build an adaptable, resilient supply chain that automatically reacts to challenges using real-time visibility, agile planning, and advanced insights.",
    long_desc:
      "Microsoft Dynamics 365 Supply Chain Management is an integrated software solution that enables businesses to optimize their supply chain operations. It offers real-time insights, automation, and collaboration tools to streamline procurement, production, inventory management, and logistics, enhancing efficiency and visibility throughout the supply chain. This platform helps organizations make informed decisions, adapt to market changes, and deliver products and services more effectively.",
  },
];

const benefits_aboutus = [
  {
    id: 0,
    icon: (
      <BsFillClockFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Time & Resource Efficiency",
    desc: "Save valuable time and resources by accessing a diverse range oftechnology solutions without the need to search or negotiate with multiple vendors.",
  },
  {
    id: 1,
    icon: <FaRecycle className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Holistic Approach",
    desc: "Achieve a comprehensive view of your technology landscape, fostering better decision-making, integration, and optimization.",
  },
  {
    id: 2,
    icon: (
      <BsFillSignpostFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Expert Guidance",
    desc: "Benefit from the expertise of professionals who can offer tailored recommendations, insights, and best practices across a spectrum of technology domains.",
  },
  {
    id: 3,
    icon: (
      <BsFillRocketTakeoffFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Scalability & Adaptability",
    desc: "As technology needs evolve, Oreegi can adapt and provide solutions that align with changing requirements.",
  },
  {
    id: 4,
    icon: <FaHandshake className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Collaborative Partnership",
    desc: "Forge a collaborative partnership with technology experts who are invested in your success and growth.",
  },
];

const benefits_microsoft365 = [
  {
    id: 0,
    icon: (
      <BsMicrosoftTeams className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Enhanced Collaboration",
    desc: "Microsoft 365 fosters teamwork and communication through real-time collaboration features, enabling teams to work together regardless of their location.",
  },
  {
    id: 1,
    icon: <FaGlobe className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Flexibility and Mobility",
    desc: "With cloud-based services, users can access their work and collaborate from any device with internet connectivity.",
  },
  {
    id: 2,
    icon: (
      <BsFillClipboard2PlusFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Productivity Boost",
    desc: "Integrated applications, templates, and intelligent features help streamline tasks and improve overall efficiency.",
  },
  {
    id: 3,
    icon: (
      <BsFillShieldLockFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Data Security",
    desc: "Microsoft 365 offers robust security features to protect data, ensuring compliance with industry regulations and standards.",
  },
];

const benefits_dynamics365 = [
  {
    id: 0,
    icon: (
      <BsFillAwardFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Elevate Your Business",
    desc: "Discover a new realm of possibilities with Dynamics 365. Dynamics 365 - cloud-based -  seamlessly integrates with your existing systems, providing a 360-degree view of your operations. ",
  },
  {
    id: 1,
    icon: (
      <MdOutlineJoinFull className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Power of Integration",
    desc: "Experience the power of unified data and processes. Dynamics 365 breaks down silos, connecting every facet of your business. With AI-driven insights and automation, you'll make smarter decisions.",
  },
  {
    id: 2,
    icon: <FaCut className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Tailored Solutions",
    desc: "One size doesn't fit all. Dynamics 365 is highly customizable, allowing you to build solutions that fit your unique needs. Whether you're a startup or an enterprise, we offer a scalable platform.",
  },
  {
    id: 3,
    icon: (
      <BsPersonFillCheck className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Customer-Focussed Innovation",
    desc: " We're committed to innovation that puts your customers first. Dynamics 365 evolves with the changing landscape, ensuring you're always equipped to deliver what your customers demand.",
  },
  {
    id: 4,
    icon: <FaHandshake className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Your Success - Our Success",
    desc: "We're more than just a software provider; we are your partner in growth. Our dedicated support and a global network of experts are here to help you succeed every step of the way.",
  },
];

const benefits_domainhosting = [
  {
    id: 0,
    icon: <BsSearch className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Domain Name Registeration",
    desc: "Choose from a diverse selection of domain extensions and secure a unique web address that reflects your brand identity. Our user-friendly domain search and registration process makes it easy to find and register the perfect domain for your website.",
  },
  {
    id: 1,
    icon: (
      <FaServer className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Web Hosting",
    desc: "Our hosting solutions cater to websites of all sizes, from personal blogs to e-commerce platforms and corporate websites. We offer a variety of hosting options, including shared hosting, VPS hosting, dedicated servers, and cloud hosting, ensuring that your website performs optimally and reliably.",
  },
  {
    id: 2,
    icon: (
      <BsShieldFillCheck className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "SSL Security",
    desc: "Ensure secure data transmission between your user's browser and the website server, safeguarding sensitive information like passwords and credit card details, and improving your site's SEO rankings.. Boost website trustworthiness by displaying a padlock icon and 'https://' in the URL, assuring visitors of data protection.",
  },
];

const benefits_domainhosting_ChooseUs = [
  {
    id: 0,
    icon: <BsClockFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Reliable Infrastructure",
    desc: "Our servers ensure high uptime, fast loading speeds, and seamless performance for your website.",
  },
  {
    id: 1,
    icon: (
      <MdContactSupport className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Expert Support",
    desc: "Our dedicated support team is available 24/7 to assist you with any technical issues, inquiries, or guidance you may need.",
  },
  {
    id: 2,
    icon: (
      <BsFillRocketTakeoffFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Scalability",
    desc: "As your website grows, our hosting solutions can scale to accommodate increased traffic and resource demands.",
  },
  {
    id: 3,
    icon: (
      <BsFillHandIndexThumbFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "User-Friendly Interfaces",
    desc: "Our intuitive control panels and interfaces make it easy for users of all levels to manage their domains and hosting services efficiently.",
  },
];

const benefits_lan = [
  {
    id: 0,
    icon: <FaPenNib className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Network Design",
    desc: "We deliver comprehensive network designs tailored to your specific needs. We analyze your requirements, plan efficient architectures, and create blueprints that optimize performance, scalability, and security.",
  },
  {
    id: 1,
    icon: (
      <BsFillHddNetworkFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Network Implementation",
    desc: "From conception to realization, we transform network designs into functional solutions. Our implementation process is meticulous, ensuring seamless deployment of hardware, software, and configurations to bring your network vision to life.",
  },
  {
    id: 2,
    icon: (
      <BsGraphUpArrow className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Network Optimization",
    desc: "Streamline and enhance your existing network infrastructure with our optimization services. We fine-tune configurations, analyze traffic patterns, and identify bottlenecks to maximize efficiency and reliability.",
  },
  {
    id: 3,
    icon: (
      <BsFillRouterFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Wireless Solutions",
    desc: "Create seamless wireless environments with our advanced Wi-Fi and wireless networking solutions. From office spaces to large campuses, our wireless designs ensure reliable coverage and high-speed connectivity.",
  },
];

const benefits_lan_chooseUS = [
  {
    id: 0,
    icon: (
      <BsFillAwardFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Expertise",
    desc: "Our team comprises skilled professionals with extensive experience in network design, communication, and cybersecurity.",
  },
  {
    id: 1,
    icon: <FaPencilAlt className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Customisation",
    desc: "We understand that each organization has unique needs. Our solutions are tailored to align with your business goals and requirements.",
  },
  {
    id: 2,
    icon: (
      <BsFillPatchCheckFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Reliability",
    desc: "Our solutions are built for stability and high availability, ensuring uninterrupted communication and connectivity.",
  },
  {
    id: 3,
    icon: (
      <BsFillRocketTakeoffFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />
    ),
    title: "Scalability",
    desc: "Whether you are a small startup or a large enterprise, our solutions can scale to accommodate your growth and evolving needs.",
  },
  {
    id: 4,
    icon: <FaLightbulb className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Innovation",
    desc: "Stay ahead of technological advancements with our commitment to innovation, ensuring your network remains future-proof.",
  },
  {
    id: 5,
    icon: <BsPersonFillCheck className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Client-Centric Approach",
    desc: "We prioritize client satisfaction, aiming to build long-lasting partnerships based on trust, communication, and results.",
  },
];

const benefits_surveillance = [
  {
    id: 0,
    icon: <FaVideo className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Video Surveillance",
    desc: "Our range of high-definition cameras captures every detail with exceptional clarity, ensuring your property is under constant watch. Monitor live feeds and access recorded footage from anywhere, anytime.",
  },
  {
    id: 1,
    icon: <BsFillCloudArrowDownFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Remote Monitoring",
    desc: "Stay connected to your surveillance system even when you are away. Our remote monitoring solutions enable real-time access to camera feeds and alerts on your preferred devices.",
  },
  {
    id: 2,
    icon: <BsGraphUp className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Intelligent Analytics",
    desc: "Elevate your security with smart surveillance. Our systems offer advanced analytics, including facial recognition, motion detection, and object tracking, enhancing your ability to identify and respond to potential threats.",
  },
  {
    id: 3,
    icon: <FaCut className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Customised Solutions",
    desc: "We understand that each environment is unique. Our experts collaborate with you to design tailored surveillance systems that cater to your specific security needs and preferences.",
  },
  {
    id: 4,
    icon: <FaLink className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Integration",
    desc: "Seamlessly integrate your surveillance system with other security solutions, access control systems, and automation technologies to create a comprehensive security ecosystem.",
  },
  {
    id: 5,
    icon: <MdContactSupport className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Support & Maintenance",
    desc: "Our dedicated support team ensures your surveillance system remains operational at all times. From troubleshooting to routine maintenance, we are here to keep your security intact.",
  },
]

const benefits_surveillance_chooseUs = [
  {
    id: 0,
    icon: <BsFillAwardFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Expertise",
    desc: "Our skilled professionals have deep understanding of surveillance technology, ensuring effective and reliable system design and implementation.",
  },
  {
    id: 1,
    icon: <FaBolt className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Cutting-Edge Technology",
    desc: "We stay up-to-date with the latest advancements in surveillance systems, ensuring you benefit from state-of-the-art features and capabilities.",
  },
  {
    id: 2,
    icon: <BsFillGearFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Customisation",
    desc: "Your security needs are unique. Our solutions are tailored to your requirements, ensuring optimal coverage and protection.",
  },
  {
    id: 3,
    icon: <BsPersonFillCheck className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Ease of Use",
    desc: "Our user-friendly interfaces make it simple to monitor and manage your surveillance system, putting control at your fingertips.",
  },
  {
    id: 4,
    icon: <BsPersonFillCheck className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Client-focussed Approach",
    desc: "We prioritize client satisfaction, aiming to build long-lasting partnerships based on trust, communication, and results.",
  },
]

const benefits_managedWifi = [
  {
    id: 0,
    icon: <FaWifi className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Managed Wifi",
    desc: "Oreegi offers comprehensive managed Wi-Fi services that are tailored to the unique needs of businesses across various industries. From initial network design and installation to ongoing monitoring and support, we ensure seamless connectivity."
  },
  {
    id: 1,
    icon: <BsFillShieldLockFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Secure Networks",
    desc: "Security is paramount in the digital age. Oreegi employs advanced encryption protocols, firewalls, and intrusion detection systems to safeguard networks against cyber threats and unauthorized access."
  },
  {
    id: 2,
    icon: <BsFillDoorOpenFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Guest Wifi Services",
    desc: "Enhance the customer experience by offering secure and high-speed guest Wi-Fi services. ConnectWave helps businesses set up and manage guest networks for retail, hospitality, and public spaces."
  },
  {
    id: 3,
    icon: <FaCut className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Custom Solutions",
    desc: "We understand that every business is unique. ConnectWave offers customized Wi-Fi solutions, tailored to specific industry requirements and objectives."
  },
]

const benefits_managedWifi_chooseUs = [
  {
    id: 0,
    icon: <BsFillAwardFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Expertise",
    desc: "Our professionals have extensive experience in wireless technology, ensuring the deployment and management of top-tier Wi-Fi networks.",
  },
  {
    id: 1,
    icon: <BsClockFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Reliability",
    desc: "We guarantee high network uptime, reducing downtime and improving productivity for your organization.",
  },
  {
    id: 2,
    icon: <MdOutlineSecurity className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Security",
    desc: "Protecting your data is our priority. We implement robust security measures to safeguard your network and sensitive information.",
  },
  {
    id: 0,
    icon: <BsFillRocketTakeoffFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Scalability",
    desc: "As your business grows, your Wi-Fi network can grow with it. Our scalable solutions adapt to your changing needs.",
  },
  {
    id: 0,
    icon: <BsPersonFillCheck className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Custom-focussed Solution",
    desc: "At Oreegi, customer satisfaction is paramount. We work closely with our clients to understand their needs and provide responsive, personalized support.",
  },
]

const benefits_website = [
  {
    id: 0,
    icon: <BsFillHandIndexFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Responsive Design",
    desc: "Our templates are meticulously crafted to ensure seamless responsiveness across all devices, from desktops to smartphones and tablets. Your website will look stunning and function flawlessly on any screen size.",
  },
  {
    id: 1,
    icon: <FaDiceD20 className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Style Variety",
    desc: "Choose from a wide array of styles, from minimalist and modern to bold and artistic. Our templates cater to diverse industries, including business, e-commerce, portfolio, blog, and more.",
  },
  {
    id: 2,
    icon: <FaCut className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Customisation",
    desc: "Each template is fully customizable, allowing you to personalize colors, fonts, layouts, and content to align with your brand and vision. No coding expertise required.",
  },
  {
    id: 3,
    icon: <BsFillHandIndexFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "User-Friendly",
    desc: "Our templates are designed with user experience in mind. Intuitive interfaces make it easy to modify and update your website, giving you full control over your online presence.",
  },
  {
    id: 4,
    icon:  <BsArrowsAngleContract className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Compatibility",
    desc: "Our templates are designed to seamlessly integrate with popular website builders and content management systems, ensuring a smooth and hassle-free setup process.",
  },
  {
    id: 5,
    icon: <MdUpdate className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Support & Update",
    desc: "Enjoy access to our dedicated support team and stay up-to-date with regular template updates, ensuring that your website remains current and functional.",
  },
]

const benefits_website_chooseUs = [
  {
    id: 0,
    icon: <BsFillStopwatchFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Time Saving",
    desc: "Skip the lengthy design and development process. Our templates provide a ready-made foundation, allowing you to launch your website quickly and efficiently.",
  },
  {
    id: 1,
    icon: <BsFillAwardFill className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Professional Feel",
    desc: "Benefit from the expertise of our design professionals, who create visually appealing and aesthetically pleasing templates that make your website stand out.",
  },
  {
    id: 2,
    icon: <BsCoin className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Affordability",
    desc: "Save on design and development costs with our cost-effective templates, which offer exceptional value for their quality and features.",
  },
  {
    id: 3,
    icon: <BsHourglassSplit className="h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]" />,
    title: "Future-Proof",
    desc: "Regular updates and compatibility ensure that your website remains functional and engaging as web design trends evolve.",
  },
]

const crm = [
  {
    id: 0,
    icon: <BsBinocularsFill className="h-[20px] lg:h-[20px] w-[20px] lg:w-[20px]"/>,
    title: "Leads",
  },
  {
    id: 1,
    icon: <BsPerson className="h-250px] lg:h-[20px] w-[20px] lg:w-[20px]"/>,
    title: "Customers"
  },
  {
    id: 2,
    icon: <BsTicket className="h-[20px] lg:h-[20px] w-[20px] lg:w-[20px]"/>,
    title: "Tickets",
  },
  {
    id: 3,
    icon: <BsCoin className="h-[20px] lg:h-[20px] w-[20px] lg:w-[20px]"/>,
    title: "Finances",
  },
  {
    id: 4,
    icon: <BsTagsFill className="h-[20px] lg:h-[20px] w-[20px] lg:w-[20px]"/>,
    title: "Pricing",
  },
  {
    id: 5,
    icon: <MdEmail className="h-[20px] lg:h-[20px] w-[20px] lg:w-[20px]"/>,
    title: "Mails",
  },
  {
    id: 6,
    icon: <MdShoppingCart className="h-[20px] lg:h-[20px] w-[20px] lg:w-[20px]"/>,
    title: "Products",
  },
]

export {
  services,
  microsoft_365,
  dynamics_module,
  benefits_aboutus,
  benefits_microsoft365,
  benefits_dynamics365,
  benefits_domainhosting,
  benefits_domainhosting_ChooseUs,
  benefits_lan,
  benefits_lan_chooseUS,
  benefits_surveillance,
  benefits_surveillance_chooseUs,
  benefits_managedWifi,
  benefits_managedWifi_chooseUs,
  benefits_website,
  benefits_website_chooseUs,
  crm,
};
