import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompanyAsync } from "../redux/userSlice";

const AddCompany = () => {
  const [companyCode, setCompanyCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  // const [isActive, setIsActive] = useState(false)

  const companies = useSelector((state) => state.user.companies);
  const modifierUserId = useSelector((state) => state.user.user.userId);
  const accessToken = useSelector((state) => state.user.token.accessToken);

  const dispatch = useDispatch();

  const handleAddCheck = (e) => {
    e.preventDefault();
    // setIsActive(true)
    if (companyCode && companyName) {
      dispatch(
        addCompanyAsync({
          companyCode: companyCode,
          companyName: companyName,
          isActive: true,
          modifierUserId: modifierUserId,
          accessToken: accessToken,
          companies: companies,
        })
      );
      setCompanyCode("");
      setCompanyName("");
    }
  };

  return (
    <form className="container" onSubmit={handleAddCheck}>
      <div className="row">
        <div className="col-lg-5 col-md-4 mt-md-0">
          <input
            type="name"
            placeholder="Firma Kodu"
            name="companyCode"
            value={companyCode}
            onChange={(event) => setCompanyCode(event.target.value)}
            className=" form-control"
          ></input>
          {/* <div className="valid-feedback"></div> */}
        </div>
        <div className="col-lg-5 col-md-4 offset-lg-1 offset-md-1 mt-3 mt-md-0">
          <input
            type="name"
            placeholder="Firma İsmi"
            name="companyName"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
            className="form-control"
          ></input>
          {/* <div className="valid-feedback"></div> */}
        </div>

        <div className="col-lg-1 col-md-1 offset-5 offset-md-0 mt-3 mt-md-0">
          <button type="submit" className="btn btn-success ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddCompany;
