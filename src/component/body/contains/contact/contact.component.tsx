import React from 'react';
import { i18n }  from '../../../../translate/i18n';

import './contact.style.scss';

const Contact = () =>{
 
    const placer = {
        name: i18n.t('main.contact.form.placeholder.name'),
        email: i18n.t('main.contact.form.placeholder.email'),
        phone: i18n.t('main.contact.form.placeholder.phone'),
        message: i18n.t('main.contact.form.placeholder.message')


    }

    const customErrorMessage = {
        name: {
            valueMissing: 'O Campo "Nome" precisa ser preenchido',
            customError: 'Não deixe o campo Nome vázio'
        },
        email: {
            valueMissing: 'O campo "e-mail" precisa ser preenchido',
            customError: 'O formato do e-mail não é válido'
        },
        mesagem: {
            valueMissing: 'O Campo "Mensagem" precisa ser preenchido',
            customError: 'Não deixe o campo Mensagem vázio'
        }
    }

    return(
        <div className='form-container' id='contato'>
            <fieldset className='body-titles--fieldset' >
                 <legend className='body-titles'>{i18n.t('main.contact.title')}</legend>
                 <p className='body-description'>{i18n.t('main.contact.paragraph')}</p>
         </fieldset>
        <form className='form' action="https://formsubmit.co/deusnir.portela.java.developer@gmail.com" method='POST'>
            <fieldset className='form-fieldset'>
                <legend className='form-legend'></legend>
                    <div className='form-div-name form-div__item'>
                        <label className='form-div__item__label' htmlFor='nome'>{i18n.t('main.contact.form.label.name')}</label>
                        <input className='form-div__item__input' type="text" name='nome' placeholder={placer.name}/>
                        <span className="form-div__item-input-error-message">{customErrorMessage.name.customError}</span>
                        <br />
                    </div>

                    <div className='form-div-email form-div__item'>
                        <label htmlFor='email'>{i18n.t('main.contact.form.label.email')}</label> 
                        <input id='email' type='email' name='email'  placeholder={placer.email}/> 
                        <span className="form-div__item-input-error-message">{customErrorMessage.email.customError}</span>
                        <br />
                    </div>

                    
                    <div className='form-div-telefone form-div__item'>
                        <label htmlFor='tel'>{i18n.t('main.contact.form.label.phone')}</label> 
                        <input id='tel' type='tel' name='tel'  placeholder={placer.phone}/> 
                        <span className="form-div__item-input-error-message">Este campo é obrigatório verifique os dados</span>
                        <br />
                    </div>

                    <div className='form-div-message form-div__item'>
                        <label htmlFor='message'>{i18n.t('main.contact.form.label.message')}</label> 
                        <textarea name='message' rows={10}   placeholder={placer.message}></textarea> 
                        <span className="form-div__item-input-error-message">{customErrorMessage.mesagem.customError}</span>
                        <br />
                    </div>

                    <button type='submit'>{i18n.t('main.contact.form.button.text')}</button>
                    
            </fieldset>
         </form>
         </div>
         
)}

export default Contact;