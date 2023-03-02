"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useHamburgerStore } from "@/stores/useHamburgerStore";

import { CloseIcon } from "@/public/assets/icons";

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
      </div>
    </div>
  );
};
