import style from "./style.module.css";

import proyect1 from "../../assets/freaturedContent/proyect1.png";
import proyect2 from "../../assets/freaturedContent/proyect2.png";

function FeaturedContent() {
  return (
    <div className={style.containerFeatured}>
      <h2 className={style.principalTitle}>Featured Content</h2>

      <div className={style.containersCards}>
        <div className={style.containerCard}>
          <picture className={style.containerImg}>
            <img className={style.img} src={proyect2} alt="" />
          </picture>
          <div className={style.containerText}>
            <h4 className={style.subTitle}>Top News</h4>
            <h2 className={style.title}>
              VR training app for a manufacturing company
            </h2>

            <p className={style.text}>
              Throughout 2021, the company’s specialists implemented important
              skill-sharing and community development initiatives as part
            </p>
            <button className={style.button}>Read more</button>
          </div>
        </div>
        <div className={style.containerCard}>
          <picture className={style.containerImg}>
            <img className={style.img} src={proyect1} alt="" />
          </picture>
          <div className={style.containerText}>
            <h4 className={style.subTitle}>Top News</h4>
            <h2 className={style.title}>
              VR training app for a manufacturing company
            </h2>

            <p className={style.text}>
              Throughout 2021, the company’s specialists implemented important
              skill-sharing and community development initiatives as part
            </p>
            <button className={style.button}>Read more</button>
          </div>
        </div>
        <div className={style.containerCard}>
          <picture className={style.containerImg}>
            <img className={style.img} src={proyect2} alt="" />
          </picture>
          <div className={style.containerText}>
            <h4 className={style.subTitle}>Top News</h4>
            <h2 className={style.title}>
              VR training app for a manufacturing company
            </h2>

            <p className={style.text}>
              Throughout 2021, the company’s specialists implemented important
              skill-sharing and community development initiatives as part
            </p>
            <button className={style.button}>Read more</button>
          </div>
        </div>
        <div className={style.containerCard}>
          <picture className={style.containerImg}>
            <img className={style.img} src={proyect1} alt="" />
          </picture>
          <div className={style.containerText}>
            <h4 className={style.subTitle}>Top News</h4>
            <h2 className={style.title}>
              VR training app for a manufacturing company
            </h2>

            <p className={style.text}>
              Throughout 2021, the company’s specialists implemented important
              skill-sharing and community development initiatives as part
            </p>
            <button className={style.button}>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedContent;
