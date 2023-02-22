import Image from "next/image";

import styles from "./styles.module.css";

import { YoutubeIframe } from "@/components/YoutubeIframe/YoutubeIframe";

import img from "@/public/images/4.jpg";

export const metadata = {
  title: "A Propos",
  description: "Ce qu'il faut savoir sur DAGABA",
};

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.headerInfos}>
          <h2>
            <span>La Santé</span>, <span>La Paix</span>,{" "}
            <span>Le Développement</span> ont toujours été l’objectif
            constamment visé par <span>APROPHAM DAGABA</span>.
          </h2>
        </div>
        <div className={styles.imageWrapper}>
          <Image priority src={img} alt={"img"} />
        </div>
      </section>

      <section className={styles.bodyInfos}>
        {/* BIOGRAPHIE SECTION */}
        <div className={styles.bioCreation}>
          <div className={styles.left}>
            <h4>Biographie de M. Mouleikafou.</h4>
          </div>

          <div className={styles.right}>
            <p>
              Je suis un maure originaire de <span>nyamina</span> d’où mes
              grands-parents se sont installés. Je fus mon école coranique
              auprès de mes <span>grands-parents</span> (grand-père et
              grand-mère), qui connaissaient beaucoup et leurs pratiques étaient
              au besoin, pas comme aujourd’hui, se sont des parents qui n’ont
              pas voulu mourir avec leur bibliothèque, c’est avec eux que j’ai
              beaucoup appris, sur les sciences de la vie. En complément j’ai
              rencontré plusieurs maîtres{" "}
              <span>
                (école coranique, traditheurapeute, mystique et science divine)
              </span>
              . Je prodigue, mes premiers soins avec mes entourages, la
              meilleure publicité est de bouche à oreille, c’est comme cela que
              j’ai été contacté, par des gens au sujet de quelques maladies de
              ma spécialité <span>( maladies IST, MST)</span> surtout les
              maladies sexuelles{" "}
              <span>(impuissance sexuelle, éjaculation précoce)</span> qui est
              aujourd’hui une maladie largement répandue dans le monde entier.
            </p>
          </div>
        </div>

        {/* CREATION SECTION */}
        <div className={styles.bioCreation}>
          <div className={styles.left}>
            <h4>Création de APROPHAM.</h4>
          </div>

          <div className={styles.right}>
            <p>
              Officiellement fondée en <span>1999</span>, après l’obtention
              d’une carte professionnelle délivrée par{" "}
              <span>l’INRSP (DMT)</span>, j’ai mis au point de nombreux remèdes
              traditionnels en perfectionnant leurs usages{" "}
              <span>
                (tisanes, sirops, gélules, poudres fines dans des emballages
                biens propres)
              </span>{" "}
              . Vu le décret n° 94-282-P-RM du 15 août 1994
              portant,l’organisation de l’ouverture de cabinet privé de
              consultation et de soins traditionnels, herboristerie et d’une
              unité de production de médicaments traditionnels améliorés{" "}
              <span>(MTA)</span>. J’obtiens une autorisation de l’exercice privé
              des professions sanitaires n° 02 0464 / MS-SG du ministère de la
              santé. Vu la loi n° 04-038 du 05 août 2004 relatif aux
              associations j’obtiens une récipicé de déclaration d’association
              du 11 novembre 2004 n° 0002/G-D par le gouverneur du district de
              Bamako <span>(APROPHAM)</span>. Le 17 décembre 2004 LA NATURE AUX
              BONS SOINS DES HUMAINS obtient un accord cadre (ONG){" "}
              <span>
                Association pour la Promotion des Pharmacopées du Mali
                (APROPHAM)
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CITATION SECTION */}
      <blockquote>
        <span>&lsaquo;&lsaquo;</span> Les difficultés sont faites pour être
        surmonter. La pensée, la méditation et la réflexion doivent précéder
        l’action, agir comme si elle venait d’en haut. Il faut faire confiance
        aux autres, l’humanité dans sa grande majorité, désire le triomphe du
        bien, Dieu bénit le dévouement pour la cause du prochain, c’est le
        devoir d’un tradi-praticien. <span>&rsaquo;&rsaquo;</span>
      </blockquote>

      {/* SEPARATOR */}
      <div className={styles.sectionSeparator}>
        <div />
        <h4>DAGABA, Essayer c’est déjà réussir !</h4>
        <div />
      </div>

      {/* INTERVIEWS */}
      <section className={styles.interviewsWrapper}>
        <h5>INTERVIEWS</h5>
        <div className={styles.interviewsContainer}>
          <div className={styles.singleInterview}>
            <YoutubeIframe url="https://www.youtube-nocookie.com/embed/jl5uWkYJSCY" />
          </div>
          <div className={styles.singleInterview}>
            <YoutubeIframe url="https://www.youtube-nocookie.com/embed/jl5uWkYJSCY" />
          </div>
          <div className={styles.singleInterview}>
            <YoutubeIframe url="https://www.youtube-nocookie.com/embed/jl5uWkYJSCY" />
          </div>
          <div className={styles.singleInterview}>
            <YoutubeIframe url="https://www.youtube-nocookie.com/embed/jl5uWkYJSCY" />
          </div>
        </div>
      </section>
    </main>
  );
}
