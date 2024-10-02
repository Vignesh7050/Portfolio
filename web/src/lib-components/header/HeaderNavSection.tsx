import Link from "next/link";
import { navItems } from "@/utils/navItems";
import style from "./header.module.css";
import React from "react";
import { KeyValuePair } from "@/utils";

export const HeaderNavSection = () => {
  return (
    <nav className={style.navbarContainer}>
      <ul>
        {navItems.map((item: KeyValuePair) => {
          return (
            <li key={item.id}>
              <Link href={item.path}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
