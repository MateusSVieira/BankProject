import  ApresentationImg2 from "../../assets/apresentation2.svg"
import ButtonNext from "../Components/ButtonNext"

export function Apresentation2() {

    return (

    <div className="flex justify-center items-center content-center">
        
        <div className="bg-Yale Blue w-80 h-screen max-sm:bg-Yale-Blue md:bg-Yale-Blue min-lg:bg-Yale-Blue min-xl:bg-Yale-Blue flex flex-col justify-center items-center">
          
           <div className="text-white ml-40 mb-7">
                <button className=" text-black font-bold w-10 h-10 hover:underline">SKIP</button>
           </div>

            <div>
                <img src={ApresentationImg2}/>
            </div>

            <div className="w-60 h-25 text-center flex flex-col justify-around mb-20 mt-5">
              <p className=" text-base text-Platinum font-bold mt-10">Runing your finances is easier with xyz</p>
            </div>
           
            <div className="flex mt-10 font-bold">
                <span className="text-white mt-4">1/3</span>
               <ButtonNext/>
            </div>
            
        </div>

    </div>
    )
}