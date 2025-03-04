import React, { useState, useEffect } from 'react'
import DashLayout from '../components/DashLayout'
import SubjectForm from '../components/form/SubjectForm'
import SubjectList from '../components/list/SubjectList'

function Subject() {
  const [page, setPage] = useState('list')
  const [row, setRow] = useState({})


  const Switcher = () => {
    var view;
    switch (page) {
      case 'list': view = <SubjectList setPage={setPage} setRow={setRow} />; break;
      case 'create': view = <SubjectForm setPage={setPage} row={row} />; break;
      case 'edit': view = <SubjectForm setPage={setPage} row={row} />; break;
    }
    return view
  }

  return (
    <DashLayout>
      {Switcher()}
    </DashLayout>
  )
}

export default Subject

