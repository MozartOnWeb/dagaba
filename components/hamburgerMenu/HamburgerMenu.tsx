"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useHamburgerStore } from "@/stores/useHamburgerStore";

import {
  CloseIcon,
  FacebookIcon,
  TikTokIcon,
  YouTubeIcon,
  MapsIcon,
  PhoneIcon,
  MessageIcon,
} from "@/public/assets/icons";

import styles from "./styles.module.css";

const routes = [
  {
    id: 0,
    title: "Accueil",
    path: "/",
  },
  {
    id: 1,
    title: "Catégories",
    path: "/categories",
  },
  {
    id: 2,
    title: "à Propos",
    path: "/about",
  },
];

export const HamburgerMenu = () => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/categories/")) {
    pathname = "/categories";
  }

  const closeHamburger = useHamburgerStore((state) => state.closeHamburger);

  return (
    <div onClick={() => closeHamburger()} className={styles.main}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.container}
      >
        <CloseIcon fill="#fff" onClick={() => closeHamburger()} />
        <div className={styles.linksContainer}>
          {routes.map((route) => (
            <Link
              onClick={() => closeHamburger()}
              key={route.id}
              className={pathname === route.path ? styles.active : ""}
              href={route.path}
            >
              {route.title}
            </Link>
          ))}
        </div>

        {/* CONTACT WRAPPER */}
        <div className={styles.contactWrapper}>
          <div>
            <MapsIcon />
            <p>Bamako/Torokorobougou</p>
          </div>
          <div>
            <PhoneIcon />
            <p>+223 76 35 35 72</p>
          </div>
          <div>
            <MessageIcon />
            <p>apropham@yahoo.fr</p>
          </div>
        </div>

        {/* SOCIAL CONTAINER */}
        <div className={styles.socialWrapper}>
          <div className={styles.line} />
          <div className={styles.socialContainer}>
            <Link
              target={"_blank"}
              className={styles.singleSocial}
              href={"https://facebook.com/Mouleikaf"}
            >
              <div>
                <FacebookIcon />
              </div>
            </Link>
            <Link
              target={"_blank"}
              className={styles.singleSocial}
              href={"https://www.tiktok.com/@dagaba14"}
            >
              <div>
                <TikTokIcon />
              </div>
            </Link>
            <Link
              target={"_blank"}
              className={styles.singleSocial}
              href={"https://www.youtube.com/@pharmacopeedagaba3363"}
            >
              <div>
                <YouTubeIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
