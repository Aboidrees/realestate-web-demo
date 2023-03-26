import React, { MouseEventHandler, ReactNode } from "react";
import "./ContextMenuItem.css";

export const ContextMenuItem: React.FC<{
  text: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLLIElement>;
}> = ({ text, icon, onClick }) => {
  return (
    <li onClick={onClick}>
      <>{icon} </>
      {text}
    </li>
  );
};
