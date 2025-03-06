import React, { useState, useEffect } from "react";
import DashLayout from "../components/DashLayout";
import TeacherForm from "../components/form/teacherForm";
import TeacherList from "../components/list/teacherList";

function Teacher() {
  const [page, setPage] = useState("list");
  const [row, setRow] = useState({});

  const Switcher = () => {
    var view;
    switch (page) {
      case "list":
        view = (
          <TeacherList title={"Teacher"} setPage={setPage} setRow={setRow} />
        );
        break;
      case "create":
        view = <TeacherForm setPage={setPage} row={row} />;
        break;
      case "edit":
        view = <TeacherForm setPage={setPage} row={row} />;
        break;
      default:
        view = <TeacherList setPage={setPage} />;
        break;
    }
    return view;
  };

  return <DashLayout>{Switcher()}</DashLayout>;
}

export default Teacher;
