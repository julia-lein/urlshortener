import React from 'react'

function Login() {
    return (
                
             <div className="container col-xxl-8 px-4 py-5">
                <div>
                    <form className="form-floating row flex-lg-row g-5 py-5" action="">
                        <div className="col-sm-6 mx-auto">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="inputLink" required />
                                <label for="inputText">Email:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="inputLink" required />
                                <label for="inputText">Password:</label>
                            </div>
                        </div>
                         <div className="text-center mt-4"><button className="btn btn-lg px-4 fill">Log in</button></div>
                        
                    </form>
                </div>
            </div>
    )
}

export default Login
