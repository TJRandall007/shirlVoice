import React from "react";

export function ContainerDefault(props) {
  return (
    <div className="lg:container mx-auto px-4 md:px-8">{props.children}</div>
  );
}
