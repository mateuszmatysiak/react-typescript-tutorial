import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {}

export const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button {...rest} className={`default-classname ${className}`}></button>
  );
};

const Parent = () => {
  return <Button onClick={() => {}} type="button"></Button>;
};
