import React from "react";
import { Socials } from "@/constants";

const SocialLinks = () => {
  return (
    <div className="ms-4 flex items-center justify-center">
      {Socials.map((social) => (
        <a
          className="ps-2 text-2xl text-white hover:text-skin-color"
          key={social.name}
          target="_blank"
          href={social.link}
        >
          <social.icon />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
