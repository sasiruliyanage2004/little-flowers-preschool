import React from 'react';

interface FlowerProps {
  className?: string;
  color?: string;
  size?: number;
}

export const FlowerIcon: React.FC<FlowerProps> = ({
  className = '',
  color = '#F28B78',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <circle cx="12" cy="7" r="3.5" fill={color} fillOpacity="0.85" />
    <circle cx="17" cy="12" r="3.5" fill={color} fillOpacity="0.85" />
    <circle cx="12" cy="17" r="3.5" fill={color} fillOpacity="0.85" />
    <circle cx="7" cy="12" r="3.5" fill={color} fillOpacity="0.85" />
    <circle cx="12" cy="12" r="2.5" fill="#FFD66B" />
  </svg>
);

export const DaisyIcon: React.FC<FlowerProps> = ({
  className = '',
  color = '#FFF9F0',
  size = 28,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <g fill={color}>
      <ellipse cx="16" cy="7" rx="3" ry="5" />
      <ellipse cx="23" cy="10" rx="3" ry="5" transform="rotate(45 23 10)" />
      <ellipse cx="25" cy="16" rx="5" ry="3" />
      <ellipse cx="23" cy="22" rx="3" ry="5" transform="rotate(-45 23 22)" />
      <ellipse cx="16" cy="25" rx="3" ry="5" />
      <ellipse cx="9" cy="22" rx="3" ry="5" transform="rotate(45 9 22)" />
      <ellipse cx="7" cy="16" rx="5" ry="3" />
      <ellipse cx="9" cy="10" rx="3" ry="5" transform="rotate(-45 9 10)" />
    </g>
    <circle cx="16" cy="16" r="4.5" fill="#FFD66B" />
  </svg>
);

export const LeafIcon: React.FC<FlowerProps> = ({
  className = '',
  color = '#8EC6A0',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M20 4C14 4 6 8 5 18C15 19 19 11 20 4Z"
      fill={color}
      fillOpacity="0.9"
    />
    <path
      d="M5 18C9 14 13 11 18 6"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.6"
    />
  </svg>
);

export const SparkleIcon: React.FC<FlowerProps> = ({
  className = '',
  color = '#FFD66B',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
  >
    <path
      d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"
      fill={color}
    />
  </svg>
);
