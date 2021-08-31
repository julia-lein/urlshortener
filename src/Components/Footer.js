import React from 'react';
import logo_instagram from '../img/instagram.png';
import logo_facebook from '../img/facebook-app-logo.png';
import logo_twitter from '../img/twitter.png';

function Footer() {
    return (
        <footer className="border-top mt-auto container-fluid d-flex flex-wrap align-items-center py-3 my-4">
            <div className="d-flex vw-100 justify-content-center pb-2">
                <ul className="nav list-unstyled d-flex">
                    <li className="ms-3"><a className="text-muted" href="#"><img src={ logo_instagram } width="24" height="24" alt="" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><img className="rounded" src={ logo_facebook } width="24" height="24" alt="" /></a></li>
                    <li className="ms-3"><a className="text-muted" href="#"><img src={ logo_twitter } width="24" height="24" alt="" /></a></li>
                </ul>
            </div>

            <div className="d-flex vw-100 justify-content-center align-items-center">
                <span className="text-muted">© 2021 Urlshortener, Inc</span>
            </div>
  
        </footer>
    )
}

export default Footer;
