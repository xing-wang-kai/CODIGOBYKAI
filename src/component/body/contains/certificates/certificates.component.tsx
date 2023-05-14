import React, {useEffect, useState}  from 'react';
import { i18n } from '../../../../translate/i18n';

import './certificates.style.scss';

interface ICertificate {
    'id':number;
    'title': string;
    'tag':string;
    'description': string;
    'link': string;

}

let link = '';
const storage = window.localStorage.getItem('i18nextLng')

    if(storage === 'pt-BR'){
        link = 'education';
    }else if (storage === 'en-US'){
        link = "education.en";
    }
    else{
        link = "education.zn"
    } 

const Certificates = () =>{
      

    const [ certificates, setCetificates ] = useState<ICertificate[]>([]);
    console.log(`https://koderbykai.vercel.app/static/data/${link}.json`)

    useEffect(  () => {
        fetch(`https://koderbykai.vercel.app/static/data/${link}.json`)
                .then((response) => response.json() )
                .then(setCetificates)
                .catch(e=>console.log(e));
    }, [])


    if (!certificates || !certificates.length ) return null;

   
    return (
        <div className='resume-container' id='certificados'>

            <div className='resume-education'>
            <fieldset className='body-titles--fieldset' >
                  <legend className='body-titles'>{i18n.t('main.certificates.title')}</legend>
            </fieldset>
                <div className='resume-education--cards'>

                {
                    certificates.map( (item) => (
                        <div key={item.id} className='resume-education--card'>
                            <div className="resume-education--details">
                                <h3 className='resume-education__tag'>{item.tag}</h3>
                                <h4 className='resume-education__title '>{item.title}</h4>
                                <p className='resume-education__description'>{item.description}</p>

                                <button className="resume-education__button"><a href={item.link} target="_blank" rel="noopener noreferrer">{i18n.t('main.certificates.cards.button')}</a></button>
                            </div>
                            
                          

                        </div>
                    ))
                }
                

                </div>
            </div>

        </div>
        
    );
}

export default Certificates;