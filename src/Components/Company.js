import React from 'react'

const Company = ({companyId, companyName, companyCode}) => {

    const handleDeleteClick = () => {
	};

    return (
        <li className='list-group-item'>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					companyId : {companyId} <br/>
					companyName : {companyName} <br/>
					companyCode: {companyCode}
				</span>
                
				<button onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
	    </li>
  )
}

export default Company