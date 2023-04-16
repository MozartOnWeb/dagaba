"use client";

import styles from "./styles.module.css";

type Props = {
  id: string;
};

export const YoutubeIframe = ({ id }: Props) => {
  return (
    <iframe
      className={styles.iframe}
      width="560"
      height="315"
      frameBorder="0"
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};
