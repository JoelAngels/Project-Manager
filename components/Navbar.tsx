"use client";

import { navItems } from "@/constants/header";
import React from "react";

const Navbar = () => {
  return (
    <div className="gap-6">
      {navItems.map(({ name, href }) => (
        <a
          href={href}
          key={href}
          className="mr-6"
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {name}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
