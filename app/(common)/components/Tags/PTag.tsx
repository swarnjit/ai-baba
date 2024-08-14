import React from "react";

interface CodeTagProps {
  children: React.ReactNode;
}
const PTag = ({ children }: CodeTagProps) => (
  <div className="">
    <p className="leading-7 text-black">{children}</p>
  </div>
);
export default PTag;
