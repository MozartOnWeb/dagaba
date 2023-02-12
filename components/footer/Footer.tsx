import Link from "next/link";

import styles from "./footer.module.css";

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
              <Link href={"#"}>Présentation</Link>
            </p>
            <p>
              <Link href={"#"}>Pourquoi nous choisir ?</Link>
            </p>
            <p>
              <Link href={"#"}>Catégories</Link>
            </p>
          </div>
          <div className={styles.linksItem}>
            <h6>Liens utiles</h6>
            <p>
              <Link href={"#"}>Accueil</Link>
            </p>
            <p>
              <Link href={"#"}>Catégories</Link>
            </p>
            <p>
              <Link href={"#"}>à propos</Link>
            </p>
          </div>
          <div className={styles.linksItem}>
            <h6>Contacts</h6>
            <div>
              <MapsIcon />
              <p>Badalabougou, Avenue OUA, P.27</p>
            </div>
            <div>
              <PhoneIcon />
              <p>+223 78437323 / 61344035</p>
            </div>
            <div>
              <MessageIcon />
              <p>mandjoudama@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.separatorWrapper}>
        <div className={styles.separatorLine} />
        <div className={styles.socialWrapper}>
          <div>
            <Link href={"https://facebook.com"}>
              <FacebookIcon invert />
            </Link>
          </div>
          <div>
            <Link href={"https://tiktok.com"}>
              <TikTokIcon invert />
            </Link>
          </div>
          <div>
            <Link href={"https://youtube.com"}>
              <YouTubeIcon invert />
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