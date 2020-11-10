import React from "react";
import clsx from "clsx";
import "./Button.css";

type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
};

function Button(props: ButtonProps) {
  const { label, className, onClick } = props;
  return (
    <button className={clsx("button", className)} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
