"use client";

import { useEffect } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHamburgerStore } from "@/stores/useHamburgerStore";

import { HamburgerMenu } from "../hamburgerMenu/HamburgerMenu";

import { HamburgerIcon } from "@/public/assets/icons";

import styles from "./nav.module.css";

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

const NavBar = () => {
  let pathname = usePathname() || "/";
  if (pathname.includes("/categories/")) {
    pathname = "/categories";
  }

  const isOpen = useHamburgerStore((state) => state.isOpen);
  const openHamburger = useHamburgerStore((state) => state.openHamburger);

  useEffect(() => {
    isOpen
      ? document.body.classList.add("active-hamburger")
      : document.body.classList.remove("active-hamburger");
  });

  return (
    <>
      {isOpen && <HamburgerMenu />}
      <nav className={styles.nav}>
        <div className={styles.logo}>DAGABA</div>

        {/* hamburger */}
        <div onClick={() => openHamburger()} className={styles.hamburger}>
          <HamburgerIcon />
        </div>
        {/* nav links */}
        <div className={styles.links}>
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
        <div className={styles.separator} />
      </nav>
    </>
  );
};

export default NavBar;
