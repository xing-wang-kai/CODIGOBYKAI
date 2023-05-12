import React from 'react';
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
               <li className="nav-menu-item"><a href="#sobre">Sobre</a></li>
               <li className="nav-menu-item"><a href="#projetos">Projetos</a></li>
               <li className="nav-menu-item"><a href="#certificados">Certificados</a></li>
               <li className="nav-menu-item"><a href="#contato">Contato</a></li>
               
            </ul>
       </nav>
     </header>
    )
    
}

export default Header;