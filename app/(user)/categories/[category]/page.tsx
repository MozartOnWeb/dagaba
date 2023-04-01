import Image from "next/image";
import { Metadata } from "next";
import { getSingleCategory, getCategoryMedications } from "@/sanity/fetch";
import styles from "./styles.module.css";
import { ProductItem } from "@/components/productItem/ProductItem";

const getCurrentCategory = async (category: string) => {
  const currentCategory: Category = await getSingleCategory({ category });

  return currentCategory;
};

export async function generateMetadata({ params }: Route): Promise<Metadata> {
  const category = await getCurrentCategory(params.category);

  const { name, description } = category;

  return {
    title: name,
    description,
  };
}

export const revalidate = 80;

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
          <Image
            priority={true}
            src={singleCategory.image}
            alt="category image"
            width={1000}
            height={1000}
          />
        </div>
        <h3>{singleCategory.name}</h3>
        <span className={styles.numberOfStock}>
          +{singleCategory.number_of_stock} remèdes
        </span>
        <p>{singleCategory.description}</p>
      </section>

      {/* MEDICATIONS SECTION */}
      <section className={styles.categories}>
        <h4>Médicaments</h4>
        <div
          className={
            medications.length <= 3
              ? styles.productContainer2
              : styles.productContainer
          }
        >
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
