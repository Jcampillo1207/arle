"use client";

import React, { useRef, useEffect, useState } from "react";

interface VideoOptimizadoProps {
  src: string;
  type?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  poster?: string;
  controls?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  backgroundColor?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

const VideoOptimizado: React.FC<VideoOptimizadoProps> = ({
  src,
  type = "video/mp4",
  muted = true,
  autoPlay = true,
  loop = true,
  poster = "",
  controls = false,
  objectFit = "cover",
  backgroundColor = "#fff",
  onLoad,
  onError,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      if (onLoad) onLoad();
    };

    const handleError = (e: Event) => {
      setHasError(true);
      if (onError) onError(new Error("Error al cargar el video"));
      console.error("Error al cargar el video:", e);
    };

    videoElement.addEventListener("loadeddata", handleLoadedData);
    videoElement.addEventListener("error", handleError);

    return () => {
      videoElement.removeEventListener("loadeddata", handleLoadedData);
      videoElement.removeEventListener("error", handleError);
    };
  }, [onLoad, onError]);

  // Generar el valor de objectFit para Tailwind
  const getObjectFitClass = () => {
    switch (objectFit) {
      case "contain":
        return "object-contain";
      case "cover":
        return "object-cover";
      case "fill":
        return "object-fill";
      case "none":
        return "object-none";
      case "scale-down":
        return "object-scale-down";
      default:
        return "object-cover";
    }
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor }}
    >
      <video
        ref={videoRef}
        className={`absolute w-full h-full ${getObjectFitClass()} transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        muted={muted}
        autoPlay={autoPlay}
        loop={loop}
        playsInline
        controls={controls}
        poster={poster}
      >
        <source src={src} type={type} />
        Tu navegador no soporta el elemento de video.
      </video>

      {hasError && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          No se pudo cargar el video
        </div>
      )}
    </div>
  );
};

export default VideoOptimizado;
