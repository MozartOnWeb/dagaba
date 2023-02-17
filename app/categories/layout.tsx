import { ProductItem } from "@/components/productItem/ProductItem";
import { UsefulFact } from "@/components/usefulFact/UsefulFact";

import styles from "./styles.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <div className={styles.layout}>
        {/* RECENTLY ADDED */}
        <h4>Récemment ajoutés</h4>
        <div className={styles.productContainer}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>

        {/* FEATURED PRODUCT */}
        <h4 className={styles.secondH4}>Produits phares</h4>
        <div className={styles.productContainer}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>

        {/* USEFUL FACT*/}
        <UsefulFact />
      </div>
    </section>
  );
}
