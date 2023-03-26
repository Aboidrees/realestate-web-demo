import { useEffect, useMemo, useState } from "react";
import { ContextMenuProps } from "../constants/interfaces";

export const useContextMenu = (e?: google.maps.MapMouseEvent) => {
  const initValue = useMemo(() => ({ position: null, screenPoint: null }), []);
  const [contextMenuProps, setContextMenuProps] = useState<ContextMenuProps>(initValue);

  useEffect(() => {
    if (e) {
      setContextMenuProps({
        position: e.latLng!,
        screenPoint: {
          x: Number("layerX" in e.domEvent ? e.domEvent.layerX : 0),
          y: Number("layerY" in e.domEvent ? e.domEvent.layerY : 0),
        },
      });
    } else {
      setContextMenuProps(initValue);
    }
  }, [e, initValue]);

  return contextMenuProps;
};
