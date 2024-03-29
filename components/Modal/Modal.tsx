import styles from "./styles.module.css";

import { PortableText } from "@portabletext/react";

import { useModal } from "@/stores/ModalStore";
import { CloseIcon } from "@/public/assets/icons";
import { RichTextComponents } from "../richTextComponents/RichTextComponents";

type Props = {
  headline: string;
  content: [];
};

const Modal = ({ content, headline }: Props) => {
  const closeModal = useModal((state) => state.closeModal);

  return (
    <main onClick={() => closeModal()} className={styles.main}>
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.contentWrapper}
      >
        <header>
          <h6>
            {headline}
            <span>.</span>
          </h6>
          <CloseIcon onClick={() => closeModal()} />
        </header>
        <div className={styles.paragraphContainer}>
          <PortableText value={content} components={RichTextComponents} />
        </div>
      </section>
    </main>
  );
};

export default Modal;
