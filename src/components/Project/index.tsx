import CardProject from "../CardProject";
import style from "./style.module.css";

import project1 from "../../assets/proyects/project1.jpg";
import project2 from "../../assets/proyects/project2.jpg";
import project3 from "../../assets/proyects/project3.jpeg";

const list = [project1, project2, project3];

function Project() {
  return (
    <div className={style.containerProject}>
      <h2 className={style.title}>Project</h2>
      <div className={style.containerList}>
        {list.map((item) => {
          return <CardProject src={item}></CardProject>;
        })}
      </div>
    </div>
  );
}

export default Project;
