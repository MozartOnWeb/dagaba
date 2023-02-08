"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>DAGABA</div>

      {/* hamburger */}
      <div className={styles.hamburger}>
        <HamburgerIcon />
      </div>
      {/* nav links */}
      <ul className={styles.links}>
        {routes.map((route) => (
          <li key={route.id}>
            <Link
              className={pathname === route.path ? styles.active : ""}
              href={route.path}
            >
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.separator} />
    </nav>
  );
};

export default NavBar;
