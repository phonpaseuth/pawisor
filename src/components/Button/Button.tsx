import React from "react";

type ButtonProps = {
  label: string;
};

function Button(props: ButtonProps) {
  const { label } = props;
  return <button>{label}</button>;
}

export default Button;
