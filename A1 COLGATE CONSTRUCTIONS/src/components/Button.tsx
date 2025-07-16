import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface BrickButtonProps {
  label: string;
  to: string;
}

const BrickButton: React.FC<BrickButtonProps> = ({ label, to }) => {
  const navigate = useNavigate();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (animating) return; // Prevent multiple clicks

    setAnimating(true);
    setTimeout(() => {
      navigate(to);
    }, 1200); // Match animation duration
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden px-6 py-3 bg-white text-black font-semibold rounded shadow border border-black hover:bg-gray-100 transition duration-300"
    
    >
      <span className="relative z-10">{label}</span>

      {/* Brick Rain Animation */}
      {animating && (
        <div className="absolute inset-0 z-0 flex flex-wrap content-start pl-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <img
              key={i}
              src="/assets/brick.png"
              alt="brick"
              className="w-6 h-6 animate-brick-drop"
              style={{
                left: `${(i % 5) * 20}%`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      )}
    </button>
  );
};

export default BrickButton;
