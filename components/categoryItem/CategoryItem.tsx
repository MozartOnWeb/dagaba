import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import Product from "@/public/images/package.png";

export const CategoryItem = ({ href }: { href: string }) => {
  return (
    <div className={styles.wrapper}>
      <Link href={href}>
        <div className={styles.container}>
          <div>
            <Image src={Product} alt="product image" />
          </div>
        </div>
        <p>HEPA GELLULES</p>
      </Link>
    </div>
  );
};
