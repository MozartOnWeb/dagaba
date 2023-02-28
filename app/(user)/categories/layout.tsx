import { ProductItem } from "@/components/productItem/ProductItem";
import { UsefulFact } from "@/components/usefulFact/UsefulFact";

import {
  getRecentMedications,
  getFeaturedMedications,
  getHelpfulInfos,
} from "@/sanity/fetch";

import styles from "./styles.module.css";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const recentMedications: Medication[] = await getRecentMedications();
  const featuredMedications: Medication[] = await getFeaturedMedications();
  const helpfulInfos: HelpfulInfo[] = await getHelpfulInfos();

  return (
    <section>
      {children}
      <div className={styles.layout}>
        {/* RECENTLY ADDED */}
        <h4>Récemment ajoutés</h4>
        <div
          className={
            recentMedications.length <= 3
              ? styles.productContainer2
              : styles.productContainer
          }
        >
          {recentMedications.map((item, index) => (
            <ProductItem
              name={item.name}
              image={item.image}
              href={item.slug}
              key={item.name}
            />
          ))}
        </div>

        {/* FEATURED PRODUCT */}
        {featuredMedications.length > 0 && (
          <>
            <h4 className={styles.secondH4}>Produits phares</h4>
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
          </>
        )}

        {/* USEFUL FACT*/}
        <UsefulFact helpfulInfos={helpfulInfos} />
      </div>
    </section>
  );
}
