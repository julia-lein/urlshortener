import React, { useState } from 'react';
import login from '../API/loginUser.js';

function Login() {
    const [ inputEmail, setInputEmail ] = useState("");
    const [ inputPassword, setInputPassword ] = useState("");

    const handleInputEmail = (e) =>
    {
        setInputEmail(e.target.value);
    }

    const handleInputPassword = (e) =>
    {
        setInputPassword(e.target.value);
    }

    const loginUser = () =>
    {
      const user =
      {
        email: inputEmail,
        password: inputPassword
      }
      //console.log(user);

      login(user);

      setInputEmail("");
      setInputPassword("");
    }

    return (
                
             <div className="container col-xxl-8 px-4 py-5">
                <div>
                    <form className="form-floating row flex-lg-row g-5 py-5" action="">
                        <div className="col-sm-6 mx-auto">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="inputLink" value={ inputEmail } required onChange={ handleInputEmail } />
                                <label for="inputText">Email:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="inputLink" value={ inputPassword } required onChange={ handleInputPassword } />
                                <label for="inputText">Password:</label>
                            </div>
                        </div>
                         <div className="text-center mt-4"><button className="btn btn-lg px-4 fill" onClick={ loginUser }>Log in</button></div>
                        
                    </form>
                </div>
            </div>
    )
}

export default Login
