import React, { useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { Menu } from "@headlessui/react";
import PagerList from "../PagerList";

import { FaUserEdit } from "react-icons/fa";
import { AiOutlineFolderView } from "react-icons/ai";
import Modal from "../Modal";
import Notiflix from "notiflix";
import supabase from "../../supabase";
import StudentProfile from "./StudentProfile";

function StudentList({ setPage, setRow }: any) {
  const [vpage, setVpage] = useState(1);
  const [data, setStudentList] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [eid, setEid] = useState<any>(0);

  useEffect(() => {
    fetchTeacherData();
  }, []);

  const fetchTeacherData = async () => {
    try {
      const { data, error } = await supabase.from("student").select("*");

      if (error) throw error;
      setStudentList(data);
    } catch (error) {
    } finally {
    }
  };

  console.log(data);
  //const { admin } = useUserStore((state) => state);
  //useUserStore.setState({ eid: id,ename: name })
  //const { trigger } = useSWR('/api/user', sendFetcher);   onClick=()=> trigger({ username: 'johndoe' });
  //   const { data, mutate } = useSWR(
  //     keyword
  //       ? `/api/teacher?page=${vpage - 1}&keyword=${keyword}`
  //       : `/api/teacher?page=${vpage - 1}`,
  //     fetcher
  //   );

  const onChange = (e: any) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const editRecord = (row: any) => {
    setPage("edit");
    setRow(row);
  };

  const viewRecord = (id: string) => {
    setEid(id);
    setOpenModal(true);
  };

  const deleteRecord = async (id: string) => {
    try {
      const { error } = await supabase.from("teacher").delete().eq("id", id);

      if (error) throw error;
      Notiflix.Notify.success("Teacher record deleted successfully!");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {eid > 0 ? (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          size="max-w-md"
        >
          <StudentProfile id={eid} />
        </Modal>
      ) : null}

      <div className="py-4 px-4 w-full md:w-full m-5 md:mx-10 flex flex-col space-y-6 items-center bg-white border rounded-lg drop-shadow-sm shadow-gray-100">
        <div className="z-10 w-full sticky top-20  md:relative md:top-0 flex flex-col md:flex-row items-center justify-between bg-white md:bg-blue-50/10 border border-gray-300/70 focus:border-gray-600/70 rounded-md overflow-hidden">
          <span className="my-2 md:my-0 px-6 sm:text-lg tracking-widest font-bold text-[#000131] font-arial">
            TEACHER RECORDS
          </span>
          <PagerList
            onChange={onChange}
            onSubmit={onSubmit}
            keyword={keyword}
            setPage={setPage}
            setRow={setRow}
          />
        </div>
        <div className="w-full">
          <table className="w-full border-collapse md:text-center">
            <thead>
              <tr className="hidden md:table-row bg-[#f9f5f1] font-bold text-[#228e9d] text-sm tracking-wide rounded-lg mb-4 px-2 py-1">
                {/* <th className="p-1 px-2">ID</th> */}
                <th className="p-1 px-2">First Name</th>
                <th className="p-1 px-2">Last Name</th>
                <th className="p-1 px-2">Phone</th>
                <th className="p-1 px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((row: any, i: React.Key) => (
                  <tr
                    key={i}
                    className="md:table-row text-gray-900 text-[0.81rem] font-normal font-circular rounded-md px-2 py-1 border-b-2 border-slate-50"
                  >
                    {/* <td className="md:p-1 md:px-2">{row.id}</td> */}
                    <td className="md:p-1 md:px-2">{row.first_name}</td>
                    <td className="md:p-1 md:px-2">{row.last_name}</td>
                    <td className="md:p-1 md:px-2">{row.phone_number}</td>
                    <td className="md:p-1 md:px-2 md:text-center">
                      <Menu as="div" className="relative">
                        <Menu.Button className="relative px-2 py-1 border-2 rounded">
                          <TfiMenuAlt className="h-4 w-4 text-gray-600/70" />
                        </Menu.Button>
                        <Menu.Items className="absolute top-6 right-0 w-28 py-2 flex flex-col bg-white shadow-md border rounded-md">
                          <Menu.Item
                            as="button"
                            onClick={() => editRecord(row)}
                            className="py-1 px-3 flex items-center"
                          >
                            <FaUserEdit />
                            <span className="ml-2">Edit</span>
                          </Menu.Item>
                          <Menu.Item
                            as="button"
                            onClick={() => viewRecord(row.id)}
                            className="py-1 px-3 flex items-center"
                          >
                            <AiOutlineFolderView />
                            <span className="ml-2">View</span>
                          </Menu.Item>
                          <Menu.Item
                            as="button"
                            onClick={() => deleteRecord(row.id)}
                            className="py-1 px-3 flex items-center"
                          >
                            <FiUpload />
                            <span className="ml-2">Delete</span>
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default StudentList;
