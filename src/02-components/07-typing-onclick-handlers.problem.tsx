import React from "react";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
  // onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClick: React.MouseEventHandler;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
