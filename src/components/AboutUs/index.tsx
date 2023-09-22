import style from "./style.module.css";

import about1 from "../../assets/aboutUs/about1.png";
import about2 from "../../assets/aboutUs/about2.png";
import about3 from "../../assets/aboutUs/about3.png";

function AboutUs() {
  return (
    <div className={style.containerAbout}>
      <div className={style.containerPicture}>
        <picture className={style.picture1}>
          <img className={style.img} src={about2} alt="" />
        </picture>
        <picture className={style.picture2}>
          <img className={style.img} src={about3} alt="" />
        </picture>
        <picture className={style.picture3}>
          <img className={style.img} src={about1} alt="" />
        </picture>
      </div>

      <div className={style.containerText}>
        <h2 className={style.title}>About US</h2>
        <p className={style.text}>
          Concept Softworks is a software company, we develop custom built
          software for clients - covering everything from financial institutions
          & medical companies all the way to tech companies and government
          organizations.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
