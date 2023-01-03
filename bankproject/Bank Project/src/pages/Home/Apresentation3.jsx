import  ApresentationImg3 from "../../assets/apresentation3.svg"
import ButtonNext from "../Components/ButtonNext"

export function Apresentation3() {

    return (

    <div className="md:w-4/6 flex flex-col items-center mx-auto ">
        
        <div className="bg-Yale-Blue w-4/5 flex flex-col justify-center items-center h-screen">
          
           <div className="text-white ml-40 mb-7">
                <button className="ml-11 text-black font-bold w-10 h-10 hover:underline">SKIP</button>
           </div>

            <div>
                <img src={ApresentationImg3}/>
            </div>

            <div className="w-60 h-25 text-center flex flex-col justify-around mb-20 mt-5">
                <h1 className="text-white font-bold">See where your money is going</h1>
              <p className=" text-base text-Platinum mt-10">Stay on top by effortlessly tracking your subscriptions & bills</p>
            </div>
           
            <div className="flex mt-10 font-bold">
                <span className="text-white mt-4">2/3</span>
               <ButtonNext/>
            </div>
            
        </div>

    </div>
    )
}