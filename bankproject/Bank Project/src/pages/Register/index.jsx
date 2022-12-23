
import OptionLogin from './../Components/OptionLogin';
import ButtonComponents from './../Components/ButtonComponents';

function Register(){
    return(
        <div className='bg-pink-200 flex justify-center flex-col items-center'>
        <OptionLogin Titulo={'Register'}/>
        <form action="" method="get" className='w-80  bg-red-200'>
        <input className='text-start w-full h-12 py-4 pl-3 rounded mb-3' 
        type="text" name="" id="" placeholder='Full name' />
        
        <input className='text-start w-full h-12 py-4 pl-3 rounded mb-3' 
        type="text" name="" id="" placeholder='Enter Email Address' />
        
        <input className='text-start w-full h-12 py-4 pl-3 rounded mb-3' 
        type="password" name="" id="" placeholder='Password' />
        
        <input className='text-start w-full h-12 py-4 pl-3 rounded mb-3' 
        type="password" name="" id="" placeholder='Confirm Password' />
        
        <div className='flex mb-20'>
            <input className='w-5 ' type="checkbox" name="" id="" />
            <p className='text-xs ml-2 '>Eu li e concordo com os termos da política de privacidade</p>
        </div>
        
        <ButtonComponents>{'Register'}</ButtonComponents>
        
        </form>
        </div>
    )
}

export default Register


