import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "../components/CountChart";
import UserCard from "../components/UseCard";
import React from "react";
import FinanceChart from "@/components/FinanceChart";

const AdminSection = () => {
  return (
    <div className="p-4 flex gap-4 flex-row sm:flex-col h-full">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="flex">
            <div className="w-full lg:w-1/3 h-[450px]">
              <CountChart />
            </div>
            <div className="w-full lg:w-2/3  h-[450px]">
              <AttendanceChart />
            </div>
          </div>
        </div>

        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8"></div>
    </div>
  );
};

export default AdminSection;
