import React from 'react';
import './asidemenu.style.scss';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";


const AsideMenu = () => {
    return (
        <nav className="aside-nav-container">
            <ul className="aside-nav-menu">

                <li className="aside-nav-menu-item">
                    <a href="https://www.linkedin.com/in/deusnir-portela-633b90181/" className="aside-menu-item--link" target={"blank"}>
                        <AiFillLinkedin/>
                    </a>
                </li>

                <li className="aside-nav-menu-item">
                    <a href="https://github.com/xing-wang-kai" className="aside-menu-item--link" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </li>

                <li className="aside-nav-menu-item">
                    <a href="https://wa.me/5511990150864?text=%3Ckoder%3E+Logo+vou+te+atender+%5E%5E%2F" className="aside-menu-item--link" target={"blank"}>
                     <FaWhatsappSquare />
                    </a>
                </li>
            </ul>
        </nav>
        )
}

export default AsideMenu;