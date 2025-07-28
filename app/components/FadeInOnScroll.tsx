import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
}

export const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 800,
  direction = "up",
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getTransform = () => {
    if (direction === "up") return "translateY(30px)";
    if (direction === "down") return "translateY(-30px)";
    if (direction === "left") return "translateX(30px)";
    if (direction === "right") return "translateX(-30px)";
    return "none";
  };

  const baseStyles: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0)" : getTransform(),
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
  };

  return (
    <div ref={ref} className={className} style={baseStyles}>
      {children}
    </div>
  );
};
