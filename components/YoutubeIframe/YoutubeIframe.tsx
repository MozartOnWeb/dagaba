"use client";

import styles from "./styles.module.css";

type Props = {
  url: string;
};

export const YoutubeIframe = ({ url }: Props) => {
  return (
    <iframe
      className={styles.iframe}
      width="560"
      height="315"
      frameBorder="0"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
