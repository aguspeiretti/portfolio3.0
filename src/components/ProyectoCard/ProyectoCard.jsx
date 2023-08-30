import "./ProyectoCard.scss"; // Estilos personalizados
import proyecto1 from "../../assets/vistas/surf.png";
import proyecto2 from "../../assets/vistas/gym.png";
import proyecto3 from "../../assets/vistas/ruca.png";
import proyecto5 from "../../assets/vistas/tienda.png";
import proyecto6 from "../../assets/vistas/Sin-título-1.png";
import proyecto7 from "../../assets/vistas/trivia.png";
import proyecto8 from "../../assets/vistas/Ambos.png";
import proyecto9 from "../../assets/vistas/pitu.png";
import proyecto11 from "../../assets/vistas/cel.png";
const eventos = [
  {
    foto: proyecto1,
    titulo: "MDQ surf Shop",
    descripcion:
      "Se presenta un comercio electrónico desarrollado íntegramente en React, con la implementación de Redux para la funcionalidad del carrito. Los estilos han sido elaborados utilizando CSS puro. Este sitio ofrece una experiencia completa que incluye un carrito de compras totalmente funcional, además de la capacidad de reservar clases.",
    skills: ["React", "Js", "Redux", "Css", "Html"],
    web: "https://mdq-surf-c23be.web.app/",
  },
  {
    foto: proyecto2,
    titulo: "Forest Gym",
    descripcion:
      "Una plataforma que permite la reserva de clases a través de correo electrónico, complementada con una presencia web que brinda información relevante.",
    skills: ["React", "Js", "Css", "Html"],
    web: "https://forest-gym.web.app/",
  },
  {
    foto: proyecto3,
    titulo: "Ruca Textil",
    descripcion:
      "La web en cuestión se destaca por ser una fuente de información y referencia de productos en formato de muestra. Brindando una perspectiva ilustrativa , esta página ofrece una presentación selecta y esclarecedora de diversos productos.",
    skills: ["Js", "Css", "Html"],
    web: "https://aguspeiretti.github.io/ruca-textil/",
  },
  {
    foto: proyecto5,
    titulo: "Tienda Vintash",
    descripcion:
      "Esta plataforma en línea sirve como un escaparate de productos representativos, facilitando a los clientes interesados establecer contacto a través de WhatsApp para obtener más detalles y gestionar sus consultas de manera personalizada.",
    skills: ["Js", "Css", "Html"],
    web: "https://aguspeiretti.github.io/tiendaVintashh/",
  },
  {
    foto: proyecto6,
    titulo: "Portfolio Personal",
    descripcion:
      "Explora mi portafolio personal, un proyecto diseñado con Vite , la interfaz es ágil y fluida. Estilizado con Sass. Para realzar la experiencia visual, aos.js. Además, he implementado un contador de visitas que utiliza MongoDB para rastrear el alcance de mi portafolio.",
    skills: ["React", "Js", "Sass", "Aos", "Mongo"],
  },
  {
    foto: proyecto7,
    titulo: "Entriviados",
    descripcion:
      "Pequeño juego de trivia, para practicar las bases fundamentales de javascript, dando la posibilidad de elegir tanto categorias como el tiempo a jugar , se agrego un inicio de secion con Auth0 para una experiencia personalizada",
    skills: ["React", "Js", "Css", "Html"],
    web: "https://entriviados-g.web.app/",
  },
  {
    foto: proyecto8,
    titulo: "Ambos Akumal",
    descripcion:
      "Primer proyecto realizado para la finalizacion del curso de Html y css una web muy basica implementando lo aprendido.",
    skills: ["Css", "Html"],
  },
  {
    foto: proyecto9,
    titulo: "Pitupedia!",
    descripcion:
      "Un mini proyecto personal . Una sencilla web que busca fomentar el desarrollo del habla en niños mediante la asociación entre imágenes y sonidos. Una experiencia interactiva diseñada para inspirar y estimular el aprendizaje temprano.",
    skills: ["React", "Js", "Css", "Html"],
    web: "https://pitupedia-6c1ab.web.app/",
  },
  {
    foto: proyecto11,
    titulo: "Donde Comemo",
    descripcion:
      "proyecto optimizado para visualización en dispositivos móviles .La página presenta una pantalla de registro o inicio de sesión, que activa la función de favoritos. La 'Home' muestra un carrusel de imágenes y ofrece acceso a las categorías principales. Un menú de navegación inferior facilita la exploración de secciones como Restaurantes, Bares, Cafés, organizados por zonas y categorías. Cada sección incluye tarjetas descriptivas y enlaces a detalles ampliados.",
    skills: ["React", "Sass", "Firebase", "EmailJs , Router-Dom"],
    web: "https://donde-comemo.vercel.app/",
  },
];

const ProyectoCard = () => {
  return (
    <div className="card">
      <div className="container">
        {eventos.map((evento, index) => (
          <div className="evento" key={index}>
            <div
              className="foto"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <img src={evento.foto} alt="" />
            </div>
            <div
              className="infoProyect"
              data-aos={index % 2 === 0 ? "zoom-in-left" : "zoom-in-right"}
            >
              <h3 className="fecha">{evento.titulo}</h3>
              <p className="description">{evento.descripcion}</p>
              <div className="skills">
                {evento.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>{skill}</span>
                ))}
              </div>
              <div className="botonProyecto">
                <a href={evento.web} target="_blank" rel="noopener noreferrer">
                  <button>ver proyecto</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="containerMobile">
        {eventos.map((evento, index) => (
          <div className="proyectosMobile" key={index}>
            <img src={evento.foto} alt="" />
            <h2>{evento.titulo}</h2>
            <p>{evento.descripcion}</p>
            <div className="skills">
              {evento.skills.map((skill, skillIndex) => (
                <span key={skillIndex}>{skill}</span>
              ))}
            </div>
            <div className="botonProyecto">
              <a href={evento.web} target="_blank" rel="noopener noreferrer">
                <button>ver proyecto</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProyectoCard;
