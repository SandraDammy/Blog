"use client";
import React from "react";
import Styles from "../../navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  item: {
    path: string;
    title: string;
  };
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${Styles.navLink} ${pathName === item.path && Styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
