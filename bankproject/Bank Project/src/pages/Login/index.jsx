
import { InputComponents } from "../Components/InputComponets";
import OptionLogin from "../Components/OptionLogin";
import ButtonLR from './../Components/ButtonLR';
import RodapeLoginRegister from './../Components/RodapeLoginRegister';

export function Login(){
    return(
        <div className='md:w-4/6 flex flex-col mx-auto'>
            {/* componente de login com opçoes  */}
            <OptionLogin Titulo={'Login'} />

            {/* formulario de name email senha  */}
            <div className='px-10 flex flex-col mb-8'>

                {/* email  */}
                <InputComponents TypeInput={'email'} NameInput={'EmailInputLogin'} 
                Placeholder={'Enter Email Address'}></InputComponents>

                {/* senha  */}
                <InputComponents TypeInput={'password'} NameInput={'PasswordInputLogin'} 
                Placeholder={'Password'}></InputComponents>
                <a href="" className="text-red-600 text-sm font-normal Forgot Password? text-end" >Forgot Password?</a>

                <div className='mt-4'>
                {/* botao de registro  */}
                <ButtonLR TextButton={'Log In'}></ButtonLR>
                </div>
                
                <div className='mt-6'>
                {/*component opção de pular etapa e ir para login  */}
                <RodapeLoginRegister Text='Already have an account?' Link='register'></RodapeLoginRegister>
                

                </div>
            </div>
        </div>
    )
}

