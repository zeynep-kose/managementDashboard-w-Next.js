import UserCard from "../components/UseCard";
import React from "react";

type Props = {};

const AdminSection = () => {
  return (
    <div className="flex p-4 gap-4 flex-row sm:flex-col">
      <div className="w-full lg:w-2/3 ">
        {/* {[...Array(4)].map((_, index) => (
          <div key={index}>
            <UserCard />
          </div>
        ))} */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default AdminSection;
