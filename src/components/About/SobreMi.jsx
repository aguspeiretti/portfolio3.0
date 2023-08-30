import { useState } from "react";
import agus from "../../assets/agus.jpg";
import "./SobreMi.scss";
import SkillIcon1 from "../../assets/git.png";
import SkillIcon2 from "../../assets/corel.png";
import SkillIcon3 from "../../assets/photo.png";
import SkillIcon4 from "../../assets/github.png";
import SkillIcon5 from "../../assets/javascript.png";
import SkillIcon6 from "../../assets/mongo.png";
import SkillIcon7 from "../../assets/sass.png";
import SkillIcon8 from "../../assets/html.png";
import SkillIcon9 from "../../assets/css.png";
import SkillIcon10 from "../../assets/react.png";
import SkillIcon11 from "../../assets/node.png";
import SkillIcon12 from "../../assets/firebase.png";
import SkillIcon13 from "../../assets/redux.png";
import SkillIcon14 from "../../assets/docker.png";
import SkillIcon15 from "../../assets/bs3.png";
import { Element } from "react-scroll";

const SobreMi = () => {
  const skillIcons = [
    SkillIcon10,
    SkillIcon5,
    SkillIcon8,
    SkillIcon9,
    SkillIcon7,
    SkillIcon6,
    SkillIcon11,
    SkillIcon12,
    SkillIcon4,
    SkillIcon13,
    SkillIcon14,
    SkillIcon15,
    SkillIcon1,
    SkillIcon2,
    SkillIcon3,
  ];
  const [skills, setSkills] = useState(false);

  const showSkills = () => {
    setSkills(!skills);
    console.log("hola");
  };

  return (
    <>
      <Element name="info"></Element>
      <div
        className="sobreMiContainer"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="boxContainer">
          <div className="box">
            <div className=" content">
              <img src={agus} alt="" />
              <h2>
                Conoce mis
                <br />
                <span>Skills</span>
              </h2>
              <a onClick={showSkills}>click!</a>
            </div>
          </div>
        </div>
        <div className="sobreMiTexto ">
          {skills ? (
            <div className="skillContainer">
              {skillIcons.map((skill, index) => (
                <div className="sContainer" key={index}>
                  <img src={skill} alt="" />
                </div>
              ))}
            </div>
          ) : (
            <div className="texto">
              <h1>Un poco sobre mi...</h1>
              <p>
                Hola, soy Agus, desarrollador Fullstack especializado en el
                stack MERN. Mi pasión por la programación comenzó en febrero de
                2021 y desde entonces he estado inmerso en un emocionante viaje
                de aprendizaje . Mi formación en Coderhouse me brindó una base
                sólida en desarrollo Fullstack, con un enfoque en las
                tecnologías
                <span className="colored"> MongoDB</span>,{" "}
                <span className="colored">Express</span>,{" "}
                <span className="colored">React</span> y
                <span className="colored"> NodeJs</span>.Me encanta crear
                aplicaciones completas y dinámicas desde cero, abarcando tanto
                el lado del servidor como la experiencia del usuario. Me parece
                que una parte importante es saber adaptarse a un entorno
                tecnológico en constante evolución. Por eso, me mantengo
                actualizado y en constante estudio. Veo cada proyecto como una
                oportunidad para demostrar mi creatividad y uno de mis objetivos
                esta enfocado en trata de comprender las necesidades del usuario
                y transformarlas en soluciones funcionales y atractivas. Puedes
                ver algunos de mis proyectos mas abajo.
              </p>
            </div>
          )}
        </div>
        <div className="sobreMiTextoMobile">
          {skills ? (
            <>
              <div className="skillContainer">
                {skillIcons.map((skill, index) => (
                  <div className="sContainer" key={index}>
                    <img src={skill} alt="" />
                  </div>
                ))}
              </div>
              <div className="buttonMobile">
                <button onClick={showSkills}>Skills</button>
              </div>
            </>
          ) : (
            <div className="texto">
              <h1>Un poco sobre mi...</h1>
              <p>
                Hola, soy Agus, desarrollador Fullstack especializado en el
                stack MERN. Mi pasión por la programación comenzó en febrero de
                2021 y desde entonces he estado inmerso en un emocionante viaje
                de aprendizaje . Mi formación en Coderhouse me brindó una base
                sólida en desarrollo Fullstack, con un enfoque en las
                tecnologías
                <span className="colored"> MongoDB</span>,{" "}
                <span className="colored">Express</span>,{" "}
                <span className="colored">React</span> y
                <span className="colored"> NodeJs</span>.Me encanta crear
                aplicaciones completas y dinámicas desde cero, abarcando tanto
                el lado del servidor como la experiencia del usuario. Me parece
                que una parte importante es saber adaptarse a un entorno
                tecnológico en constante evolución. Por eso, me mantengo
                actualizado y en constante estudio. Veo cada proyecto como una
                oportunidad para demostrar mi creatividad y uno de mis objetivos
                esta enfocado en trata de comprender las necesidades del usuario
                y transformarlas en soluciones funcionales y atractivas. Puedes
                ver algunos de mis proyectos mas abajo.
              </p>
              <button onClick={showSkills}>Skills</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SobreMi;
