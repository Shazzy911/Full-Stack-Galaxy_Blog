import style from "./SocialApp.module.scss";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const SocialApp = () => {
    return (
        <>
            <div className={style.container}>
                <FaTwitter className={style.icon} />
                <br />
                <FaFacebook className={style.icon} />
                <br />
                <FaGithub className={style.icon} />
                <br />
                <FaInstagram className={style.icon} />
                <br />
                <FaLinkedin className={style.icon} />
            </div>
        </>
    );
};

export default SocialApp;
