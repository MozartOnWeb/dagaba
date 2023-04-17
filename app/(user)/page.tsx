import Image from "next/image";
import Link from "next/link";

import { getFeaturedMedications, getHomePageData } from "@/sanity/fetch";

import Faqs from "@/components/faq/Faqs";
import { ProductItem } from "@/components/productItem/ProductItem";

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

import firstImage from "@/public/images/1.jpg";
import secondImage from "@/public/images/2.jpg";
import { YoutubeIframe } from "@/components/YoutubeIframe/YoutubeIframe";

export const metadata = {
  title: "Accueil",
  description: "Bienvenu sur APROPHAM DAGABA",
};

const socialNetwork = [
  {
    name: "Facebook",
    link: "https://facebook.com/Mouleikaf",
    Icon: FacebookIcon,
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@dagaba14",
    Icon: TikTokIcon,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@pharmacopeedagaba3363",
    Icon: YouTubeIcon,
  },
];

const whyUs = [
  {
    Icon: BookIcon,
    title: "+25 ans d’expérience",
    content:
      "Nous sommes fiers de mettre à profit notre expérience de 25 ans en pharmacopée pour vous offrir des produits de qualité supérieure et des conseils personnalisés.",
  },
  {
    Icon: CalendarIcon,
    title: "24/7 service disponible",
    content:
      "Notre engagement envers vous ne s'arrête jamais - notre service est disponible 24/7 pour répondre à toutes vos questions et préoccupations en matière de santé.",
  },
  {
    Icon: HealthCareIcon,
    title: "+2000 remèdes",
    content:
      "Avec plus de 2000 remèdes à notre disposition, nous sommes en mesure de fournir des solutions sur mesure pour répondre à tous vos besoins en matière de santé.",
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

export const revalidate = 60;

export default async function Home() {
  const featuredMedications: Medication[] = await getFeaturedMedications();
  const homePageData: Home = await getHomePageData();

  const { helps_image, hero_image, presentation_video } = homePageData;

  return (
    <main>
      <main className={styles.main}>
        <section>
          <h1>
            DAGABA, <br /> la nature aux bons soins des humains
            <span>.</span>
          </h1>
          <p>
            Créer en 1994, APROPHAM DAGABA produit des médicaments à base de
            plantes à 100%. Toute la chaîne de production est gérée par APROPHAM
            de la récolte des plantes à l&apos;emballage du médicament finals
            <span>.</span>
          </p>
          <div className={styles.socialWrapper}>
            <h3>réseaux sociaux</h3>
            <div className={styles.socialContainer}>
              {socialNetwork.map((social) => (
                <Link target={"_blank"} href={social.link} key={social.name}>
                  <div>
                    <social.Icon />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.rightSection}>
          <div>
            <Image
              placeholder="blur"
              blurDataURL={hero_image}
              priority={true}
              src={hero_image ? hero_image : firstImage}
              alt="DAGABA welcome image"
              width={800}
              height={800}
            />
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
      <section id="presentation" className={styles.presentation}>
        <h4>Présentation</h4>
        <p>
          DAGABA possède aujourd’hui plus de 2000 remèdes au niveau de son
          cabinet et les recherches continuent. La santé, la propriété, la paix,
          le développement ont toujours été l’objectif constamment visé par
          APROPHAM DAGABA.
        </p>
        <div>
          <YoutubeIframe id={presentation_video} />
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section id="why-us" className={styles.whyUsWrapper}>
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
      <section id="how-we-help" className={styles.howWeHelpWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={helps_image ? helps_image : secondImage}
            alt="Dagaba doctor"
            width={700}
            height={700}
          />
        </div>

        <div className={styles.helpWrapper}>
          <h4>Comment Dagaba aide les patients ?</h4>
          <p>
            Notre équipe dévouée de professionnels de la santé travaille en
            étroite collaboration avec nos patients pour fournir des soins
            personnalisés et des conseils d&apos;experts en pharmacopée, pour
            aider à améliorer leur santé et leur qualité de vie.
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
      {featuredMedications.length > 0 && (
        <>
          <section className={styles.bestCategories}>
            <h4>Produits phares</h4>
            <div
              className={
                featuredMedications.length <= 3
                  ? styles.productContainer2
                  : styles.productContainer
              }
            >
              {featuredMedications.map((item) => (
                <ProductItem
                  name={item.name}
                  image={item.image}
                  href={item.slug}
                  key={item.name}
                />
              ))}
            </div>
            <Link className={styles.seeMoreBtn} href={"/categories"}>
              <p>en voir plus</p>
              <div>
                <SeeMoreArrowIcon />
              </div>
            </Link>
          </section>
        </>
      )}

      {/* BEST CATEGORIES WRAPPER */}

      <section className={styles.faqWrapper}>
        <h4>Foire aux questions</h4>
        <Faqs />
      </section>
    </main>
  );
}
