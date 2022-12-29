import OptionLogin from './../Components/OptionLogin';
import React from 'react';
import ButtonLR from '../Components/ButtonLR';



function Register(){
    return(
        <div>
            <OptionLogin Titulo={'login'}/>
            <div className='px-10 flex flex-col bg-red-400'>
                <input className='bg-slate-200 py-4 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4' 
                type="text" name="FullName" id="FullName" placeholder='Full name' />
                <input className='bg-slate-200 py-4 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4' 
                type="email" name="Email" id="Email" placeholder='Enter Email Address' />
                <input className='bg-slate-200 py-4 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4' 
                type="password" name="Password" id="Password" placeholder='Password'/>
                <input className='bg-slate-200 py-4 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4' 
                type="password" name="ConfirmedPassword" id="ConfirmedPassword" placeholder='Confirm Password'/>
                <div className='flex items-center mb-20 font-bold text-xs'>
                    <input className='w-5 h-5 mr-2' type="checkbox" name="check" id="check" />
                    <p>Ive read and agree to the <a className='text-blue-800'>terms</a>
                    of privacy <a className='text-blue-800'>policy</a></p>
                </div>
                <ButtonLR TextButton={'Register'}/>
            </div>
        </div>
    )
}


export default Register

