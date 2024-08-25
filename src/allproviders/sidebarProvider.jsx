import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const sidebarProvider = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};

export default sidebarProvider;
