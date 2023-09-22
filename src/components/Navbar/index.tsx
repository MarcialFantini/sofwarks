import style from "./style.module.css";

import srcSearch from "../../assets/header/search.svg";

function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbar}>
        <h2 className={style.title}>Zjox Softwarks </h2>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li>About</li>
            <li>Project</li>
            <li>Service</li>
            <li>Client</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>

        <picture className={style.picture}>
          <img src={srcSearch} alt="" className={style.img} />
        </picture>
      </div>
    </div>
  );
}

export default Navbar;
