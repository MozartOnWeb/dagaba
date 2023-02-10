import Image from "next/image";
import Link from "next/link";

import styles from "./product.module.css";

import Product from "@/public/images/package.png";

export const ProductItem = () => {
  return (
    <div className={styles.wrapper}>
      <Link href={"#"}>
        <div className={styles.container}>
          <Image src={Product} alt="product image" />
        </div>
        <p>HEPA GELLULES</p>
      </Link>
    </div>
  );
};
