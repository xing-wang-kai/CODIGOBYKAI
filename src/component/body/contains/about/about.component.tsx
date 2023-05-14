import React from 'react';
import './about.style.scss';
import { FaChromecast } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import {i18n} from '../../../../translate/i18n';

const About = () =>{
    return (
        <div className="about-container" id='sobre'>
            <fieldset className='body-titles--fieldset' >
              <legend className='body-titles'>{i18n.t('main.about.principal')}</legend>
            </fieldset>

            <div className="about-infor-card">
             <div className='about-info'>
                <h3 className='about-info-title'>{i18n.t("main.about.title")}</h3>
                <p className='about-info-details'>{i18n.t('main.about.paragraph1')} <a href='#certificado'>{i18n.t('main.about.paragraphlink')}</a> 
               </p>
               <br />
               <p className='about-info-details'>{i18n.t('main.about.paragraph2')} </p>
               <br />
            </div>
            <div className='about-functions'>
                <div className='about-functions__card'>
                    <FaChromecast  className='designer-icon'/>
                    <div>
                        <h4>{i18n.t('main.about.function.cards.frontend.title')}</h4>
                        <hr/>
                        <p>{i18n.t('main.about.function.cards.frontend.description')}</p>
                    </div>
                </div>

                <div className='about-functions__card'>
                    <FaLaptopCode  className='designer-icon'/>
                    <div>
                        <h4>{i18n.t('main.about.function.cards.backend.title')}</h4>
                        <hr/>
                        <p>{i18n.t('main.about.function.cards.frontend.description')}</p>
                    </div>
                </div>

                <div className='about-functions__card'>
                    <GiConsoleController  className='designer-icon' />
                    <div>
                        <h4>{i18n.t('main.about.function.cards.games.title')}</h4>
                        <hr/>
                        <p>{i18n.t('main.about.function.cards.games.description')}</p>
                    </div>
                </div>

            </div>
        </div>
           
        </div>
       
        )
}

export default About;