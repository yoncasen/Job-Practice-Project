
import React, { useEffect , useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCompaniesAsync } from '../redux/userSlice'
import AddCompany from './AddCompany'
import Company from './Company'

const CompanyList = () => {

    const [showAddInputs, setShowAddInputs] = useState(false)
    
    const companies = useSelector((state) => state.user.companies);
    const accessToken = useSelector((state) => state.user.token.accessToken);

    const dispatch = useDispatch();

    // Render after each companies array update(delete,add)
    useEffect(() => {
		dispatch(getCompaniesAsync({ token: accessToken }));
	}, [dispatch,companies]);

    // function of "Firma Ekle" button 
    const toggleAddInputs = () => {
        setShowAddInputs(!showAddInputs)
	};

    return (
        <div>
            {/* FIRMA EKLE BUTTON AND INPUTS */}
            <div className='container'> 
                <div className='row justify-content-between '> 

                    {/* Hides input boxes */}
                    <div className='col-md-11 col-sm-12 mt-2'>
                        {(showAddInputs && <AddCompany/>)}
                    </div>

                    <div className="col-md-1 mt-2 d-flex justify-content-end mb-4 align-middle">
                        <button 
                            type="button" 
                            className="btn btn-success" 
                            onClick={toggleAddInputs}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                            &nbsp; Firma Ekle 
                        </button>
                    </div>

                </div>
            </div>
            {/* COMPANY TABLE */}
            <table className="table align-middle">

                <thead >
                    <tr className="table-secondary">
                        <th>Firma Kodu</th>
                        <th>Firma Adı</th>
                        <th></th>
                    </tr>
                </thead>   
                {/* Calls the company component for each company in the companies list */}
                <tbody>
                    {companies.map((company ,key) => (
                        <Company key={key} companyId={company.companyId} companyName={company.companyName} companyCode={company.companyCode} />
                    ))}
                </tbody>   

            </table>
        </div>
    )
}

export default CompanyList