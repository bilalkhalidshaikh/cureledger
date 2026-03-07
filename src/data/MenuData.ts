interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}

// const menu_data: MenuItem[] = [
//     {
//         id: 1,
//         title: "Home",
//         link: "#",
//         has_dropdown: true,
//         sub_menus: [
//             { link: "/", title: "Design Studio" },
//             { link: "/home-two", title: "Startup Agency" },
//             { link: "/home-three", title: "Digital Studio" },
//             { link: "/home-four", title: "Creative Agency" },
//             { link: "/home-five", title: "Digital Agency" },
//             { link: "/home-six", title: "Marketing Agency" },
//             { link: "/home-seven", title: "Personal Portfolio" },
//             { link: "/full-screen-slicer", title: "Full Screen Slicer" },
//             { link: "/interactive-links", title: "Interactive links" },
//             { link: "/showcase-carousale", title: "Showcase Carousale" },
//             { link: "/portfolio-showcase", title: "Portfolio Showcase" },
//         ],
//     },
//     {
//         id: 2,
//         title: "Pages",
//         link: "#",
//         has_dropdown: true,
//         sub_menus: [
//             { link: "/about", title: "About" },
//             { link: "/service", title: "Service" },
//             { link: "/service-details", title: "Service Details" },
//             { link: "/team", title: "Team" },
//             { link: "/team-details", title: "Team Details" },
//             { link: "/shop", title: "Shop" },
//             { link: "/shop-details", title: "Shop Details" },
//             { link: "/pricing", title: "Pricing" },
//             { link: "/faq", title: "Faq" },
//             { link: "/not-found", title: "Error" },
//         ],
//     },
//     {
//         id: 3,
//         title: "Portfolio",
//         link: "#",
//         has_dropdown: true,
//         sub_menus: [
//             { link: "/portfolio-two-columns", title: "Two Columns" },
//             { link: "/portfolio-three-columns", title: "three Columns" },
//             { link: "/portfolio-four-columns", title: "four Columns" },
//             { link: "/portfolio-random", title: "Portfolio Random" },
//             { link: "/portfolio-details", title: "Portfolio Details" },
//         ],
//     },
//     {
//         id: 4,
//         title: "Blogs",
//         link: "#",
//         has_dropdown: true,
//         sub_menus: [
//             { link: "/blog", title: "Blog" },
//             { link: "/blog-sidebar", title: "Blog Sidebar" },
//             { link: "/blog-details", title: "Blog Details" },
//         ],
//     },
//     {
//         id: 5,
//         has_dropdown: false,
//         title: "Contact",
//         link: "/contact",
//     },
// ];
const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: true,
  },
  {
    id: 2,
    title: "Services",
    link: "/service",
    has_dropdown: true,
  },
  {
    id: 3,
    title: "Pricing & Plans",
    link: "/pricing",
    has_dropdown: true,
  },
  {
    id: 4,
    title: "Contact Us",
    link: "/contact",
    has_dropdown: true,
  },
  {
    id: 5,
    has_dropdown: false,
    title: "About Us",
    link: "/about",
  },
];

export default menu_data;
