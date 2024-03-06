import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full h-24 bg-black flex justify-center items-center mt-12">
      <Link href={"https://www.linkedin.com/in/maxime-pr%C3%A9vot-b286ba250/"}>
        <p className="text-white text-md underline cursor-pointer">
          Réalisé par Maxime Prévot - tous droits réservés ®
        </p>
      </Link>
    </footer>
  );
}

export default Footer;
