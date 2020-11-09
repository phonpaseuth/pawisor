import React from "react";
import "./Container.css";

type ContainerProps = {
  children: any;
};

function Container(props: ContainerProps) {
  const { children } = props;
  return <div className="container">{children}</div>;
}

export default Container;
