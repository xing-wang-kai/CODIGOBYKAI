import './footer.style.scss';

import React from 'react';
import logo from '../../img/logo-koder-pb-normal.png';

const Footer = () => {

    return (

        <footer className="footer-container">
            <div className="footer-cards">
                <div className="details">
                    <h3 className="footer-title">
                        &copy; koder by kai wang
                    </h3>
                    <p className="footer-phone">
                        +55 (11) 99015 - 0864 ( whatsapp )
                    </p>
                    <p className="footer-mail">
                        deusnir.portela.java.developer@gmail.com
                    </p>

                </div>
                <div className="logo">
                    <img src={logo} alt="logo do site koder by kai" />
                </div>

            </div>

        </footer>
    );

}

export default Footer;