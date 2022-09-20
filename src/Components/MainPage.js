import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import CompanyList from './CompanyList'

const MainPage = () => {

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)


  if (!isLoggedIn) {

    return <Navigate replace to="/" />;

  } else {

    return (
      <div>
        <div className='container bg-white p-4 mt-5'>
          <CompanyList/>
        </div>
      </div>
    )
  }
}

export default MainPage