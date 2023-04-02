import styles from "./styles.module.css";

import Image from "next/image";

import { getAllCategories } from "@/sanity/fetch";
import { CategoryItem } from "@/components/categoryItem/CategoryItem";

import HeroImage from "@/public/images/1.jpg";

export const metadata = {
  title: "Catégories",
  description: "Les catégories de produits de DAGABA",
};

export const revalidate = 600;

export default async function Categories() {
  const categories: Category[] = await getAllCategories();

  return (
    <main className={styles.main}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div>
          <Image
            width={700}
            height={700}
            priority={true}
            src={HeroImage}
            placeholder="blur"
            blurDataURL={"../"}
            alt="dagaba catégories image"
          />
        </div>
        <h3>
          Pharmacopée Dagaba, chez <span>Mouleikafouf</span>.
        </h3>
        <span className={styles.numberOfStock}>+2000 remèdes</span>
        <p>
          Chez Pharmacopée Dagaba, notre mission est de fournir des remèdes
          naturels de haute qualité à base de plantes, enracinés dans les
          traditions ancestrales de la pharmacopée africaine. Nous sommes fiers
          d&apos;être situés au cœur du Mali, où nous avons servi notre
          communauté locale avec passion et engagement depuis de nombreuses
          années.
        </p>
      </section>

      {/* CATEGORIES SECTION */}
      <section className={styles.categories}>
        <h4>Catégories</h4>
        <div className={styles.productContainer}>
          {categories &&
            categories.map(({ name, slug, image }) => (
              <CategoryItem
                key={name}
                name={name}
                image={image}
                href={`/categories/${slug}`}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
