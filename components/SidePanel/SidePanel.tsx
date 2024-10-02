import React from "react";
import SidePanelContent from "./SidePanelContent";

const SidePanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-row flex justify-center w-full align-middle">
      <div className="sm:w-2/3 w-full">{children}</div>
      <div className="sm:w-1/3 w-full bg-offwhite rounded-xl relative min-h-60 flex flex-col pt-4 p-6 gap-5">
        <SidePanelContent />
      </div>
    </div>
  );
};

export default SidePanel;
