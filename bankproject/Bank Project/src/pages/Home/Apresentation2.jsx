import  ApresentationImg2 from "../../assets/apresentation2.svg"
import ButtonNext from "../Components/ButtonNext"
import { Apresentation3 } from "./Apresentation3"



export function Apresentation2() {

    function nextPage(){
        // window.location.href="Apresentation3"
        alert("Peguei")
     }

    return (

       

    <div className="md:w-4/6 flex flex-col items-center mx-auto ">
        
        <div className="bg-Yale-Blue w-4/5 flex flex-col justify-center items-center h-screen">
          
           <div className="text-white ml-40 mb-7">
                <button className="ml-11 text-black font-bold w-10 h-10 hover:underline">SKIP</button>
           </div>

            <div>
                <img src={ApresentationImg2}/>
            </div>

            <div className="w-60 h-25 text-center flex flex-col justify-around mb-20 mt-5">
              <p className=" text-base text-Platinum font-bold mt-10">Runing your finances is easier with xyz</p>
            </div>
           
            <div className="flex mt-10 font-bold">
                <span className="text-white mt-4">1/3</span>
               <ButtonNext link="Apresentation3" />
            </div>
            
        </div>

    </div>
    )
}