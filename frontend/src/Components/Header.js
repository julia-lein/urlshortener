import React from 'react';
import logo from '../img/logo.png';

function Header() {
    return (
        <header className="header p-3 text-white">
            <nav className="navigation navbar navbar-expand-lg navbar-dark ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img className="bg-light" src={ logo } alt="" width="40" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-end">
                                <a className="nav-link active" aria-current="page" href="#">MenuLink1</a>
                            </li>
                            <li className="nav-item text-end">
                                <a className="nav-link" href="#">MenuLink2</a>
                            </li>
                            <li className="nav-item text-end">
                                <a className="nav-link" href="#">MenuLink3</a>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-outline-light me-2 login-button"> <a href="/login">Login</a> </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
