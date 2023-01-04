import { ReactComponent as Quad } from "../../assets/perfilQuad.svg"
import { ReactComponent as Points } from "../../assets/perfilPoints.svg"
import { ReactComponent as EditIcon } from "../../assets/editprofile.svg"

import ProfileBlank  from "../../assets/blankProfile.svg"
import ButtonRed from "../Components/ButtonRed"



export function EditProfile() {

    return (

    <div className="md:w-4/6 mx-auto">
        
        <div className="md:w-4/6 flex flex-col items-center mx-auto">
            
            <div className="flex justify-between w-4/5 mt-4" >
   
                    <a href="#" className="w-fit h-fit pb-3 ml-6"><Quad/></a>
                    <a href="#" className="w-fit h-fit pb-3 mr-6"><Points/></a>

            </div>
        </div>
        
    
    <div className="md:w-4/6 flex flex-col">
            <h1 className="font-bold text-3xl items-start ml-20">Edit Profile</h1>
        
        <div className="flex flex-col items-center justify-center mt-4">

            <img src={ProfileBlank} width="90" height="20"  alt="Profile" className="border-2 rounded-xl"/>
            <p className="text-2md font-semibold mt-1">Change Profile Picture</p>

        </div>
       
    </div>

     {/* formularios */}
        <div className="ml-10 flex flex-col mb-8">  

            {/* Nome */}
            <form className="ml-5 mt-5 mb-18 font-bold"> 
                <label>Name</label><br></br>
                <input className="w-5/6 active:border-blue-600 focus:text-blue-900 bg-slate-200 py-3 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4" type="text" name="namefull" placeholder="Full Name"/><br></br>
                
            {/*Localizacao  */}
               <label>Location</label><br></br>
               <input className="w-5/6 active:border-blue-600 focus:text-blue-900 bg-slate-200 py-3 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4" type="text" name="location" placeholder="Brazil"/><br></br>
            
            {/* Endereco */}
               <label>Adress</label><br></br>
               <input className="w-5/6 active:border-blue-600 focus:text-blue-900 bg-slate-200 py-3 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4" type="text" name="adress" placeholder="Street 123/NYC"/><br></br>
            
            {/* Telefone */}
               <label>Phone Number</label><br></br>
               <input className="w-5/6 active:border-blue-600 focus:text-blue-900 bg-slate-200 py-3 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4" type="phone" name="location" placeholder="(00) 00000-0000"/><br></br>
            
            <ButtonRed TextButton={'Save Changes'}/>
            
            </form>
        </div>
    </div>
    )
}