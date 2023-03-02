import styles from "./styles.module.css";

import { PortableTextComponents } from "@portabletext/react";

export const RichTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
  },
  marks: {
    strong: ({ children }) => <span className={styles.strong}>{children}</span>,
  },
};
