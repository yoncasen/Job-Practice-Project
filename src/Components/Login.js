import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginAsync } from "../redux/userSlice";


export default function Login() {

    const [username, setUsername] = useState('')
    const [companyCode, setCompanyCode] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)

    useEffect(() => {
        if(isLoggedIn) {
            navigate('/main')
        }
    },[navigate,isLoggedIn])


    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(loginAsync({
            username: username,
            password: password,
            companyCode: companyCode
        }))
    }


    return(
        <div className="login-form-container"> 
            <form 
                className="login-form"  
                onSubmit={onSubmit}
            >
                <div className="login-form-content">
                    {/* <h1 className="login-form-title"> Aruna Mobil Sipariş</h1> */}
                    <div className="form-group mt-3">
                        <input 
                            type="name"
                            placeholder="Kullanıcı Adı"
                            name="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            className="form-control mt-1"
                        >
                        </input>
                    </div>

                    <div className="form-group mt-3">
                        <input 
                            type="name"
                            placeholder="Firma Kodu"
                            name="companyCode"
                            value={companyCode}
                            onChange={(event) => setCompanyCode(event.target.value)}
                            className="form-control mt-1"
                        >
                        </input>
                    </div>

                    <div className="form-group mt-3">
                        <input 
                            className="form-control mt-1"
                            type="password"
                            placeholder="Parola"
                            value={password}
                            name="password"
                            onChange={(event) => setPassword(event.target.value)}
                        >
                        </input>
                    </div>

                    <div className="d-grid gap-2 mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Login
                        </button>
                    </div>

                    
                </div>
            </form>
        </div>
    )
}
