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
                    <a href="#linkdin" className="aside-menu-item--link" target={"blank"}>
                        <AiFillLinkedin/>
                    </a>
                </li>

                <li className="aside-nav-menu-item">
                    <a href="#github" className="aside-menu-item--link" target={"blank"}>
                        <AiFillGithub />
                    </a>
                </li>

                <li className="aside-nav-menu-item">
                    <a href="#api-whatsapp" className="aside-menu-item--link" target={"blank"}>
                     <FaWhatsappSquare />
                    </a>
                </li>
            </ul>
        </nav>
        )
}

export default AsideMenu;