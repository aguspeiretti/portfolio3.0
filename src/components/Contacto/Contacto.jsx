import "./Contacto.scss";
import gith from "../../assets/githubb.png";
import lin from "../../assets/lin.png";
import gmail from "../../assets/gmail.png";
import what from "../../assets/wha.png";
import { Element } from "react-scroll";

const Contacto = () => {
  return (
    <div className="contactoContainer">
      <Element name="contacto"></Element>
      <div className="texto">
        <h1>Quieres Contactame?</h1>
        <p>
          Actualmente estoy en busca de nuevas oportunidades, mis canales de
          contacto siempre está abierto, ya sea para una oferta de trabajo o
          simplemente para saludar! Intentaré responder lo antes posible.
        </p>
      </div>
      <div className="iconosContacto">
        <a href="https://wa.me/543518015096" target="_blank" rel="noreferrer">
          <img src={what} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/agus-peiretti/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={lin} alt="" />
        </a>
        <div
          onClick={(e) => {
            window.location.href = "mailto:tudirecciondecorreo@gmail.com";
            e.preventDefault();
          }}
        >
          <img src={gmail} alt="" />
        </div>
        <a
          href="https://github.com/aguspeiretti"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img src={gith} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contacto;
