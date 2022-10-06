import React, { ReactNode } from "react";

interface Props {
  bgImage: string;
  color?: string;
  children: ReactNode;
}

const Background = ({ bgImage, color, children }: Props) => {
  return (
    <div
      className={`${bgImage} relative h-48 bg-slate-600 bg-cover bg-no-repeat text-white bg-blend-multiply`}
    >
      {children}
    </div>
  );
};

export default Background;
