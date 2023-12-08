import style from "./Privacy.module.scss";
import { privacyData } from "@/json/StaticData";

const Privacy = () => {
  return (
    <>
      <div className={style.container}>
        {privacyData.map((data) => (
            
          <div className={style.privacyData} key={data.id}>
            <span>
                <span className={style.dot}></span>
            <h2>{data.heading}</h2>
            </span>
            <p>{data.desc1}</p>
            <p>{data.desc2}</p>
            <p>{data.desc3}</p>
            <p>{data.desc4}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Privacy;
