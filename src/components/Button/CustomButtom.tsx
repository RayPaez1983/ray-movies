import React from 'react';

export interface ButtonProps {
  title: string;
  backgroundColor?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  backgroundColor = '#007bff',
  onClick,
  disabled = false,
  className,
  style,
}) => {
  return (
    <button
      type="button"
      onClick={(e) => onClick?.(e)}
      disabled={disabled}
      className={className}
      style={{
        backgroundColor,
        color: '#fff',
        border: 'none',
        padding: '8px 14px',
        borderRadius: 6,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: 14,
        ...style,
      }}>
      {title}
    </button>
  );
};

export default CustomButton;
