import srcImg from "../../assets/footter/Group 143725860.svg";

import style from "./style.module.css";

function Footer() {
  return (
    <footer className={style.containerFooter}>
      <div className={style.containerMax}>
        <picture>
          <img src={srcImg} alt="" />
        </picture>
        <p className={style.text}>
          Concept Softworks is a software company, we develop custom built
          software for clients - covering everything from financial institutions
          & medical companies all the way to tech companies and government
          organizations.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
