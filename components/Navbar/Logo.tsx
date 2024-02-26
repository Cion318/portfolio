import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      {/* Logo */}
      <div className="logo relative flex h-10 w-10 items-center justify-center font-clicker">
        <Link className="relative text-white hover:text-skin-color" href="/">
          <span className="text-3xl font-bold">A</span>
        </Link>
      </div>
    </>
  );
};

export default Logo;
