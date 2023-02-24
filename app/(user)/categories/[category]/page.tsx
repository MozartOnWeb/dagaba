import Image from "next/image";
import { getSingleCategory, getCategoryMedications } from "@/sanity/fetch";
import styles from "./styles.module.css";
import { ProductItem } from "@/components/productItem/ProductItem";
import HeroImage from "@/public/images/1.jpg";

export const metadata = {
  title: "Catégorie",
  description: "Maladies des organes interne",
};

export const revalidate = 1200;

export default async function Category({ params: { category } }: Route) {
  const singleCategory: Category = await getSingleCategory({ category });
  const medications: Medication[] = await getCategoryMedications({
    category,
  });

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
          {medications.map((item, index) => (
            <ProductItem
              image={item.image}
              name={item.name}
              href={item.slug}
              key={index}
            />
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
