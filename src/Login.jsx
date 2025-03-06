import { useState } from "react";
import './Login.css';
function Login(){
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    //const [darkMode, setDarkMode] = useState(false);
    const [showPasswd, setShowPasswd] = useState(false);
    const [msg, setMsg] = useState('');
    const userData = {
        email: 'usertest@gmail.com',
        passwd: 'usertest@123'
    }
    const handleEventLogin = (e) => {
        e.preventDefault()
        if(email === userData.email && passwd === userData.passwd){
            setMsg('Welcome Back!, '+ email)
        }
        else{
            setMsg(`Oops! Can't find ${email}, Please Sign Up to continue`)
        }
        setTimeout(() => 
            setMsg(''), 3000);
    }
    return(
        <>
           <div className="logincont">
                <div className="thread"></div>
                <div className="logindiv">
                    <h1>Login Form</h1>
                    <form id = "loginform" onSubmit={handleEventLogin}>
                        <label> Email id </label>
                        <input type = "email" value ={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label> Password </label>
                        <div className="passwd-wrapper">
                            <input type={showPasswd ? "text" : "password"} value={passwd} onChange={(e) => setPasswd(e.target.value)} className={showPasswd ? "show-anim" : ""} /> 
                            <span className="eye" onClick={() => setShowPasswd(!showPasswd)}> {showPasswd ? "Hide" : "Show"} </span>     
                        </div>
                        <input type = "submit" form="loginform" />
                    </form>
                </div>
                {msg && <div className = { `popup ${msg ? "show" : ""} `}> {msg} </div>}
            </div>
        </>
    );
}
export default Login