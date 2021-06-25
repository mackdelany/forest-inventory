import React, { useEffect, memo } from "react";
import MapboxGl from "mapbox-gl";

MapboxGl.accessToken =
  "pk.eyJ1IjoibWFja2RlbGFueSIsImEiOiJja3FibnNtb3AwMjlpMnVtaTQ0aWtmNTV4In0.IreAaghgashFED12s6aq1Q";

let map: MapboxGl.Map | undefined;

declare global {
  interface Window {
    mapboxGlMap?: MapboxGl.Map;
  }
}

interface MapProps {
  longitude: number;
  latitude: number;
  area: number;
}

const Map: React.FC<MapProps> = memo((props: MapProps) => {
  const { latitude, longitude, area } = props;

  useEffect((): void => {
    window.mapboxGlMap = new MapboxGl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [longitude, latitude],
      zoom: area < 100000 ? 12 : 9,
      pitch: 45,
    });
    map = window.mapboxGlMap;
  }, [longitude, latitude, area]);

  useEffect((): void => {
    if (map) {
      map.on("load", function () {
        map?.addSource("mapbox-dem", {
          type: "raster-dem",
          url: "mapbox://mapbox.mapbox-terrain-dem-v1",
          tileSize: 512,
          maxzoom: 14,
        });
        map?.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
        map?.addLayer({
          id: "sky",
          type: "sky",
          paint: {
            "sky-type": "atmosphere",
            "sky-atmosphere-sun": [0.0, 0.0],
            "sky-atmosphere-sun-intensity": 15,
          },
        });
      });
    }
  });

  return <></>;
});

export default Map;
