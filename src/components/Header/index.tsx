import style from "./style.module.css";
import headerImg from "../../assets/header/header.jpeg";
import span from "../../assets/header/span.svg";

import lines from "../../assets/header/lines.svg";
import lines2 from "../../assets/header/lines2.svg";

import sponsor1 from "../../assets/header/sponsor/sponsor1.png";
import sponsor2 from "../../assets/header/sponsor/sponsor2.png";
import sponsor3 from "../../assets/header/sponsor/sponsor3.png";
import sponsor4 from "../../assets/header/sponsor/sponsor4.png";
import sponsor5 from "../../assets/header/sponsor/sponsor5.png";

function Header() {
  return (
    <div className={style.header}>
      <picture className={style.picture}>
        <img className={style.img} src={headerImg} alt="" />
      </picture>
      <picture className={style.lines}>
        <img src={lines} className={style.img1} alt="" />
      </picture>
      <picture className={style.lines}>
        <img src={lines2} alt="" className={style.img2} />
      </picture>

      <div className={style.containerTitle}>
        <h1 className={style.title}>
          Lets make{" "}
          <span className={style.span}>
            <picture className={style.pictureSpan}>
              <img src={span} alt="" className={style.imgSpan} />
            </picture>
          </span>{" "}
          software together!
        </h1>
      </div>

      <div className={style.rectangulo}>
        <div className={style.containerSponsor}>
          <picture>
            <img src={sponsor1} alt="" />
          </picture>
          <picture>
            <img src={sponsor2} alt="" />
          </picture>
          <picture>
            <img src={sponsor3} alt="" />
          </picture>
          <picture>
            <img src={sponsor4} alt="" />
          </picture>
          <picture>
            <img src={sponsor5} alt="" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Header;
