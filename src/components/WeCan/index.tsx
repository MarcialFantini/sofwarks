import style from "./style.module.css";

import tall from "../../assets/weCan/tall.png";
import rule from "../../assets/weCan/rule.svg";

function WeCan() {
  return (
    <div className={style.weCanContainer}>
      <div className={style.containerTitle}>
        <picture className={style.picture1}>
          <img className={style.img} src={tall} alt="" />
        </picture>

        <picture className={style.picture2}>
          <img className={style.img} src={rule} alt="" />
        </picture>
        <h2 className={style.title}>See what we can do for you</h2>
      </div>
      <ul className={style.containerList}>
        <li>Product Design</li>
        <li>Ideation & Strategy</li>
        <li>Web and Mobile</li>
        <li>Embedded Systems</li>
      </ul>
    </div>
  );
}

export default WeCan;
