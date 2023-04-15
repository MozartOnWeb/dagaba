import Link from "next/link";

import styles from "./styles.module.css";

import {
  MapsIcon,
  PhoneIcon,
  MessageIcon,
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/public/assets/icons";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topContainer}>
        <div className={styles.logoContainer}>
          <h2>DAGABA</h2>
          <p>
            DAGABA possède aujourd’hui plus de 2000 remèdes au niveau de son
            cabinet et les recherches continuent.
          </p>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.linksItem}>
            <h6>Accueil</h6>
            <p>
              <a href="#presentation">Présentation</a>
            </p>
            <p>
              <a href={"#why-us"}>Pourquoi nous choisir ?</a>
            </p>
            <p>
              <a href={"#how-we-help"}>Comment on aide ?</a>
            </p>
          </div>
          <div className={styles.linksItem}>
            <h6>Liens utiles</h6>
            <p>
              <Link href={"/"}>Accueil</Link>
            </p>
            <p>
              <Link href={"/categories"}>Catégories</Link>
            </p>
            <p>
              <Link href={"/about"}>à propos</Link>
            </p>
          </div>
          <div className={styles.linksItem}>
            <h6>Contacts</h6>
            <div>
              <MapsIcon />
              <p>Bamako/Torokorobougou</p>
            </div>
            <div>
              <PhoneIcon />
              <p>+223 76 35 35 72</p>
            </div>
            <div>
              <MessageIcon />
              <p>apropham@yahoo.fr</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.separatorWrapper}>
        <div className={styles.separatorLine} />
        <div className={styles.socialWrapper}>
          <div>
            <Link target={"_blank"} href={"https://facebook.com/Mouleikaf"}>
              <div>
                <FacebookIcon invert />
              </div>
            </Link>
          </div>
          <div>
            <Link target={"_blank"} href={"https://www.tiktok.com/@dagaba14"}>
              <div>
                <TikTokIcon invert />
              </div>
            </Link>
          </div>
          <div>
            <Link
              target={"_blank"}
              href={"https://www.youtube.com/@pharmacopeedagaba3363"}
            >
              <div>
                <YouTubeIcon invert />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.separatorLine} />
      </div>

      <div className={styles.copyrightWrapper}>
        <h3>DAGABA, 2023. TOUS DROITS RÉSERVÉS.</h3>
        <h3>DESIGN & DEVELOPED BY YOBOO STUDIO.</h3>
      </div>
    </div>
  );
};

export default Footer;
