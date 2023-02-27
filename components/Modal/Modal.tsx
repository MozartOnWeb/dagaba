import styles from "./styles.module.css";

import { useModal } from "@/stores/ModalStore";

import { CloseIcon } from "@/public/assets/icons";

const Modal = () => {
  const closeModal = useModal((state) => state.closeModal);

  return (
    <main className={styles.main}>
      <section className={styles.contentWrapper}>
        <header>
          <h6>Maladies des organes internes</h6>
          <CloseIcon onClick={() => closeModal()} />
        </header>
        <div className={styles.paragraphContainer}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque odio
            cumque mollitia, deserunt dolorem nemo magnam beatae quos quasi
            necessitatibus? Incidunt ea sunt tempore odio nulla unde accusantium
            quo alias, harum veniam iste omnis, reprehenderit suscipit est culpa
            commodi hic.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Modal;
