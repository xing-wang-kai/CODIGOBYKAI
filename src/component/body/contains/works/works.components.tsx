import './works.style.scss';

import { useEffect, useState, useRef } from 'react';
import { i18n } from '../../../../translate/i18n';
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";

type Item = {
    id: number;
    img: string;
    alt: string;
    description: string;
    title: string;
    link: string
}

let link = '';
const storage = window.localStorage.getItem('i18nextLng')

    if(storage === 'pt-BR'){
        link = 'works-cards.pt';
    }else if (storage === 'en-US'){
        link = "works-cards.en";
    }
    else{
        link = "works-cards.zn"
    } 

const Works = () => 
{
        const [workData, setWorkData] = useState([]);
        
        const carousel: any | null = useRef(null);

        useEffect( () => {
            fetch(`https://koderbykai.vercel.app/static/data/${link}.json`)
                .then((response) => response.json() )
                .then(setWorkData);
            }, []
        );

        const handleLeftClick = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(carousel.current.offsetWidth);
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
        const handleRightClick = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(carousel.current.offsetWidth);
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
            
        if (!workData || !workData.length ) return null;
    return(
        <div id='projetos'>
            <fieldset className='body-titles--fieldset' >
                 <legend className='body-titles'>{i18n.t('main.works.title')}</legend>
            </fieldset>
           
            <div className='carousel-container'>

                <div className='carousel' ref={carousel}>
                
                { workData.map( (item: Item) => {
                       
                       return(
                            <div className='item' key={item.id}>
                            <div className="image">
                                <img src={item.img} alt={item.alt}/>
                            </div>
                            <div className='info'>
                                <span className="title"> <h3>{item.title}</h3> </span>
                                <span className='description'> <p>{item.description}</p> </span>
                                <div  className="portifolio-button"><a href={item.link} target={"blank"}>{i18n.t("main.works.card.button")} </a></div>
                            </div>

                            </div>
                       )

                    })
                    }
                    
                    
                </div>
                <div className='buttons'>
                    
                    <button onClick={handleLeftClick} className="icon-carousel--button"><SlArrowLeftCircle className='leftIcon icon'/></button>
                    <button  onClick={handleRightClick} className="icon-carousel--button"><SlArrowRightCircle className='leftIcon icon'/></button>
                </div>


            </div>

        </div>
        )
}

export default Works;