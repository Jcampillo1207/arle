"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

// Define the Point type to match react-simple-maps expectations
type Point = [number, number];

// Mexico GeoJSON
const geoUrl =
  "https://raw.githubusercontent.com/angelnmara/geojson/refs/heads/master/mexicoHigh.json";

// Solo Torreón como ubicación
const torreon = {
  name: "Torreón",
  coordinates: [-103.4068, 25.5428] as Point,
  color: "#033c83",
};

// Logo SVG para Torreón - Reemplaza esto con tu propio SVG
const ArleLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 260 277"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M75.0434 276.296H0V184.198L184.198 0H259.241V276.296H184.198V92.0988L75.0434 201.253V276.296Z"
      className="fill-primary"
    />
  </svg>
);

export const MexicoMap = () => {
  return (
    <div className="absolute inset-0">
      <ComposableMap
        className="w-full h-full"
        projection="geoMercator"
        projectionConfig={{
          scale: 3000,
          center: [-103.4068, 25.5428], // Centrado en Torreón
        }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="fill-white stroke-border"
                  strokeWidth={1}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#f3f3f3", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Solo el marcador de Torreón */}
          <Marker coordinates={torreon.coordinates}>
            <g transform="translate(-12, -24)">
              <ArleLogo />
              <text
                textAnchor="middle"
                y={36}
                x={12}
                style={{
                  fontFamily: "system-ui",
                  fontSize: "10px",
                  fontWeight: "bold",
                  fill: "#1f2937",
                }}
              >
                {torreon.name}
              </text>
            </g>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};
