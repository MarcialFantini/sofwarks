import style from "./style.module.css";

import srcSearch from "../../assets/header/search.svg";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(true);

  const handlerToggleActive = () => setActive((prev) => !prev);

  return (
    <div className={style.navbarContainer}>
      <div className={style.navbar}>
        <h2 className={style.title}>
          Zjox <span className={style.secondTitle}>Softwarks</span>
        </h2>
        <nav className={style.nav}>
          <ul
            style={{ transform: active ? " translate(120%)" : "" }}
            className={style.list + " " + (active ? style.activeNav : "")}
          >
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Project</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/">Client</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>

        <picture className={style.img} onClick={handlerToggleActive}>
          <img src={srcSearch} alt="" />
        </picture>
      </div>
    </div>
  );
}

export default Navbar;
