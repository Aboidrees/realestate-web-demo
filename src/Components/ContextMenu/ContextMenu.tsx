import React, { ReactNode } from "react";
import { ContextMenuProps } from "../../constants";
import "./ContextMenu.css";

export const ContextMenu: React.FC<ContextMenuProps & { children?: ReactNode }> = ({
  position,
  screenPoint,
  children,
}) => {
  console.log(position);

  return (
    <div className="context-menu-layout" style={{ top: screenPoint!.y, left: screenPoint!.x }}>
      <ul>{children}</ul>
    </div>
  );
};
