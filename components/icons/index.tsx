import React from "react";
import HamburgerIcon from "./hamburger";
import GitHubIcon from "./github";
import FacebookIcon from "./facebook";
import InstagramIcon from "./instagram";
import IdeaIcon from "./idea";

type IconType = "hamburger" | "github" | "facebook" | "instagram" | "idea";
export interface IconProps {
  symbol: IconType;
}

function Icon({ symbol }: IconProps) {
  switch (symbol) {
    case "hamburger":
      return <HamburgerIcon />;
    case "github":
      return <GitHubIcon />;
    case "facebook":
      return <FacebookIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "idea":
      return <IdeaIcon />;
    default:
      return <span>Unknown icon: {symbol}</span>;
  }
}

export default Icon;
