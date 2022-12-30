import Quad  from "../../assets/perfilQuad.svg"
import { ReactComponent as Points } from "../../assets/perfilPoints.svg"
import { ReactComponent as ProfileBlank } from "../../assets/blankProfile.svg"

export function Perfil() {

    return (
        <div className='md:w-4/6 flex flex-col align-middle mx-auto'>
            <div className="bg-Steel-Blue flex flex-row justify-between " >
                <a href="#"><img src={Quad} alt="" /></a>
                <a href="#" className="w-fit"><Points/></a>
            </div>
            <div className="flex flex-col items-center justify-center bg-Platinum">
                <div className="flex flex-col items-center justify-center">
                    <ProfileBlank/>
                    <h1>Name</h1>
                    <h3>Account ending with 1545</h3>
                </div>

            </div>
        </div>
    )
}