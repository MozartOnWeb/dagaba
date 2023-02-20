import Link from "next/link";

import styles from "./styles.module.css";

import { GoBackArrowIcon } from "@/public/assets/icons";

export const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className={styles.goToHomeWrapper}>
        <Link className={styles.goToHomeLink} href={"/"}>
          <GoBackArrowIcon />
          Retour à l&apos;accueil
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};
