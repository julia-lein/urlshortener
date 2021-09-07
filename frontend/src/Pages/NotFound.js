import React from 'react'
import Main from '../Components/Main'
import StartPage from './StartPage'
import notfound from '../img/404-page.jpg'


function NotFound() {
    return (
        <div className="pic-button">
            <div className="backtohomepage text-center mt-4"><button className=" button-back btn btn-lg px-4 fill"> <a href="/">Back to Homepage</a> </button>
            <div className="notfoundpic"><img src={notfound} alt={"notfound"}/></div>
            
            
            </div>
        </div>
    )
}

export default NotFound