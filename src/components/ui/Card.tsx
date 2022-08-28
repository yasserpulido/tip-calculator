import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Card: React.FC<Props> = (props) => {
  return <div className="card">{props.children}</div>;
};
