import { useState } from "react";
import './Login.css';
function Login(){
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    //const [darkMode, setDarkMode] = useState(false);
    const [showPasswd, setShowPasswd] = useState(false);
    const [msg, setMsg] = useState('');
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [eyeanim, setEyeanim] = useState(false);
    const userData = {
        email: 'user@test.com',
        passwd: 'usertest@123'
    }
    const handleEventLogin = (e) => {
        e.preventDefault()
        if(email === userData.email && passwd === userData.passwd){
            setMsg('Hi, Welcome Back!, '+ email)
        }
        else{
            setMsg(`Oops! User Email not found, Please Sign Up to continue`)
        }
        setTimeout(() => 
            setMsg(''), 3000);
    }
    const handleMouseMove = (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 75; 
        const y = (e.clientY - window.innerHeight / 2) / 75;
        setMousePos({ x, y });
      };
    const handleoAuth = (method) => {
        setMsg(`Logging in with ${method}...`)
        setTimeout(() => setMsg(''), 3000);
      }; 
    const toggleEye = () => {
        setEyeanim(true);
        setShowPasswd(!showPasswd);
        setTimeout(() => {setEyeanim(false)}, 400);
    } 
    return(
        <>
           <div className="logincont" onMouseMove={handleMouseMove}>
                <div className="logindiv" style = {{transform: `translate(${mousePos.y}px) rotate(${mousePos.x / 5}deg)`}}>
                    <h1>Welcome Back !</h1>
                    <form id = "loginform" onSubmit={handleEventLogin}>
                        <label> Email id </label>
                        <input type = "email" value ={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <label> Password </label>
                        <div className={`passwd-wrapper ${showPasswd ? "passwd-anim" : ""}`}>
                            <input type={showPasswd ? "text" : "password"} value={passwd} onChange={(e) => setPasswd(e.target.value)} className={`passwdip ${showPasswd ? "show-anim" : " "} ${eyeanim ? "eye-anim" : ""}`} /> 
                            <span className="eye" onClick={toggleEye}>{showPasswd ? (
                                <svg className={`eye-icon ${eyeanim ? "animate" : ""}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6f61" strokeWidth="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                                </svg>) : (
                                <svg className={`eye-icon ${eyeanim ? "animate" : ""}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6f61" strokeWidth="2">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                <line x1="1" y1="1" x2="23" y2="23" />
                                </svg>)}
                            </span>
                        </div>
                        <input type = "submit" form="loginform"  value={"Login"}/>
                        <div className="oauth2">
                            <p>Or Continue With</p>
                            <div className="oauthbtns">
                                <button type = "button" className="google" onClick={() => handleoAuth('Google')}>Google</button>
                                <button type = "button" className="fb" onClick={() => handleoAuth('Facebook')}>Facebook</button>
                            </div>
                        </div>
                        <a href = "#" className="forgothref"> Forgot Password? </a>
                        
                    </form>
                </div>
                {msg && <div className = { `popup ${msg ? "show" : ""} `}> {msg} </div>}
            </div>
        </>
    );
}
export default Login