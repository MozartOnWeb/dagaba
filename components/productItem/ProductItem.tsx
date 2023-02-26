import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import Product from "@/public/images/package.png";

type Props = {
  href: string;
  name: string;
  image: string;
};

export const ProductItem = ({ href, name, image }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Link
        href={
          href ? `/categories/category/${href}` : "/categories/category/product"
        }
      >
        <div className={styles.container}>
          <div>
            <Image
              width={500}
              height={500}
              src={image ? image : Product}
              alt={`${name} image`}
            />
          </div>
        </div>
        <p>{name}</p>
      </Link>
    </div>
  );
};
