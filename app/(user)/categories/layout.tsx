import { ProductItem } from "@/components/productItem/ProductItem";
import { UsefulFact } from "@/components/usefulFact/UsefulFact";

import styles from "./styles.module.css";

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
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
      <div className={styles.layout}>
        {/* RECENTLY ADDED */}
        <h4>Récemment ajoutés</h4>
        <div className={styles.productContainer}>
          {DummyLinks.map((item, index) => (
            <ProductItem href={item.href} key={index} />
          ))}
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
