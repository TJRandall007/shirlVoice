import React from "react";

export function ContainerDefault(props) {
  return <div className="lg:container mx-auto px-4">{props.children}</div>;
}
