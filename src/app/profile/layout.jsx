import LeftSide from "@/components/profile/LeftSide";
import Container from "@/components/ui/Container";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-gray-100 p-8 flex items-center">
      <Container className="flex gap-8 h-full items-center w-full">
        <LeftSide />
        <div className="flex-grow bg-white border border-primary h-full lg:min-h-[500px] rounded-2xl p-5">
          {children}
        </div>
      </Container>
    </div>
  );
};

export default ProfileLayout;
