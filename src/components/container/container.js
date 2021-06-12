import React from "react";

export function ContainerDefault(props) {
  return (
    <div className="lg:container mx-auto px-4 md:px-8">{props.children}</div>
  );
}

export function ContainerRelative(props) {
  return (
    <div className="lg:container mx-auto px-4 md:px-8 relative">
      {props.children}
    </div>
  );
}

export function ContainerNarrow(props) {
  return <div className="w-1/3 mx-auto px-4 md:px-8">{props.children}</div>;
}
