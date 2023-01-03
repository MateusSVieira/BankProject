import  ApresentationImg5 from "../../assets/apresentation5.svg"


export function Apresentation5() {

    return (

    <div className="md:w-4/6 flex flex-col items-center mx-auto ">
        
        <div className="bg-Yale-Blue w-4/5 flex flex-col justify-center items-center h-screen">
          
           

            <div>
                <img src={ApresentationImg5}/>
            </div>

            <div className="w-60 h-25 flex flex-col justify-around mb-5 mt-20">
                <h1 className="text-white font-bold text-4xl ">Welcome</h1>
              <p className=" text-base text-Platinum mt-3">Stay on top by effortlessly tracking your subscriptions & bills</p>
            </div>
           
            <div className="flex flex-col items-center mx-auto mt-10 font-bold">
               <button className="rounded-full w-14 h-14 bg-white hover:scale-110 ease-in text-blue-600">
                ->
               </button>
            </div>
            
        </div>

    </div>
    )
}