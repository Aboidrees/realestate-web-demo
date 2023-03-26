import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { useFetch, useContextMenu } from "../../Hooks/";
import { ContextMenu, ContextMenuItem } from "../../Components";
import { homeIcon } from "../../constants";

export const Map = () => {
  let zoom = 9;
  let center = useMemo(() => ({ lat: 15.348071, lng: 32.646563 }), []);

  const url = "http://localhost:8000/requests/get_real_estates";

  const data = useFetch({ url });

  const [rightClickEvent, setRightClickEvent] = useState<google.maps.MapMouseEvent>();

  const contextMenuProps = useContextMenu(rightClickEvent);
  console.log(contextMenuProps);

  return (
    <GoogleMap
      zoom={zoom}
      center={center}
      mapContainerClassName="map-container"
      onRightClick={setRightClickEvent}
      onClick={() => contextMenuProps && setRightClickEvent(undefined)}
    >
      {contextMenuProps.position && (
        <ContextMenu {...contextMenuProps}>
          <ContextMenuItem text="Item 1" />
          <ContextMenuItem text="Item 2" />
          <ContextMenuItem text="Item 3" />
          <ContextMenuItem text="Item 4" />
          <ContextMenuItem text="Item 5" />
        </ContextMenu>
      )}
      <Marker position={center} />
      {data?.data?.map((realEstate) => {
        return <Marker key={realEstate.id} position={realEstate.position} label={homeIcon} />;
      })}
    </GoogleMap>
  );
};
