import OptionLogin from './pages/Components/OptionLogin';
import React from 'react';
import ButtonLR from './pages/Components/ButtonLR';
import RodapeLoginRegister from './pages/Components/RodapeLoginRegister';



export function Register(){
    return(
        <div>
            {/* componente de login com opçoes  */}
            <OptionLogin Titulo={'login'} />

            {/* formulario de name email senha  */}
            <div className='px-10 flex flex-col mb-16'>

                {/* name  */}
                <input className='bg-slate-200 py-4 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4' 
                type="text" name="FullName" id="FullName" placeholder='Full name' />
                {/* email  */}
                <input className='bg-slate-200 py-4 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4' 
                type="email" name="Email" id="Email" placeholder='Enter Email Address' />
                {/* senha  */}
                <input className='bg-slate-200 py-4 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4' 
                type="password" name="Password" id="Password" placeholder='Password'/>
                {/* confirme senha  */}
                <input className='bg-slate-200 py-4 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4' 
                type="password" name="ConfirmedPassword" id="ConfirmedPassword" placeholder='Confirm Password'/>
                {/* aceitar termos de cadastro  */}
                <div className='flex items-center mb-20 font-bold text-xs'>
                    <input className='w-5 h-5 mr-2' type="checkbox" name="check" id="check" />
                    <p>I've read and agree to the <a className='text-blue-800 cursor-pointer'>terms</a> of privacy <a className='text-blue-800  cursor-pointer'> policy</a></p>
                </div>
                {/* botao de registro  */}
                <ButtonLR TextButton={'Register'}></ButtonLR>
                
                
                {/*component opção de pular etapa e ir para login  */}
                <RodapeLoginRegister Text='Already have an account?' Link='login'></RodapeLoginRegister>
                
            </div>
        </div>
    )
}

