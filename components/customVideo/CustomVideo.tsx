"use client";

import { useRef } from "react";

import styles from "./styles.module.css";

const CustomVideo = () => {
  const videoRef = useRef(null);

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        src={
          "https://firebasestorage.googleapis.com/v0/b/ikaziccsv.appspot.com/o/video.mp4?alt=media&token=7d8381f9-9120-4a66-9326-8f90993c7d83"
        }
        controls={true}
        autoPlay={false}
      />
    </div>
  );
};

export default CustomVideo;
