import React, { useState } from "react";
import {
   MdMeetingRoom,
   MdOutlineSpaceDashboard,
   MdAutoAwesomeMotion,
   MdOutlineSupervisorAccount,
} from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { HiHomeModern } from "react-icons/hi2";
import { GiBunkBeds } from "react-icons/gi";
import { RiHotelBedFill } from "react-icons/ri";
import { FaRestroom } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { BsStickies } from "react-icons/bs";
import DashNav from "../components/DashNav";
import Logout from "../components/Logout";
import Sidebar from "../components/Sidebar";
import MobileMenu from "../components/MobileMenu";
import TopMenu from "../components/TopMenu";
import DashLayout from "../components/DashLayout";
import MenuCard from "../components/MenuCard";
import Modal from "../components/Modal";
import StudentProfile from "../components/list/StudentProfile";

function Studash() {
   const [openModal, setOpenModal] = useState(false);
   const [modalData, setModalData] = useState({});
   const [eid, setEid] = useState(null);

   // const me = (id) => {
   //    setEid(id);
   //    setOpenModal(true);
   // };

   return (
      <DashLayout>
         {openModal && (
            <Modal openModal={openModal} setOpenModal={setOpenModal}>
               <StudentProfile studentId={eid} />
            </Modal>
         )}
         <div className="py-12 md:w-[55%] lg:w-[70%] mx-5 md:mx-auto flex flex-col space-y-6 items-center">
            {/* Profile & Welcome */}
            <div className="flex flex-col items-center">
               <h1 className="text-xl sm:text-3xl font-bold text-[#228e9d] font-['More Sugar']">
                  Welcome to Edu High School
               </h1>
            </div>
            <div className="px-6 py-3 w-full rounded-md font-medium font-circular text-center text-sm sm:text-md text-zinc-500 bg-green-600/5">
               <img src="animation.svg" alt="Animation" className="animated-svg" />
               <p
                  style={{
                     color: "#228e9d",
                     fontFamily: "More Sugar",
                     cursor: "pointer",
                  }}
               >
                  <a href="https://storyset.com/people">Edu High School</a> is an
                  educational institution dedicated to fostering academic excellence
                  and personal growth among its students. With a diverse curriculum
                  that spans the arts, sciences, and humanities, Edu High School aims
                  to cultivate critical thinking, creativity, and a lifelong love of
                  learning. The school prides itself on its inclusive community, where
                  students from various backgrounds feel welcome and supported.
                  Extracurricular activities, including sports, clubs, and volunteer
                  opportunities, enrich the educational experience, encouraging
                  students to explore their interests and develop leadership skills.
                  Edu High School is committed to preparing its students for the
                  challenges of higher education and the demands of an ever-evolving
                  world.
               </p>
               
            </div>
            {/* Cards */}
            <div className="w-full grid md:grid-cols-3 gap-4">
               <MenuCard
                  title="Teacher"
                  desc="Manage list of teachers in the management system."
                  Icon={HiHomeModern}
                  link_text="View records"
                  link="/teacher"
               />
               <MenuCard
                  title="Student"
                  desc="Manage  list of students in the management system."
                  Icon={HiHomeModern}
                  link_text="View records"
                  link="/student"
               />
               <MenuCard
                  title="Classes"
                  desc="Manage student classes and assigned class tutors."
                  Icon={MdMeetingRoom}
                  link_text="View records"
                  link="/classes"
               />
            </div>
         </div>
      </DashLayout>
   );
}
export default Studash;
