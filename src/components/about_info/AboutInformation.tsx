// import style from "./AboutInformation.module.scss";
// import Profile from "@/images/author1.jpg"
// import Image from "next/image";
// import Privacy from "../privacy/Privacy";

// const AboutInformation = () => {
//   return (
//     <>
//       <div className={style.container}>
//         <Image src={Profile} height={416} width={725} alt="Image not Found" className={style.mainImage}/>
//         <h1>
//           Hi, I am Shahzaib Saleem, Full Stack Engineer.
//         </h1>
//         <p>
//         Skilled Web Developer with expertise in MERN Stack and TypeScript, showcasing proficiency in the creation of robust RESTful APIs. Adept at steering collaborative projects using Jira, I bring a wealth of experience and a passion for coding with a keen problem-solving aptitude. Beyond the realm of technology, I am well-versed in championing sustainable and eco-friendly living, embodying a holistic approach to both professional and personal pursuits. Committed to excellence and innovation, I thrive in dynamic environments, consistently delivering high-quality solutions and contributing to the advancement of cutting-edge web development.
//         </p>
//         <h2 className={style.secondHeading}>I am on a mission to change how software is made by peoples of republic</h2>
//          <Privacy/>

//       </div>
//     </>
//   );
// };

// export default AboutInformation;


import style from "./AboutInformation.module.scss";
import Profile from "@/images/author1.jpg";
import Image from "next/image";
import Privacy from "../privacy/Privacy";

const AboutInformation = () => {
  return (
    <>
      <div className={style.container}>
        <Image 
          src={Profile} 
          height={416} 
          width={725} 
          alt="Image not Found" 
          className={style.mainImage} 
        />
        <h1>
          Hi, I am Shahzaib Saleem, Full Stack Engineer.
        </h1>
        <p>
          Skilled Web Developer with expertise in MERN Stack and TypeScript, showcasing proficiency in the creation of robust RESTful APIs. Adept at steering collaborative projects using Jira, I bring a wealth of experience and a passion for coding with a keen problem-solving aptitude. Beyond the realm of technology, I am well-versed in championing sustainable and eco-friendly living, embodying a holistic approach to both professional and personal pursuits. Committed to excellence and innovation, I thrive in dynamic environments, consistently delivering high-quality solutions and contributing to the advancement of cutting-edge web development.
        </p>
        <h2 className={style.secondHeading}>
          I am on a mission to change how software is made by peoples of republic
        </h2>
        <Privacy />
      </div>
    </>
  );
};

export default AboutInformation;
