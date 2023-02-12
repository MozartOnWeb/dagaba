import Image from "next/image";
import Link from "next/link";

import CustomVideo from "@/components/customVideo/CustomVideo";
import Faqs from "@/components/faq/Faqs";
import { ProductItem } from "@/components/homeProductItem/ProductItem";

import styles from "./home.module.css";

import {
  FacebookIcon,
  YouTubeIcon,
  TikTokIcon,
  BookIcon,
  CalendarIcon,
  HealthCareIcon,
  CheckIcon,
  SeeMoreArrowIcon,
} from "@/public/assets/icons";

import firstImage from "../public/images/1.jpg";
import secondImage from "../public/images/2.jpg";

export const metadata = {
  title: "Accueil",
  description: "Bienvenu sur APROPHAM DAGABA",
};

const socialNetwork = [
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: FacebookIcon,
  },
  {
    name: "TikTok",
    link: "https://tiktok.com",
    Icon: TikTokIcon,
  },
  {
    name: "YouTube",
    link: "https://youtube.com",
    Icon: YouTubeIcon,
  },
];

const whyUs = [
  {
    Icon: BookIcon,
    title: "+25 ans d’expérience",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    Icon: CalendarIcon,
    title: "24/7 service disponible",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    Icon: HealthCareIcon,
    title: "+2000 remèdes",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const howWeHelp = [
  {
    title: "Consultations et suivis",
  },
  {
    title: "Concoction de médicaments",
  },
  {
    title: "Inventaire avec +2000 remèdes",
  },
];

export default function Home() {
  return (
    <main>
      <main className={styles.main}>
        <section>
          <h1>
            APROPHAM, <br /> la nature aux bons soins des humains
            <span>.</span>
          </h1>
          <p>
            Créer en 1994, APROPHAM produit des médicaments à base de plantes à
            100%. Toute la chaîne de production est gérée par APROPHAM de la
            récolte des plantes à l&apos;emballage du médicament finals
            <span>.</span>
          </p>
          <div className={styles.socialWrapper}>
            <h3>réseaux sociaux</h3>
            <div className={styles.socialContainer}>
              {socialNetwork.map((social) => (
                <div key={social.name}>
                  <div>
                    <Link target={"_blank"} href={social.link}>
                      <social.Icon />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.rightSection}>
          <div>
            <Image src={firstImage} alt="DAGABA welcome image" />
          </div>
        </section>
      </main>

      {/* SEPARATOR */}
      <div className={styles.sectionSeparator}>
        <div />
        <h4>DAGABA, Essayer c’est déjà réussir !</h4>
        <div />
      </div>

      {/* PRESENTATION */}
      <section className={styles.presentation}>
        <h4>Présentation</h4>
        <p>
          DAGABA possède aujourd’hui plus de 2000 remèdes au niveau de son
          cabinet et les recherches continuent. La santé, la propriété, la paix,
          le développement ont toujours été l’objectif constamment visé par
          APROPHAM DAGABA.
        </p>
        <div>
          <CustomVideo />
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className={styles.whyUsWrapper}>
        <h4>Pourquoi nous choisir ?</h4>
        <div>
          {whyUs.map((item) => (
            <div className={styles.whyUsItem} key={item.title}>
              <item.Icon />
              <h5>
                {item.title}
                <span>.</span>
              </h5>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENT ON VOUS AIDE */}
      <section className={styles.howWeHelpWrapper}>
        <div className={styles.imageWrapper}>
          <Image src={secondImage} alt="Dagaba doctor" />
        </div>

        <div className={styles.helpWrapper}>
          <h4>Comment dagaba aide les patients ?</h4>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <div className={styles.checkBoxWrapper}>
            {howWeHelp.map((item) => (
              <div className={styles.checkBoxItem} key={item.title}>
                <div>
                  <CheckIcon />
                </div>
                <h6>{item.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST CATEGORIES WRAPPER */}
      <section className={styles.bestCategories}>
        <h4>Produits phares</h4>
        <div className={styles.productContainer}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>

        <Link className={styles.seeMoreBtn} href={"/categories"}>
          <p>en voir plus</p>
          <div>
            <SeeMoreArrowIcon />
          </div>
        </Link>
      </section>

      {/* BEST CATEGORIES WRAPPER */}

      <section className={styles.faqWrapper}>
        <h4>Foire aux questions</h4>
        <Faqs />
      </section>
    </main>
  );
}
