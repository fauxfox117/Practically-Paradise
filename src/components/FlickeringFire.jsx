import React, { useEffect, useRef } from "react";
import "./FlickeringFire.css";

export default function FloatingAshes() {
  const ashRef = useRef(null);

  useEffect(() => {
    // Create ash particles
    if (ashRef.current) {
      for (let i = 0; i < 50; i++) {
        const ash = document.createElement("div");
        ash.className = "ash-particle";
        ash.style.left = `${Math.random() * 100}%`;
        ash.style.animationDelay = `${Math.random() * 8}s`;
        ash.style.animationDuration = `${5 + Math.random() * 6}s`;

        // Vary the size slightly
        const size = 2 + Math.random() * 2;
        ash.style.width = `${size}px`;
        ash.style.height = `${size}px`;

        ashRef.current.appendChild(ash);
      }
    }
  }, []);

  return (
    <div className="floating-ashes-container">
      {/* Ash particles container */}
      <div ref={ashRef} className="ash-container" />
      <h1 className="artist__name">Practically Paradise</h1>
    </div>
  );
}
