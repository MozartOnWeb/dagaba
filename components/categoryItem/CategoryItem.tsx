import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import Product from "@/public/images/package.png";

type Props = {
  href: string;
  name: string;
  image?: string;
};

export const CategoryItem = ({ href, name, image }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Link href={href}>
        <div className={styles.container}>
          <Image
            width={900}
            height={900}
            src={image ? image : Product}
            alt="product image"
          />
        </div>
        <p>{name}</p>
      </Link>
    </div>
  );
};
