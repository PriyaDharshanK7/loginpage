import { useState } from "react";
function Login(){
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const userData = {
        email: 'usertest@gmail.com',
        passwd: 'usertest@123'
    }
    const handleEventLogin = (e) => {
        e.preventDefault()
        if(email === userData.email && passwd === userData.passwd){
            alert('Valid Credentials')
        }
        else{
            alert('Invalid Credentials')
        }
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
            </div>
        </>
    );
}
export default Login