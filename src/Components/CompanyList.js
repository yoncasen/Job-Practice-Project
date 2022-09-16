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

    return (
        <div>

            <ul className='list-group'>
                {companies.map((company) => (
                    <Company key={company.companyId} companyId={company.companyId} companyName={company.companyName} companyCode={company.companyCode} />
                ))}
            </ul>
        </div>
    )
}

export default CompanyList