import Link from "next/link";
import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useRouter } from "next/router";
type Props = {
  title: string;
  active: boolean | undefined | any;
};

function DashNav({ title, icon, active = undefined, link = "" }: any) {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <Link href={link}className="flex items-center space-x-2 p-2 hover:bg-yellow-100/20 rounded-md">
      <div
        className={`p-2 w-full h-12 flex items-center space-x-3 ${
          link === pathname ? "bg-white/10 border-r-[6px] " : ""
        } tansition-all duration-150 hover:bg-white/10 border-white rounded cursor-pointer`}
      >
        <img src={icon} alt="imgDav"className="w-5 h-5" />
        <span
          className={`text-[0.9rem] font-bold ${
            link === pathname ? "text-white" : "text-white/70"
          }`}
        >
          {title}
        </span>
      </div>
    </Link>
  );
}

export default DashNav;
