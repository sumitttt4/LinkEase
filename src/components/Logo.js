import React from 'react';

const Logo = ({ className = "", width = "140", height = "40" }) => {
  return (
    <svg 
      className={className}
      width={width} 
      height={height} 
      viewBox="0 0 700 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chain Link Icon */}
      <g>
        {/* Gray outer link */}
        <path 
          d="M90 50 Q70 30, 50 50 Q30 70, 50 90 Q70 110, 90 90" 
          stroke="#9CA3AF" 
          strokeWidth="12" 
          fill="none"
          strokeLinecap="round"
        />
        {/* Blue inner link */}
        <path 
          d="M110 70 Q130 50, 150 70 Q170 90, 150 110 Q130 130, 110 110" 
          stroke="#1E40AF" 
          strokeWidth="12" 
          fill="none"
          strokeLinecap="round"
        />
        {/* Connecting part */}
        <path 
          d="M85 75 L115 85" 
          stroke="#1E40AF" 
          strokeWidth="8" 
          strokeLinecap="round"
        />
      </g>
      
      {/* LinkEase Text */}
      <text 
        x="220" 
        y="110" 
        fontSize="90" 
        fontWeight="700" 
        fill="#1E293B"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
      >
        LinkEase
      </text>
    </svg>
  );
};

export default Logo;
