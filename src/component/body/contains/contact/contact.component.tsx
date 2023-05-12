import React from 'react';
import './contact.style.scss';

const Contact = () =>{

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
                 <legend className='body-titles'>Entre em contato comigo</legend>
                 <p className='body-description'>Faça agora mesmo seu orçamento! </p>
         </fieldset>
        <form className='form' action="https://formsubmit.co/deusnir.portela.java.developer@gmail.com" method='POST'>
            <fieldset className='form-fieldset'>
                <legend className='form-legend'></legend>
                    <div className='form-div-name form-div__item'>
                        <label className='form-div__item__label' htmlFor='nome'>Nome: </label>
                        <input className='form-div__item__input' type="text" name='nome' placeholder='Forneça seu Nome*'/>
                        <span className="form-div__item-input-error-message">{customErrorMessage.name.customError}</span>
                        <br />
                    </div>

                    <div className='form-div-email form-div__item'>
                        <label htmlFor='email'>Email: </label> 
                        <input id='email' type='email' name='email'  placeholder='Digite aqui o seu e-mail*'/> 
                        <span className="form-div__item-input-error-message">{customErrorMessage.email.customError}</span>
                        <br />
                    </div>

                    
                    <div className='form-div-telefone form-div__item'>
                        <label htmlFor='tel'>Telefone: </label> 
                        <input id='tel' type='tel' name='tel'  placeholder='Agora me informe seu melhor telefone*'/> 
                        <span className="form-div__item-input-error-message">Este campo é obrigatório verifique os dados</span>
                        <br />
                    </div>

                    <div className='form-div-message form-div__item'>
                        <label htmlFor='message'>Mensagem: </label> 
                        <textarea name='message' rows={10}   placeholder='Deixe sua mensagem aqui!*'></textarea> 
                        <span className="form-div__item-input-error-message">{customErrorMessage.mesagem.customError}</span>
                        <br />
                    </div>

                    <button type='submit'>Enviar</button>
                    
            </fieldset>
         </form>
         </div>
         
)}

export default Contact;