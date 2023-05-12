import './display.style.scss';
import React from 'react';

import logo from '../../../../img/logo-koder-pb-normal.png';


const Display = () => {
    return (
        <div className="display-container" id='home'>
            <div className="display-item item-left">

            </div>
            <div className="display-item " id='item-right'>
                <h2 className="display-item--title">
                    <img src={logo} alt="imagem da logo do koder" className="display-item--title__img" />
                </h2>
                <p className="display-item--description">
                Desenvolvedor Fullstack que escreve código limpo, elegante e eficiente
                </p>
            </div>
        </div>
    );
}

export default Display;