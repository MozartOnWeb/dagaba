import Image from "next/image";

import styles from "./styles.module.css";

import { ProductItem } from "@/components/productItem/ProductItem";

import HeroImage from "@/public/images/1.jpg";

export const metadata = {
  title: "Catégorie",
  description: "Maladies des organes interne",
};

const DummyLinks = [
  {
    href: "1",
  },
  {
    href: "2",
  },
  {
    href: "3",
  },
  {
    href: "4",
  },
  {
    href: "5",
  },
  {
    href: "6",
  },
  {
    href: "7",
  },
  {
    href: "8",
  },
];

export default function Category() {
  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div>
          <Image priority={true} src={HeroImage} alt="category image" />
        </div>
        <h3>Maladies des organes internes.</h3>
        <span className={styles.numberOfStock}>+350 remèdes</span>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </section>

      {/* CATEGORIES SECTION */}
      <section className={styles.categories}>
        <h4>Médicaments</h4>
        <div className={styles.productContainer}>
          {DummyLinks.map((item, index) => (
            <ProductItem key={index} />
          ))}
        </div>
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
