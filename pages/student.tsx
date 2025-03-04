import React, { useState, useEffect } from "react";
import DashLayout from "../components/DashLayout";
import StudentForm from "../components/form/StudentForm";
import StudentList from "../components/list/StudentList";

function Student() {
  const [page, setPage] = useState("list");
  const [row, setRow] = useState({});
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleAddRecord = () => {setIsFormVisible(true);
  };
  
    const handleHideForm = () => {
      setIsFormVisible(false);
    };

  const Switcher = () => {
    var view;
    switch (page) {
      case "list":
        view = (
          <StudentList title={"Student"} setPage={setPage} setRow={setRow} />
        );
        break;
      case "create":
        view = <StudentForm setPage={setPage} row={row} />;
        break;
      case "edit":
        view = <StudentForm setPage={setPage} row={row} />;
        break;
        default: view = <StudentList setPage={setPage} />; break;
    }

    
    return view;
  };

  return <DashLayout>{Switcher()}</DashLayout>;


}

export default Student;
