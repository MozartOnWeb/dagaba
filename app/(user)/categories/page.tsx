import Image from "next/image";

import styles from "./styles.module.css";

import { CategoryItem } from "@/components/categoryItem/CategoryItem";

import HeroImage from "@/public/images/1.jpg";

export const metadata = {
  title: "Catégories",
  description: "Les catégories de produits de DAGABA",
};

export default function Categories() {
  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div>
          <Image
            priority={true}
            src={HeroImage}
            alt="dagaba catégories image"
          />
        </div>
        <h3>
          Pharmacopée Dagaba, chez <span>Mouleikafouf</span>.
        </h3>
        <span className={styles.numberOfStock}>+2000 remèdes</span>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </section>

      {/* CATEGORIES SECTION */}
      <section className={styles.categories}>
        <h4>Catégories</h4>
        <div className={styles.productContainer}>
          <CategoryItem href="/categories/category" />
          <CategoryItem href="/categories/category" />
          <CategoryItem href="/categories/category" />
          <CategoryItem href="/categories/category" />
          <CategoryItem href="/categories/category" />
          <CategoryItem href="/categories/category" />
        </div>
      </section>
    </main>
  );
}