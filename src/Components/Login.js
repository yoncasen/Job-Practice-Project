import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginAsync } from "../redux/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  // To rerender after login dispatch
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/main");
    }
  }, [navigate, isLoggedIn]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginAsync({
        username: username,
        password: password,
        companyCode: companyCode,
      })
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar p-5 container-fluid navbar-expand-sm bg-dark mb-auto">
        <div className="">
          <a class="navbar-brand " href="https://arunayazilim.com/">
            <img
              src="/logo-light.png"
              className="float-start img-fluid"
              alt="aruna-logo"
            />
          </a>
        </div>
      </nav>

      {/* 
      LOGIN FORM
       */}

      <div className="d-flex justify-content-center p-5">
        <form
          // col-sm-8 col-md-6 col-lg-5 col-xl-4
          className="col-sm-8 col-md-6 col-lg-5 col-xl-4 p-5 was-validated"
          onSubmit={onSubmit}
        >
          <div className="form-floating mb-4">
            <select
              className="form-select"
              id="code"
              name="companyCode"
              value={companyCode}
              onChange={(event) => setCompanyCode(event.target.value)}
              required
            >
              <option
                value=""
                selected
                disabled
                className="text-secondary"
              ></option>
              <option value="101">101</option>
              <option value="102">102</option>
              <option value="103">103</option>
            </select>
            <label for="code" class="form-label">
              Firma Kodu seçiniz:
            </label>
            <div class="valid-feedback"></div>
          </div>

          <div className="mb-3">
            <input
              className="form-control"
              type="name"
              placeholder="Kullanıcı Adı"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            ></input>
            <div class="valid-feedback"></div>
          </div>

          <div className="mb-4">
            <input
              className="form-control"
              type="password"
              placeholder="Parola"
              value={password}
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              required
            ></input>
            <div class="valid-feedback"></div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>

      <nav className="navbar p-4 mt-auto navbar-expand-sm container-fluid bg-dark navbar-dark">
        <div className="container-fluid bg-dark text-white">
          <span className="navbar-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-c-circle"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
            </svg>
            &nbsp; 2022 Aruna Yazılım
          </span>
          <ul className="nav text-center justify-content-end">
            <li class="nav-item">
              <a
                className="nav-link link-light text-decoration-none"
                href="https://arunayazilim.com/hakkimizda/"
              >
                Hakkımızda
              </a>
            </li>
            <li class="nav-item">
              <a
                className="nav-link link-light text-decoration-none"
                href="https://arunayazilim.com/iletisim/"
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Login;
