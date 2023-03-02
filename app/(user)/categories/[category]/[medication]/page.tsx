import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

import { getMedication } from "@/sanity/fetch";

import ScrollUp from "@/lib/ScrollUp";
import styles from "./styles.module.css";

const getCurrentMedication = async (medication: string) => {
  const currentMedication: Medication = await getMedication({ medication });

  return currentMedication;
};

export async function generateMetadata({ params }: Route): Promise<Metadata> {
  const medication = await getCurrentMedication(params.medication);

  const { name, description } = medication;

  return {
    title: name,
    description,
  };
}

export default async function Product({ params }: Route) {
  const medication = await getCurrentMedication(params.medication);

  return (
    <main>
      <ScrollUp />
      <section className={styles.main}>
        <section className={styles.imageWrapper}>
          <div>
            <Image
              priority={true}
              width={700}
              height={700}
              src={medication.image}
              alt={`${medication.name} image`}
            />
          </div>
        </section>

        <section className={styles.infosWrapper}>
          <div className={styles.infosHeader}>
            <h2>{medication.name}</h2>
            <p>{medication.description}</p>
          </div>

          <div className={styles.singleInfosContainer}>
            <div>
              <h4>Composition</h4>
              <p>{medication.composition}</p>
            </div>
            <div>
              <h4>Posologie</h4>
              <p>{medication.posologie}</p>
            </div>
            <div>
              <h4>Présentation</h4>
              <p>{medication.presentation}</p>
            </div>
          </div>

          <div className={styles.categoriesWrapper}>
            <h4>Catégories</h4>
            <div>
              {medication.categories.map((category) => (
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
