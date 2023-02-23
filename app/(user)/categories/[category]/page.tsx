import Image from "next/image";

import { getSingleCategory } from "@/sanity/fetch";

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

export const revalidate = 1200;

export default async function Category({ params: { category } }: Route) {
  const singleCategory: Category = await getSingleCategory({ category });

  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div>
          <Image priority={true} src={HeroImage} alt="category image" />
        </div>
        <h3>{singleCategory.name}</h3>
        <span className={styles.numberOfStock}>
          +{singleCategory.number_of_stock} remèdes
        </span>
        <p>{singleCategory.description}</p>
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
