import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCompaniesAsync } from "../redux/userSlice";
import AddCompany from "./AddCompany";
import Company from "./Company";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CompanyList = () => {
  const [showAddInputs, setShowAddInputs] = useState(false);

  const companies = useSelector((state) => state.user.companies);
  const accessToken = useSelector((state) => state.user.token.accessToken);

  const dispatch = useDispatch();

  // Render after each companies array update(delete,add)
  useEffect(() => {
    dispatch(getCompaniesAsync({ token: accessToken }));
  }, [dispatch, accessToken, companies.length]);

  // function of "Firma Ekle" button
  const toggleAddInputs = () => {
    setShowAddInputs(!showAddInputs);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container bg-white p-4 mt-5">
        {/* FIRMA EKLE BUTTON AND INPUTS */}
        <div className="container mb-4">
          <div className="row justify-content-between align-items-center">
            {/* Hides input boxes */}
            <div className="col-lg-10 col-md-11 col-sm-12 ">
              {showAddInputs && <AddCompany />}
            </div>

            <div className="col-md-1 mt-2 d-flex justify-content-end mb-2">
              <button
                type="button"
                className="btn btn-dark"
                onClick={toggleAddInputs}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
                &nbsp; Firma Ekle
              </button>
            </div>
          </div>
        </div>
        {/* COMPANY TABLE */}
        <div className="table-responsive-md">
          <table className="table table-hover align-middle">
            <thead>
              <tr className="table-success">
                <th>Firma Kodu</th>
                <th>Firma Adı</th>
                <th></th>
              </tr>
            </thead>
            {/* Calls the company component for each company in the companies list */}
            <tbody>
              {companies.map((company, key) => (
                <Company
                  key={company.companyId}
                  companyId={company.companyId}
                  companyName={company.companyName}
                  companyCode={company.companyCode}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyList;
