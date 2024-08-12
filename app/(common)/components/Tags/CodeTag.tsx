import React from "react";

interface CodeTagProps {
  children: React.ReactNode;
}
const CodeTag = ({ children }: CodeTagProps) => (
  <div className="p-2 bg-[#f7f7f7] rounded-md mt-2 relative">
    <code className="">{children}</code>
  </div>
);
export default CodeTag;
