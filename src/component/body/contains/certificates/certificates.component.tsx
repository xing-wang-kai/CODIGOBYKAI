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

const Certificates = () =>{

    const [ link, setLink ] = useState<string>();

    if(localStorage.getItem('I18N_STORAGE_KEY')=='pt-BR'){
        setLink("education");
    }else if(localStorage.getItem('I18N_STORAGE_KEY') == 'en-US'){
        setLink("education.en");
    }
    else if(localStorage.getItem('I18N_STORAGE_KEY') == 'zh-cn'){
        setLink("education.zn")
    }

    const [ certificates, setCetificates ] = useState<ICertificate[]>([]);

    useEffect(  () => {
        fetch(`https://koderbykai.vercel.app/static/data/{link}.json`)
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