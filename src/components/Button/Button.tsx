import React from "react";
import clsx from "clsx";
import "./Button.css";

type ButtonProps = {
  label: string;
  children?: any;
  className?: string;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  const { label, children, className, onClick } = props;
  return (
    <button className={clsx("button", className)} onClick={onClick}>
      {children}
      {label}
    </button>
  );
}

export default Button;
