import React from 'react';
import { i18n } from '../../translate/i18n';

import './header.style.scss';

import logoimg from '../../img/logo-Kodigo-nobg-normal.png';


const Header = () => {
    return (
     <header className='header-container'>
       <div className='img-container'>
          <a href="#home">
               <img className='img-source' src={logoimg} alt='logo kogido by kai'/>
          </a>
       </div>
       <nav className='nav-menu-container'>
            <ul className='nav-menu-list'>
               <li className="nav-menu-item"><a href="#sobre">{i18n.t('header.menu.about')}</a></li>
               <li className="nav-menu-item"><a href="#projetos">{i18n.t('header.menu.works')}</a></li>
               <li className="nav-menu-item"><a href="#certificados">{i18n.t('header.menu.certificates')}</a></li>
               <li className="nav-menu-item"><a href="#contato">{i18n.t('header.menu.contact')}</a></li>
               
            </ul>
       </nav>
     </header>
    )
    
}

export default Header;