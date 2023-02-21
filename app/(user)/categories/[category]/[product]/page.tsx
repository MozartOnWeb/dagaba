import Link from "next/link";
import Image from "next/image";

import ScrollUp from "@/lib/ScrollUp";

import styles from "./styles.module.css";

import ProductImage from "@/public/images/1.jpg";

export const metadata = {
  title: "Desma Tisane",
  description: "Ce qu'il faut savoir sur DAGABA",
};

const productInfos = [
  {
    headline: "Composition",
    content:
      "100% Extrait des plantes naturelles et leurs racines médicinales.",
  },
  {
    headline: "Posologie",
    content:
      "Prendre un sachet unidose « fois par jour après avoir bien mangé Matin, Midi et Soir avant 17 heures",
  },
  {
    headline: "présentation",
    content: "21 Sachets unidose de 10grs.",
  },
];

const categories = [
  {
    name: "Maladies Pulmonaires",
  },
  {
    name: "Paludisme",
  },
  {
    name: "Gastro",
  },
  {
    name: "Organes Internes",
  },
];

export default function Product() {
  return (
    <main>
      <ScrollUp />
      <section className={styles.main}>
        <section className={styles.imageWrapper}>
          <Image src={ProductImage} alt={`product image`} />
        </section>

        <section className={styles.infosWrapper}>
          <div className={styles.infosHeader}>
            <h2>Desma Tisane</h2>
            <p>
              Contre les Inflammations broncho pulmonaire, Toux Chronique,
              Asthme, Essoufflement, Gène Respiratoire.
            </p>
          </div>

          <div className={styles.singleInfosContainer}>
            {productInfos.map((product) => (
              <div key={product.headline}>
                <h4>{product.headline}</h4>
                <p>{product.content}</p>
              </div>
            ))}
          </div>

          <div className={styles.categoriesWrapper}>
            <h4>Catégories</h4>
            <div>
              {categories.map((category) => (
                <Link key={category.name} href={`/categories/${category.name}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* SEPARATOR */}
      <div className={styles.sectionSeparator}>
        <div />
        <h4>DAGABA, Essayer c’est déjà réussir !</h4>
        <div />
      </div>
    </main>
  );
}
