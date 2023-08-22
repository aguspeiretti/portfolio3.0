import "./Contacto.scss";
import gith from "../../assets/githubb.png";
import lin from "../../assets/lin.png";
import gmail from "../../assets/gmail.png";
import what from "../../assets/wha.png";

const Contacto = () => {
  return (
    <div className="contactoContainer">
      <div className="texto">
        <h1>Quieres Contactame?</h1>
        <p>
          Actualmente estoy en busca de nuevas oportunidades, mis canales de
          contacto siempre está abierto, ya sea para una oferta de trabajo o
          simplemente para saludar! Intentaré responder lo antes posible.
        </p>
      </div>
      <div className="iconosContacto">
        <img src={what} alt="" />
        <img src={lin} alt="" />
        <img src={gmail} alt="" />
        <img src={gith} alt="" />
      </div>
    </div>
  );
};

export default Contacto;
