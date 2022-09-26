import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteCompanyAsync } from "../redux/userSlice";

const Company = ({ companyId, companyName, companyCode }) => {
  const accessToken = useSelector((state) => state.user.token.accessToken);

  const dispatch = useDispatch();

  const handleDeleteClick = (e) => {
    e.preventDefault();
    dispatch(
      deleteCompanyAsync({
        id: companyId,
        accessToken: accessToken,
      })
    );
  };

  return (
    <tr>
      {/* FIRST COLUMN */}
      <td className="col-5 align-middle">{companyCode}</td>
      {/* SECOND COLUMN */}
      <td className="col-5 align-middle">{companyName}</td>
      {/* OPTIONS (EDIT,DELETE) COLUMN */}
      <td className="col-2">
        <div className="d-flex flex-row justify-content-end">
          <div className="col-4">
            <button type="button" className="btn btn-warning ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  fillRule="evenodd"
                  d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z"
                ></path>
              </svg>
            </button>
          </div>
          -
          <div className="col-4">
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDeleteClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path
                  fillRule="evenodd"
                  d="M16 1.75V3h5.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75zm-6.5 0a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25V3h-5V1.75z"
                ></path>
                <path d="M4.997 6.178a.75.75 0 10-1.493.144L4.916 20.92a1.75 1.75 0 001.742 1.58h10.684a1.75 1.75 0 001.742-1.581l1.413-14.597a.75.75 0 00-1.494-.144l-1.412 14.596a.25.25 0 01-.249.226H6.658a.25.25 0 01-.249-.226L4.997 6.178z"></path>
                <path d="M9.206 7.501a.75.75 0 01.793.705l.5 8.5A.75.75 0 119 16.794l-.5-8.5a.75.75 0 01.705-.793zm6.293.793A.75.75 0 1014 8.206l-.5 8.5a.75.75 0 001.498.088l.5-8.5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Company;
