import img_restaurant from "../assets/webp/py_restaurant.webp";
import img_kitara from "../assets/webp/py_kitara.webp";
import img_ecommers from "../assets/webp/py_ecommers.webp";
import img_profile from "../assets/webp/py_profile.webp";
import img_pokemon from "../assets/webp/py_pokemon.webp";
import img_agency from "../assets/webp/agencia2.webp.jpg";

const projectsList = [
  {
    id: 1,
    title: { en: "Market Met", es: "Mercado Met" },
    description: {
      en: "Ecommers developed in react",
      es: "Ecommerce desarrollado en react",
    },
    image: img_ecommers,
    url: "https://market-met.vercel.app/",
    github: "https://github.com/luisdevelop23/MarketMet",
  },
  {
    id: 2,
    title: { en: "MetProfile", es: "PerfilMet" },
    description: {
      en: "Web application in React to create virtual resumes, in a work environment",
      es: "Aplicación web en React para crear currículums virtuales, en un entorno laboral",
    },
    image: img_profile,
    url: "https://met-profile.vercel.app/",
    github: "https://github.com/luisdevelop23/MetProfile",
  },
  {
    id: 3,
    title: { en: "PokeDex", es: "PokeDex" },
    description: {
      en: "Web application, about pokemons.",
      es: "Aplicacion web, sobre los pokemons.",
    },
    image: img_pokemon,
    url: "https://pokemon-page-react-tailwindcss-vite.vercel.app/",
    github:
      "https://github.com/luisdevelop23/Pokemon-Page-React-Tailwindcss-Vite",
  },

  {
    id: 4,
    title: { en: "I Restaurant", es: "Yo Restaurante" },
    description: {
      en: "Page that presents a restaurant.",
      es: "Página que presenta un restaurante.",
    },
    image: img_restaurant,
    url: "https://dazzling-narwhal-ecf3bb.netlify.app/",
    github: null,
  },
  {
    id: 5,
    title: { en: "KITARA", es: "KITARA" },
    description: {
      en: "Website representing the sandals brand.",
      es: "Sitio web que representa la marca de sandalias.",
    },
    image: img_kitara,
    url: "https://resilient-halva-5599d9.netlify.app/",
    github: "https://github.com/luisdevelop23/KITARA",
  },

  {
    id: 6,
    title: { en: "Travel agency", es: "Agencia de Viajes" },
    description: {
      en: "Desktop application simulating travel agency, .NET + SQL Server",
      es: "Aplicacion de escritorio simulando agencia de viajes, .NET + SQL Server",
    },
    image: img_agency,
    url: null,
    github: "https://github.com/luisdevelop23/AgenciaViajes",
  },
];

export default projectsList;
