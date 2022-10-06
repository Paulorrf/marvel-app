import React, { ReactNode } from "react";

interface Props {
  bgImage: String;
  bgColor?: String;
  textColor?: String;
  children: ReactNode;
  card?: boolean;
}

const Background = ({
  bgImage,
  textColor,
  children,
  card = false,
  bgColor = "bg-slate-600",
}: Props) => {
  return (
    <div
      className={`${bgImage} relative h-48 ${bgColor}  bg-cover bg-center bg-no-repeat text-white bg-blend-multiply ${
        card ? "hover:bg-[length:700px_460px]" : ""
      } `}
    >
      {children}
    </div>
  );
};

export default Background;
