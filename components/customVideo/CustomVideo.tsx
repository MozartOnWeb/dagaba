"use client";

import { useRef, useState } from "react";

import { PlayVideoIcon, PauseVideoIcon } from "@/public/assets/icons";

import styles from "./styles.module.css";

const CustomVideo = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    const video: any = videoRef.current;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div onClick={handlePlay} className={styles.videoContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        src={
          "https://firebasestorage.googleapis.com/v0/b/ikaziccsv.appspot.com/o/video.mp4?alt=media&token=7d8381f9-9120-4a66-9326-8f90993c7d83"
        }
        controls={true}
        autoPlay={false}
      />
      <div>{playing ? <PauseVideoIcon /> : <PlayVideoIcon />}</div>
    </div>
  );
};

export default CustomVideo;
