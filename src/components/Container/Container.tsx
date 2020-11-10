import React from "react";
import clsx from "clsx";
import "./Container.css";

type ContainerProps = {
  className?: string;
  children?: any;
};

function Container(props: ContainerProps) {
  const { className, children } = props;
  return <div className={clsx("container", className)}>{children}</div>;
}

export default Container;
