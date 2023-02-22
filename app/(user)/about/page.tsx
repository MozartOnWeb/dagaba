import Image from "next/image";

import styles from "./styles.module.css";

import img from "@/public/images/4.jpg";

export const metadata = {
  title: "A Propos",
  description: "Ce qu'il faut savoir sur DAGABA",
};

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div>
          <h2>
            La santé, la propriété, la paix, le développement ont toujours été
            l’objectif constamment visé par APROPHAM DAGABA
          </h2>
          <div></div>
        </div>
        <Image src={img} alt="hero" />
      </section>
    </main>
  );
}
