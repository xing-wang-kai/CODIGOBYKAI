import React from 'react';
import './body.style.scss';

import AsideMenu from './asidemenu/asidemenu.component';
import About from './contains/about/about.component';
import Works from './contains/works/works.components';
import Contact from './contains/contact/contact.component';
import Certificates from './contains/certificates/certificates.component';
import Display from './contains/display/display.component';


const Body = () => {
    return (
        <main className="body-container">
           <AsideMenu/>
           <Display/>
           <Works/>
           <About/>
           <Certificates/>
           <Contact/>
           
        </main> 
        )
}

export default Body;