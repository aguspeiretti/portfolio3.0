/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useState } from "react";
import Letters from "../AnimateLetters/Letters";
import "./Home.scss";
import fondo from "../../assets/prueba1.png";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    " ",
    "A",
    "g",
    "u",
    "s",
    " ",
    "P",
    "e",
    "i",
    "r",
    "e",
    "t",
    "t",
    "i",
  ];
  const jobArray = [
    "W",
    "e",
    "b ",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r ",
  ];
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="homeContainerComponent">
        <div className="contenedorPrincipal">
          <div className="texto">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>o</span>
              <span className={`${letterClass} _13`}>l</span>
              <span className={`${letterClass} _14`}>a</span>
              <span className={`${letterClass} _15`}>!</span>
              <br />
              <span className={`${letterClass} _15`}>S</span>
              <span className={`${letterClass} _16`}>o </span>
              <span className={`${letterClass} _17`}>y </span>
              <Letters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <Letters letterClass={letterClass} strArray={jobArray} idx={22} />
            </h1>
            <h2>
              <span>FullStack</span> / <span>Mongo</span> / <span>Express</span>{" "}
              / <span>React</span> / <span>NodeJS</span>
            </h2>

            <button>Contacta me</button>
          </div>
        </div>
        <div className="imagenContainer">
          <img src={fondo} alt="" />
        </div>

        <section id="section10" className="demo">
          <a href="#thanks">
            <span></span>
          </a>
        </section>
      </div>
    </>
  );
}

export default Home;
