import React from 'react';
import './about.style.scss';
import { FaChromecast } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";

const About = () =>{
    return (
        <div className="about-container" id='sobre'>
            <fieldset className='body-titles--fieldset' >
              <legend className='body-titles'>Um pouco sobre mim</legend>
            </fieldset>

            <div className="about-infor-card">
             <div className='about-info'>
                <h3 className='about-info-title'>Me chamo <span>Kai,</span> desenvolvedor web fullstack</h3>
                <p className='about-info-details'>Sou apaixonado por códigos durantes os anos me aperfeiçoei como programador Web Fullstack, tenho certificados voltados ao backend e frontend em diversas tecnologias, consulte meus <a href='#certificado'>certificados</a> 
               </p>
               <br />
               <p className='about-info-details'> Sou certificado pela Google para procedimento de implementação de conversões para campanhas no Google ADS, Remarketing, conversões otimizadas, e configurações no Google Analytics 4, por códigos ou Google Tag Manager (GTM)</p>
               <br />
            </div>
            <div className='about-functions'>
                <div className='about-functions__card'>
                    <FaChromecast  className='designer-icon'/>
                    <div>
                        <h4>Desenvolvedor Front-end</h4>
                        <hr/>
                        <p>HTML, CSS, Javascript, boa práticas com código, conhecimentos em frameworks como REACT, Sass, metodologia Lem, css Display Grid, boas aplicações em Class e Div para otimização do site em campanhas google ads </p>
                    </div>
                </div>

                <div className='about-functions__card'>
                    <FaLaptopCode  className='designer-icon'/>
                    <div>
                        <h4>Desenvolvedor Back-end</h4>
                        <hr/>
                        <p>Java, TypeScript, python, conhecimento em frameworks como Spring, nodejs, express, metodologia ágil com aplicações em RESTfull, ORM(Object-relational-Mapping), boas práticas MVC(model - view - control).</p>
                    </div>
                </div>

                <div className='about-functions__card'>
                    <GiConsoleController  className='designer-icon' />
                    <div>
                        <h4>Desenvolvedor Games</h4>
                        <hr/>
                        <p>habilidades de desenvolvimento de games e já desenvolvi Motores para jogos com JAVA, também tenho habilidades em ultilizar ferramentas modernas para desenvolvimento de games 2d e 3d como Unity.</p>
                    </div>
                </div>

            </div>
        </div>
           
        </div>
       
        )
}

export default About;