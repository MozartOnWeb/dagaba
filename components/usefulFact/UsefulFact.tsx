"use client";

import { useState, useEffect } from "react";

import styles from "./styles.module.css";

import { useModal } from "@/stores/ModalStore";

import Modal from "../Modal/Modal";

type ContentProps = {
  headline: string;
  content: [];
};

export const UsefulFact = ({
  helpfulInfos,
}: {
  helpfulInfos: HelpfulInfo[];
}) => {
  const [content, setContent] = useState<ContentProps>({
    headline: "",
    content: [],
  });

  const isOpen = useModal((state) => state.isOpen);
  const openModal = useModal((state) => state.openModal);

  const setModalContent = (headline: string, content: []) => {
    openModal();
    setContent({ headline: headline, content: content });
  };

  useEffect(() => {
    isOpen
      ? document.body.classList.add("active-modal")
      : document.body.classList.remove("active-modal");
  });

  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <h5>Informations utiles</h5>
        <p>
          Une meilleure connaissance des maladies peut être très utiles pour la
          prévention et le traitement. Quelques explications du Pr Mouleikafou!
        </p>
      </div>

      <div className={styles.infosWrapper}>
        {helpfulInfos.map((info, index) => (
          <div key={index}>
            <h6>
              {info.headline}
              <span>.</span>
            </h6>
            <p className={styles.intro}>{info.introduction}</p>
            <button
              onClick={() => setModalContent(info.headline, info.content)}
            >
              en savoir plus
            </button>
          </div>
        ))}
      </div>
      {isOpen && (
        <Modal headline={content.headline} content={content.content} />
      )}
    </section>
  );
};
