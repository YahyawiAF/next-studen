import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { BsCloudDownload } from "react-icons/bs";
import DashNav from "../components/DashNav";
import Logout from "../components/Logout";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";
import TopMenu from "../components/TopMenu";

function DashLayout({ children }: any) {
  return (
    <div className="w-full flex max-h-full min-h-screen bg-slate-50 scrollbar-hide">
      <Sidebar />
      {/* Content */}
      <div className="w-full bg-gray-100">
        <TopMenu />
        <MobileMenu />

        {/* Main Content */}
        <div className="w-full flex bg-zinc-100  scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashLayout;
