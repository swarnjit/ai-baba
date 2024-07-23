import React from "react";

const SidePanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-row flex justify-center w-full align-middle">
      <div className="w-2/3">{children}</div>
      <div className="w-1/3">fhdfgdfgdfg</div>
    </div>
  );
};

export default SidePanel;
