import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center">
      <p className="text-sm md:text-base">
        © {year} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
