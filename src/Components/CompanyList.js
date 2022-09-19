import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCompaniesAsync } from '../redux/userSlice'
import Company from './Company'

const CompanyList = () => {
    
    const companies = useSelector((state) => state.user.companies);
    const accessToken = useSelector((state) => state.user.token.accessToken);

    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getCompaniesAsync({ token: accessToken }));
	}, [dispatch,accessToken]);

    const handleAddClick = () => {
	};

    return (
        <div>
            <div class="d-flex justify-content-end mb-4 align-middle">
                <button 
                    type="button" 
                    class="btn btn-success" 
                    onClick={handleAddClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                    &nbsp; Firma Ekle 
                </button>
            </div>
            <table class="table align-middle">
                <thead >
                    <tr class="table-secondary">
                        <th>Firma Kodu</th>
                        <th>Firma Adı</th>
                        <th></th>
                    </tr>
                </thead>   
                <tbody>
                    {companies.map((company) => (
                        <Company key={company.companyId} companyId={company.companyId} companyName={company.companyName} companyCode={company.companyCode} />
                    ))}
                </tbody>   
                
            </table>
        </div>
    )
}

export default CompanyList