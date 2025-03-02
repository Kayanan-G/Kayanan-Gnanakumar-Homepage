import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/Kayanan-G-pfp1.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import mailLight from "../../assets/mail-light.png";
import mailDark from "../../assets/mail-dark.png";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const mailIcon = theme === "light" ? mailDark : mailLight;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Kayanan Gnanakumar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode iocn"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Kayanan
          <br />
          Gnanakumar
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/Kayanan-G" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kayanan-gnanakumar/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="mailto:@gmail.com" target="_blank">
            <img src={mailIcon} alt="Mail icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resmue</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
