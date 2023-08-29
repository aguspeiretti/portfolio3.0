import "../NavBar/nav.scss";
import name from "../../assets/reactLogo.png";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import cv from "../../assets/cv.pdf";
import { Link } from "react-scroll";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="navContainer">
        <div className="imgContainer">
          <a href={cv} download>
            {" "}
            <img src={name} alt="" />
            <p>cv download</p>{" "}
          </a>
        </div>{" "}
        <ul className="linksContainer">
          <Hamburger
            rounded
            size={20}
            easing="ease-in"
            toggled={isOpen}
            toggle={setOpen}
          />
        </ul>
      </div>
      {isOpen && (
        <div className="menuFlotante">
          <ul>
            <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              onClick={handleMenu}
            >
              {" "}
              <li>Top</li>
            </Link>

            <Link
              activeClass="active"
              to="info"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
              onClick={handleMenu}
            >
              {" "}
              <li>Informacion</li>
            </Link>
            <Link
              activeClass="active"
              to="proyectos"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
              onClick={handleMenu}
            >
              {" "}
              <li>Proyectos</li>
            </Link>
            <Link
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
              onClick={handleMenu}
            >
              {" "}
              <li>Contacto</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
