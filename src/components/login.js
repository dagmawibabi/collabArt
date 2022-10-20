import { useState } from 'react';
import './login.css'
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
    const [isLogin, setLogin] = useState(true);
    function loginSignup() {
        setLogin(!isLogin)
    }
    let navigate = useNavigate();
    function login() {
        let username = document.getElementsByClassName("inputBoxes")[0].value;
        let password = document.getElementsByClassName("inputBoxes")[1].value;
        props.login(username, password, navigate);
    }
    return (
        <div>
            <div className="forms">
                <span className='formTitle'> {isLogin ? "Login" : "Sign Up"} </span> <br/> <br/>
                <span className='formLabels' > Username </span> <br/>
                <input type="text" className='inputBoxes' /> <br/>
                <span className='formLabels' > Password </span> <br/>
                <input type="password" className='inputBoxes' /> <br/> <br/>
                <button onClick={login} className='button'> {isLogin ? "Login" : "Sign Up"} </button> <br/> <br/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <span> Have an account? <span style={{color: "cyan"}} onClick={loginSignup}> {isLogin ? "Sign Up" : "Login"} </span> </span>
                </div>
            </div>
        </div>
    );
} 