import React, { useState, useEffect } from "react";
import DashLayout from "../components/DashLayout";
import ClassForm from "../components/form/ClassForm";
import ClassList from "../components/list/ClassList";

function Student() {
  const [page, setPage] = useState("list");
  const [row, setRow] = useState({});

  const Switcher = () => {
    var view;
    switch (page) {
      case "list":
        view = (
          < ClassList title={"Class"} setPage={setPage} setRow={setRow} />
        );
        break;
      case "create":
        view = <ClassForm setPage={setPage} row={row} />;
        break;
      case "edit":
        view = <ClassForm setPage={setPage} row={row} />;
        break;
      // default: view = <StudentList setPage={setPage} />; break;
    }
    return view;
  };

  return <DashLayout>{Switcher()}</DashLayout>;
}

export default Student;
