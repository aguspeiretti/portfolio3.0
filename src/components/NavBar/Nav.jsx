import "../NavBar/nav.scss";
import name from "../../assets/reactLogo.png";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="navContainer">
        <div className="imgContainer">
          <img src={name} alt="" />
          <p>cv download</p>
        </div>
        <ul className="linksContainer">
          <Hamburger
            rounded
            easing="ease-in"
            toggled={isOpen}
            toggle={setOpen}
          />
        </ul>
      </div>
      {isOpen && (
        <div className="menuFlotante">
          <Hamburger
            rounded
            easing="ease-in"
            toggled={isOpen}
            toggle={setOpen}
          />
          <ul>
            <li>Top</li>
            <li>Info</li>
            <li>Proyectos</li>
            <li>Contactos</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
