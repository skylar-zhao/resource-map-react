import React from "react";
import { Box } from "@mui/material";
import { click } from "@testing-library/user-event/dist/click";
// import { height } from "@mui/system";
// import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MapMarker from "./MapMarker";
import { type Resource } from "../lib/types";

// The commented out code is when I tried to make the corresponding map marker
// popup when the map pin icon is clicked.
// I backed out as this is taking too long to figure out

interface MapProps {
  resources: Resource[];
  selectedResource: Resource;
  setSelectedResource: (name: string) => void;
}

const Map: React.FC<MapProps> = (props) => {
  const { selectedResource, setSelectedResource } = props;
  const initialPosition: [number, number] = [
    41.88643789360485, -87.61537344100826,
  ];
  // const [mapPosition, setMapPosition] = useState(initialPosition);
  // const [map, setMap] = useState({});

  //   var map = L.map("map").setView([51.505, -0.09], 13);
  //
  const filteredResources = props.resources.filter(
    (resource) => resource.lat && resource.long
  );

  //
  // // modified code from https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  // useEffect(() => {
  //   console.log(useEffect, selectedResource);
  //   setMapPosition([selectedResource.lat, selectedResource.long]);
  // }, [selectedResource.lat, selectedResource.long]);

  // console.log("map", map);

  return (
    <Box flex={1}>
      <MapContainer
        center={initialPosition}
        zoom={11}
        style={{ height: "100vh" }}
        // whenReady={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredResources.map((resource, index) => (
          //   <Marker
          //   key={index}
          //   position={[resource.lat, resource.long]}
          //   eventHandlers={{
          //     click: function f() {
          //       onClickPinHandler(resource.name);
          //     },
          //   }}
          // >
          //   <Popup>
          //     <div>
          //       <h2>{resource.name}</h2>
          //       <p>{resource.address}</p>
          //     </div>
          //   </Popup>
          // </Marker>
          <MapMarker
            key={index}
            resource={resource}
            selectedResource={selectedResource}
            setSelectedResource={setSelectedResource}
          />
        ))}
      </MapContainer>
    </Box>
  );
};

export default Map;
