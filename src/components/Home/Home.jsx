/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useState } from "react";
import Letters from "../AnimateLetters/Letters";
import "./Home.scss";
import h1 from "../../assets/blob.png";
import { Element } from "react-scroll";

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
      setShow(true);
    }, 1700);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <Element name="top"></Element>
      <div className="homeContainerComponent">
        <div className="contenedorPrincipal">
          <div className="texto">
            <h1>
              <span className={`${letterClass} _smaller`}>H</span>
              <span className={`${letterClass} _12  _smaller`}>o</span>
              <span className={`${letterClass} _13  _smaller`}>l</span>
              <span className={`${letterClass} _14  _smaller`}>a</span>
              <span className={`${letterClass} _15  _smaller`}>!</span>
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
              <Letters
                letterClass={`${letterClass} _smaller1`}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>
              <span>FullStack</span> / <span>Mongo</span> / <span>Express</span>{" "}
              / <span>React</span> / <span>NodeJS</span>
            </h2>
          </div>
        </div>
        <div className={`imagenContainer ${show ? "visible" : ""}`}>
          <div className="imagen-flotante">
            <img src={h1} alt="" />
          </div>
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
