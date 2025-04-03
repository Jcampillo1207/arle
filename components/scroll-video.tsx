"use client";

import { useRef, useEffect, useState } from "react";

interface ScrollVideoProps {
  src: string;
  heightPerSecond: number;
  CoverElement?: React.ReactNode;
  belowNav: boolean;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({
  src,
  heightPerSecond,
  belowNav = false,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState("400vh");
  const [videoEnded, setVideoEnded] = useState(false);

  const onVideoEnd = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      if (!videoRef.current || !containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const containerBottom = containerTop + containerHeight;

      const scrollPos = window.scrollY;
      const viewportBottom = scrollPos + window.innerHeight;

      // Check if video is within the viewport
      const isVideoInView =
        containerTop < viewportBottom && containerBottom > scrollPos;

      if (isVideoInView && !videoRef.current.paused) {
        videoRef.current.pause();
      }

      const percentageScrolled = (scrollPos - containerTop) / containerHeight;
      if (Number.isFinite(percentageScrolled) && videoRef.current.duration) {
        const targetTime = percentageScrolled * videoRef.current.duration;

        if (
          (videoRef.current.currentTime < targetTime &&
            scrollPos > lastScroll) ||
          (videoRef.current.currentTime > targetTime && scrollPos < lastScroll)
        ) {
          videoRef.current.currentTime = targetTime;
          setVideoEnded(false);
        }
      }

      lastScroll = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      setContainerHeight(`${videoRef.current.duration * heightPerSecond}px`);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.readyState >= 1) {
        handleVideoLoaded();
      } else {
        videoElement.addEventListener("loadedmetadata", handleVideoLoaded);
      }

      return () => {
        videoElement.removeEventListener("loadedmetadata", handleVideoLoaded);
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: containerHeight,
        width: "100%",
        position: "relative",
      }}
    >
      <video
        muted
        playsInline
        controls={false}
        autoPlay
        ref={videoRef}
        onEnded={onVideoEnd}
        style={{
          position: "sticky",
          top: belowNav ? "56px" : "0",
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <source src={src} type="video/mp4" /> Your browser does not support the
        video tag.
      </video>
    </div>
  );
};

export default ScrollVideo;
