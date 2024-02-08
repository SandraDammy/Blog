"use client";
import React, { useState } from "react";
import Styles from "../navbar.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  //useState hook
  const [open, setOpen] = useState(false);

  // Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={Styles.container}>
      <div className={Styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={Styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
     {open ? (
       <Image
       className={Styles.menuClose}
       src="/close.png"
       alt=""
       width={30}
       height={30}
       onClick={() => setOpen(false)}
     />
     ): (
      <Image
      className={Styles.menuOpen}
      src="/menu.png"
      alt=""
      width={30}
      height={30}
      onClick={() => setOpen(true)}
    />
     )}
      {open && (
        <div className={Styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
