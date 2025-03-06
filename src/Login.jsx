import { useState } from "react";
import './Login.css';
function Login(){
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [darkMode, setDarkMode] = useState(false);
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
            setMsg(''), 5000);
    }
    return(
        <>
           <div className="logindiv">
            <h1>Login Form</h1>
            <form>
                <label> Email id </label>
                <input type = "email" value ={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label> Password </label>
                <input type = "password" value ={passwd} onChange={(e) => setPasswd(e.target.value)}></input>
                <input type = "submit" onClick={handleEventLogin}></input>
            </form>
            {msg && <div className = { `popup ${msg ? "show" : ""} `}> {msg} </div>}
            </div>
        </>
    );
}
export default Login