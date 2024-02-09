import React, { ReactNode } from 'react';
import { useNavigateWithTransitions } from "@/hooks/useNavigateWithTransitions";
import { useLocation } from "react-router-dom";

interface LinkWithTransitionProps {
  href: string;
  children: ReactNode;
  activeClass?: string;
}

const LinkWithTransition: React.FC<LinkWithTransitionProps> = ({href, activeClass= "active", children}) => {
  const navigate = useNavigateWithTransitions();
  const location = useLocation();

  const isActive = (link: string) => {
    return location.pathname === link;
  }

  const classes = [
    "linkWithTransition",
    isActive(href) ? activeClass : ""
  ];

  return (
    <a
      className={classes.join(" ").trim()}
      onClick={() => navigate(href)}
    >
      {children}
    </a>
  );
}

export default LinkWithTransition;