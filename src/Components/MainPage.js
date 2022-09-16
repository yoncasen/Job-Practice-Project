import React from 'react'


import CompanyList from './CompanyList'

const MainPage = () => {

  const handleAddClick = () => {
	};

  return (
    <div>
      <button onClick={handleAddClick}>
          Add
      </button>
      
      <div className='container bg-white p-4 mt-5'>
        <CompanyList/>
      </div>
      
    </div>
  )
}

export default MainPage