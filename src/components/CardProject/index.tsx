import style from "./style.module.css";

import srcImg from "../../assets/proyects/Vector.svg";

interface props {
  src: string;
}

function CardProject({ src }: props) {
  return (
    <div className={style.cardProject}>
      <picture className={style.imgAbsolute}>
        <img className={style.img} src={srcImg} alt="" />
      </picture>

      <picture className={style.picture}>
        <img src={src} alt="" className={style.img} />
      </picture>
      <div className={style.textContainer}>
        <h3 className={style.titleCard}>
          VR training app for a manufacturing company
        </h3>
        <button className={style.button}>{"->"}</button>
      </div>
    </div>
  );
}

export default CardProject;
