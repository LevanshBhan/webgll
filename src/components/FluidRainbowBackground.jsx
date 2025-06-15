import React, { useRef, useEffect } from "react";

export const FluidRainbowBackground = ({ burst }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let t = 0;
    let animationId;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);
    resize();

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < 3; i++) {
        const angle = t * 0.2 + i * 2;
        const x = width / 2 + Math.sin(angle) * width * 0.25;
        const y = height / 2 + Math.cos(angle) * height * 0.25;
        const radius = (burst ? 400 : 300) + Math.sin(t + i) * 40;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
        grad.addColorStop(0, `hsla(${(t * 40 + i * 120) % 360},100%,${burst ? 65 : 50}%,${burst ? 0.25 : 0.13})`);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
      t += 0.012;
      animationId = requestAnimationFrame(draw);
    }
    draw();
    animationRef.current = animationId;
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [burst]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        transition: "filter 0.3s",
        filter: burst ? "brightness(1.3) saturate(1.5)" : "none",
      }}
    />
  );
}; 