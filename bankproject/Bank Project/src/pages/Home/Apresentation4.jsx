import  ApresentationImg4 from "../../assets/apresentation4.svg"
import ButtonNext from "../Components/ButtonNext"

export function Apresentation4() {

    return (

    <div className="md:w-4/6 flex flex-col items-center mx-auto ">
        
        <div className="bg-Yale-Blue w-4/5 flex flex-col justify-center items-center h-screen">
          
           <div className="text-white ml-40 mb-7">
                <button className="ml-11 text-black font-bold w-10 h-10 hover:underline">SKIP</button>
           </div>

            <div>
                <img src={ApresentationImg4}/>
            </div>

            <div className="w-60 h-25 text-center flex flex-col justify-around mb-20 mt-5">
                <h1 className="text-white font-bold">Reach your goals with ease</h1>
              <p className=" text-base text-Platinum mt-10">Use the smart saving features to manage your future goals and needs</p>
            </div>
           
            <div className="flex mt-10 font-bold">
                <span className="text-white mt-4">3/3</span>
               <ButtonNext/>
            </div>
            
        </div>

    </div>
    )
}