import OptionLogin from '../Components/OptionLogin';
import React from 'react';
import ButtonLR from '../Components/ButtonLR';
import RodapeLoginRegister from '../Components/RodapeLoginRegister';
import { InputComponents } from '../Components/InputComponets';



export function Register(){
    return(
        <div className='md:w-4/6 flex flex-col mx-auto'>
            {/* componente de login com opçoes  */}
            <OptionLogin Titulo={'login'} />

            {/* formulario de name email senha  */}
            <div className='px-10 flex flex-col mb-8'>

                {/* name  */}
                <InputComponents TypeInput={'text'} NameInput={'NameInput'} 
                Placeholder={'Full name'}></InputComponents>
                
                {/* email  */}
                <InputComponents TypeInput={'email'} NameInput={'EmailInput'} 
                Placeholder={'Enter Email Address'}></InputComponents>

                {/* senha  */}
                <InputComponents TypeInput={'password'} NameInput={'PasswordInput'} 
                Placeholder={'Password'}></InputComponents>

                {/* confirme senha  */}
                <InputComponents TypeInput={'password'} NameInput={'PasswordInput'} 
                Placeholder={'Confirmed Password'}></InputComponents>
                
                {/* aceitar termos de cadastro  */}
                <div className='flex items-center mb-18 font-bold text-xs'>
                    <input className='w-5 h-5 mr-2' type="checkbox" name="check" id="check" />
                    <p>I've read and agree to the <a className='text-blue-800 cursor-pointer'>terms</a> of privacy <a className='text-blue-800  cursor-pointer'> policy</a></p>
                </div>
                <div className='mt-4'>
                {/* botao de registro  */}
                <ButtonLR TextButton={'Register'}></ButtonLR>
                </div>
                
                <div className='mt-6'>
                {/*component opção de pular etapa e ir para login  */}
                <RodapeLoginRegister Text='Already have an account?' Link='login'></RodapeLoginRegister>
                

                </div>
            </div>
        </div>
    )
}

