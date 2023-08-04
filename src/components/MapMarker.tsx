import { useRef, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { Resource } from "../lib/types";

interface MapMarkerProps {
  key: number;
  resource: Resource;
  selectedResource: Resource;
  setSelectedResource: (name: string) => void;
}

const MapMarker: React.FC<MapMarkerProps> = (props) => {
  const { resource, key, selectedResource, setSelectedResource } = props;
  const markerRef = useRef(null);

  function scrollIntoView(name: string) {
    let result = document.getElementById(name);
    result?.scrollIntoView({ behavior: "smooth" });
    // console.log(result);
  }

  function onClickPinHandler(name: string) {
    setSelectedResource(name);
    console.log(name);
    scrollIntoView(name);
  }

  // useEffect(() => {
  //   if (selectedResource === )
  //   markerRef.current.scrollIntoView({ behavior: "smooth" });
  // }, []);
  return (
    <Marker
      ref={markerRef}
      key={key}
      position={[+resource.lat, +resource.long]}
      eventHandlers={{
        click: function f() {
          onClickPinHandler(resource.name);
        },
      }}
    >
      <Popup>
        <div>
          <h2>{resource.name}</h2>
          <p>{resource.address}</p>
        </div>
      </Popup>
    </Marker>
  );
};
export default MapMarker;
