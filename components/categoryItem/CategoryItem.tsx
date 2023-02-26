import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import Product from "@/public/images/package.png";

type Props = {
  href: string;
  name: string;
};

export const CategoryItem = ({ href, name }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Link href={href}>
        <div className={styles.container}>
          <div>
            <Image width={700} height={700} src={Product} alt="product image" />
          </div>
        </div>
        <p>{name}</p>
      </Link>
    </div>
  );
};
