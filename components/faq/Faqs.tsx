"use client";

import React, { useState } from "react";

import styles from "./styles.module.css";

import { ExpandArrowIcon, CloseArrowIcon } from "@/public/assets/icons";

const faqsArray = [
  {
    id: 0,
    headline: "Qu'est ce que Dagaba ?",
    content:
      "Dagaba Pharmacopée est une entreprise spécialisée dans les remèdes naturels à base de plantes, inspirés des traditions de la pharmacopée africaine. Nous proposons une vaste gamme de produits pour améliorer la santé et le bien-être, y compris des remèdes pour la digestion, la santé cardiaque, la santé sexuelle, les maladies des organes internes, et bien plus encore.",
  },
  {
    id: 1,
    headline: "Comment puis-je me procurer les médicaments ?",
    content:
      "Vous pouvez facilement vous procurer les médicaments de Dagaba Pharmacopée en vous rendant dans notre pharmacie située à Torokorobougou. Nous avons une équipe dévouée de professionnels de la santé qui peuvent vous aider à trouver les produits les plus adaptés à vos besoins.",
  },
  {
    id: 3,
    headline: "Vos méthodes de créations sont-elles scientifiques ?",
    content:
      "Chez Pharmacopée Dagaba, nous croyons fermement en l'importance de la recherche scientifique pour la création de nos remèdes naturels à base de plantes. Nous suivons les normes les plus élevées en matière de contrôle de la qualité et de la sécurité pour nos ingrédients et nos produits finis.",
  },
  {
    id: 4,
    headline: "Quelles sont les maladies que vos traitements couvrent?",
    content:
      "Nous offrons une gamme de remèdes naturels à base de plantes pour aider à traiter une variété de maladies et de troubles de santé. Nos produits peuvent aider à améliorer la santé générale, la santé digestive, la santé cardiaque, la santé sexuelle, la santé des articulations, la santé respiratoire et plus encore. ",
  },
];

function Faqs() {
  const [expandedQuestion, setExpandedQuestion] = useState<string>("");

  const handleExpand = (question: string) => {
    if (expandedQuestion === question) {
      setExpandedQuestion("");
    } else {
      setExpandedQuestion(question);
    }
  };

  return (
    <div className={styles.faqWrapper}>
      {faqsArray.map((item, index) => (
        <div
          onClick={() => handleExpand(item.headline)}
          className={styles.singleFaqWrapper}
          key={index}
        >
          <div>
            <h6>{item.headline}</h6>
            <div>
              {expandedQuestion === item.headline ? (
                <CloseArrowIcon />
              ) : (
                <ExpandArrowIcon />
              )}
            </div>
          </div>

          {expandedQuestion === item.headline && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Faqs;
