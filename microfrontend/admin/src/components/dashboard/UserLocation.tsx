"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const states = [
  { name: "California", value: 40 },
  { name: "Arizona", value: 15 },
  { name: "Texas", value: 10 },
  { name: "Georgia", value: 3.5 },
  { name: "North Carolina", value: 2 },
  { name: "Florida", value: 1.5 }
];

const activeStates = states.map((s) => s.name);

export default function UserLocation() {

  const [zoom, setZoom] = useState(1);

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      setZoom((z) => Math.min(z + 0.2, 4));
    } else {
      setZoom((z) => Math.max(z - 0.2, 1));
    }
  };

  return (

    <div className="bg-white p-6 rounded-xl shadow-sm h-full">

      {/* TITLE */}

      <h3 className="font-semibold text-gray-900 mb-6">
        User Location
      </h3>

      {/* MAP CARD */}

      <div
        className="bg-gray-100 rounded-xl p-6"
        onWheel={handleWheel}
      >

        {/* BIG MAP */}

        <div className="h-[320px]">

          <ComposableMap
            projection="geoAlbersUsa"
            style={{ width: "100%", height: "100%" }}
          >

            <ZoomableGroup zoom={zoom} center={[-97, 38]}>

              <Geographies geography={geoUrl}>

                {({ geographies }) =>
                  geographies.map((geo) => {

                    const state = geo.properties.name;
                    const active = activeStates.includes(state);

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: active ? "#ff7a45" : "#6b7280",
                            stroke: "#ffffff",
                            strokeWidth: 0.5,
                            outline: "none"
                          },
                          hover: {
                            fill: "#ff7a45",
                            outline: "none"
                          },
                          pressed: {
                            fill: "#ff7a45",
                            outline: "none"
                          }
                        }}
                      />
                    );

                  })
                }

              </Geographies>

            </ZoomableGroup>

          </ComposableMap>

        </div>


        {/* LEGEND */}

        <div className="grid grid-cols-3 gap-y-4 mt-6 text-sm">

          {states.map((item) => (

            <div
              key={item.name}
              className="flex items-center gap-2 text-gray-700"
            >

              <span className="w-2.5 h-2.5 rounded-full bg-[#ff7a45]" />

              <span>
                {item.name}{" "}
                <span className="font-semibold text-gray-900">
                  {item.value}%
                </span>
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}