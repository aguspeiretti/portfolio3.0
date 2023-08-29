/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Letters from "../AnimateLetters/Letters";
import "./Portfolio.scss";

import ProyectoCard from "../ProyectoCard/ProyectoCard";
import { Element } from "react-scroll";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
      setShow(true);
    }, 3000);
  }, []);

  return (
    <>
      <Element name="proyectos"></Element>
      <div className="leettersProyectContainer" data-aos="zoom-in-right">
        <div className="texto">
          <h1>
            <Letters
              letterClass={letterClass}
              strArray={["P", "r", "o", "y", "e", "c", "t", "o", "s"]}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <div className="proyectitos">
        <ProyectoCard />
      </div>
    </>
  );
};

export default Portfolio;
