import React from 'react';

import './language-menu.style.scss';

import brazilBrand from '../../../img/brand/brazil-brand.jpg';
import britishBrand  from '../../../img/brand/britsh-brand.jpg';
import chinaBrand from '../../../img/brand/china-brand.png';

const I18N_STORAGE_KEY = 'i18nextLng';

const Language = () =>{

    const languageSelectChange = (event: any) => {
        

        localStorage.setItem(
            I18N_STORAGE_KEY, 
            event.target.value
        )
       window.location = window.location;
       console.log(localStorage);
    }

    
    return (
        <nav className="language-container">
            <form className="language-menu">

                <div className="language-item">
                    <input type='radio' onClick={languageSelectChange} value='pt-BR' id='pt-BR' name='pt-BR'/>
                    <label htmlFor="pt-BR">
                        <img src={brazilBrand} alt="this is a Brazilian Portuguese Brand" />
                    </label>
                </div>


                <div className="language-item">
                <input type='radio' onClick={languageSelectChange} value='en-US' id='en-US' name='en-US'/>
                <label htmlFor="en-US">
                    <img src={britishBrand} alt="this is a british english brand" />
                </label>
                </div>


                <div className="language-item">
                    <input type='radio' onChange={languageSelectChange} value='zh-cn' id='zh-cn' name='zh-cn'/>
                        <label htmlFor="zh-cn">
                             <img src={chinaBrand} alt="this is a china Mandarim brand" />
                        </label>
                 </div>

            </form>
        </nav>
    )
}

export default Language;