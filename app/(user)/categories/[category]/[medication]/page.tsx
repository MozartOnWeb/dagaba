import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { getMedication } from "@/sanity/fetch";

import ScrollUp from "@/lib/ScrollUp";
import styles from "./styles.module.css";
import ProductImage from "@/public/images/1.jpg";

export default async function Product({ params: { medication } }: Route) {
  const singleMedication: Medication = await getMedication({ medication });

  return (
    <main>
      <ScrollUp />
      <section className={styles.main}>
        <section className={styles.imageWrapper}>
          <Image
            width={700}
            height={700}
            src={singleMedication.image}
            alt={`${singleMedication.name} image`}
          />
        </section>

        <section className={styles.infosWrapper}>
          <div className={styles.infosHeader}>
            <h2>{singleMedication.name}</h2>
            <PortableText value={singleMedication.description} />
          </div>

          <div className={styles.singleInfosContainer}>
            <div>
              <h4>Composition</h4>
              <p>{singleMedication.composition}</p>
            </div>
            <div>
              <h4>Posologie</h4>
              <p>{singleMedication.posologie}</p>
            </div>
            <div>
              <h4>Présentation</h4>
              <p>{singleMedication.presentation}</p>
            </div>
          </div>

          <div className={styles.categoriesWrapper}>
            <h4>Catégories</h4>
            <div>
              {singleMedication.categories.map((category) => (
                <Link key={category.slug} href={`/categories/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
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
