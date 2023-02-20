import Image from "next/image";

import styles from "./styles.module.css";

import LogoImage from "@/public/images/1.jpg";

export const StudioLogo = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={LogoImage} alt="logo" />
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};
