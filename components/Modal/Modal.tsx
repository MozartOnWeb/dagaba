import styles from "./styles.module.css";

import { useModal } from "@/stores/ModalStore";

import { CloseIcon } from "@/public/assets/icons";

type Props = {
  headline: string;
  content: string;
};

const Modal = () => {
  const closeModal = useModal((state) => state.closeModal);

  function preventScroll(event: Event) {
    event.preventDefault();
  }

  const closeModalHandler = () => {
    closeModal();
    document.body.removeEventListener("touchmove", preventScroll);
    document.body.removeEventListener("wheel", preventScroll);
  };

  return (
    <main className={styles.main}>
      <section className={styles.contentWrapper}>
        <header>
          <h6>Maladies des organes internes</h6>
          <CloseIcon onClick={() => closeModalHandler()} />
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
