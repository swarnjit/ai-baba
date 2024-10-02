import React from "react";

interface H2TagProps {
  children: React.ReactNode;
}
const H2Tag = ({ children }: H2TagProps) => (
  <div className="mt-4">
    <h2 className="text-black text-2xl md:text-3xl font-bold mb-3">
      {children}
    </h2>
  </div>
);
export default H2Tag;
