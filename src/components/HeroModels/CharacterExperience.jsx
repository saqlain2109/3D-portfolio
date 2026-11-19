import React, { useEffect, useRef, useState } from 'react';

const LOCAL_VIDEO_URL = '/videos/character.mp4';
const REMOTE_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260826_041744_63efcd78-bf7d-4039-99e2-2461e8a61903.mp4';
const SENSITIVITY = 0.8;

export default function CharacterExperience() {
  const videoRef = useRef(null);
  const prevXRef = useRef(null);
  const targetTimeRef = useRef(2.0);
  const isSeekingRef = useRef(false);
  const [videoSrc, setVideoSrc] = useState(LOCAL_VIDEO_URL);
  const [isLoaded, setIsLoaded] = useState(false);

  const seekTo = (time) => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.currentTime = time;
    } catch {
      // ignore
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    const initialTime = video.duration ? video.duration * 0.5 : 2.0;
    targetTimeRef.current = initialTime;
    video.currentTime = initialTime;
    setIsLoaded(true);
  };

  const handleSeeked = () => {
    const video = videoRef.current;
    if (!video) return;

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.015) {
      seekTo(targetTimeRef.current);
    } else {
      isSeekingRef.current = false;
    }
  };

  const handleVideoError = () => {
    if (videoSrc !== REMOTE_VIDEO_URL) {
      console.warn('Local video failed, falling back to remote URL...');
      setVideoSrc(REMOTE_VIDEO_URL);
    }
  };

  // Cursor movement listener
  useEffect(() => {
    const handleMouseMove = (event) => {
      const video = videoRef.current;
      if (!video) return;

      if (prevXRef.current === null) {
        prevXRef.current = event.clientX;
        return;
      }

      const delta = event.clientX - prevXRef.current;
      prevXRef.current = event.clientX;

      if (!video.duration || Number.isNaN(video.duration)) {
        return;
      }

      const timeOffset =
        (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const clamped = Math.max(
        0,
        Math.min(video.duration, targetTimeRef.current + timeOffset)
      );
      targetTimeRef.current = clamped;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        seekTo(clamped);
      }
    };

    // Mobile touch listener
    const handleTouchMove = (event) => {
      if (event.touches.length === 0) return;
      const touchX = event.touches[0].clientX;
      const video = videoRef.current;
      if (!video) return;

      if (prevXRef.current === null) {
        prevXRef.current = touchX;
        return;
      }

      const delta = touchX - prevXRef.current;
      prevXRef.current = touchX;

      if (!video.duration || Number.isNaN(video.duration)) {
        return;
      }

      const timeOffset =
        (delta / window.innerWidth) * SENSITIVITY * video.duration;
      const clamped = Math.max(
        0,
        Math.min(video.duration, targetTimeRef.current + timeOffset)
      );
      targetTimeRef.current = clamped;

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        seekTo(clamped);
      }
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-[500px] sm:h-[620px] md:h-[720px] xl:inset-0 xl:h-full overflow-hidden pointer-events-none select-none z-0">
      {/* Native GPU-Accelerated Video - Smooth mouse/touch frame scrubbing */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
        onSeeked={handleSeeked}
        onError={handleVideoError}
        className="w-full h-full object-cover object-[70%_28%] sm:object-[70%_35%] md:object-[72%_42%] xl:object-[75%_center] transition-opacity duration-700"
        style={{
          opacity: isLoaded ? 1 : 0,
        }}
      />

      {/* Top Navbar Scrim - Ensures navbar (logo, links, Contact button) stays on deep black */}
      <div className="absolute top-0 left-0 right-0 h-24 md:h-36 bg-gradient-to-b from-black via-black/80 to-transparent z-[1]" />

      {/* Desktop Left Scrim - Seamlessly blends text section on left into pure black */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-45% to-transparent z-[1] hidden xl:block" />

      {/* Desktop Right Edge Scrim - Soft studio vignette on far right */}
      <div className="absolute top-0 right-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black/50 to-transparent z-[1] hidden xl:block" />

      {/* Mobile Scrim - Soft darkening over lower hero text while keeping character's face clear at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-60% to-transparent z-[1] xl:hidden" />

      {/* Bottom Smooth Fade - Blends seamlessly into stats counter and sections below */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-b from-transparent via-black/90 to-black z-[2]" />
    </div>
  );
}
