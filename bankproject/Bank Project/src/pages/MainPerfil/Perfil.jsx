import { ReactComponent as Quad } from "../../assets/perfilQuad.svg"
import { ReactComponent as Points } from "../../assets/perfilPoints.svg"
import ProfileBlank  from "../../assets/blankProfile.svg"
import {ReactComponent as Oval1} from "../../assets/oval1Perfil.svg"
import {ReactComponent as Oval2} from "../../assets/oval2Perfil.svg"
import {ReactComponent as Oval3} from "../../assets/oval3Perfil.svg"
import {ReactComponent as Oval4} from "../../assets/oval4Perfil.svg"
import {ReactComponent as Oval5} from "../../assets/oval5Perfil.svg"

export function Perfil() {

    return (
        <div className='md:w-4/6 flex flex-col items-center mx-auto'>
            <div className="flex justify-between w-4/5 mt-6" >
                <a href="#" className="w-fit h-fit pb-6 ml-6"><Quad/></a>
                <a href="#" className="w-fit h-fit pb-6 mr-6"><Points/></a>
            </div>
            <div className="flex flex-col items-center justify-center bg-Platinum w-96 rounded-xl">
                <div className="flex flex-col items-center justify-center">
                    <img src={ProfileBlank} width="60" height="20"  alt="" className="absolute top-16 border-2 rounded-xl"/>
                    <div className="flex flex-col items-center mt-10 pb-8">
                        <h1 className="font-extrabold">Name</h1>
                        <h3>Account ending with 1545</h3>
                    </div>
                </div>
            </div>
            <div>
                <nav className="flex justify-between items-center w-96 mt-5 text-center text-sm">
                    <a href="#"><Oval1/>Transfer</a>
                    <a href="#"><Oval2/> Sent</a>
                    <a href="#"><Oval3/>Shopping</a>
                    <a href="#"><Oval4/>Bill</a>
                    <a href="#"><Oval5/>Vouchers</a>
                </nav>
            </div>
            <div className=" flex justify-between w-96 text-center mt-8 font-bold text-white ">
                <div className="bg-Orange-Web flex items-center justify-center w-44 h-16 rounded-xl">
                    Salary
                </div>
                <div className="bg-Yale-Blue flex items-center justify-center w-44 h-16 rounded-xl">
                    Transfer
                </div>
            </div>
            <div>
                <div className="flex items-start w-96 mt-4">
                    <h1 className="pl-2 font-bold text-xl">Recent transactions</h1>
                </div>
            </div>
        </div>
    )
}