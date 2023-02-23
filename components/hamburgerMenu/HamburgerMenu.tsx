"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <div className={styles.main}>
      {routes.map((route) => (
        <Link
          key={route.id}
          className={pathname === route.path ? styles.active : ""}
          href={route.path}
        >
          {route.title}
        </Link>
      ))}
    </div>
  );
};
