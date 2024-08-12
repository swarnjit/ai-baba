import React from "react";

interface H3TagProps {
  children: React.ReactNode;
}
const H3Tag = ({ children }: H3TagProps) => (
  <div className="">
    <h3 className="text-black text-xl md:text-2xl font-bold mb-3">
      {children}
    </h3>
  </div>
);
export default H3Tag;
