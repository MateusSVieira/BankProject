import {ReactComponent as ApresentationImg} from "../../assets/Apresentation1.svg"

export function Apresentation() {

  return (

    <div className=" flex justify-center items-center content-center">
        <div className=" bg-Yale Blue w-80 h-screen md:bg-Yale-Blue lg:bg-Yale-Blue xl:bg-Yale-Blue flex flex-col justify-center items-center">
            <div>
                <ApresentationImg/>
            </div>
            <div className="w-60 h-25 text-center flex flex-col justify-around mb-20 mt-5">
              <h1 className="text-3xl font-bold text-Platinum mb-4">Finity</h1>
              <p className="font-light text-base text-Platinum ">Money Transfer Wallet & Finance UI Kit</p>
            </div>
            <div className="h-24 flex flex-col items-center justify-between">
              <button className="w-60 h-10 px-px rounded-b-md rounded-r-md rounded-t-md bg-Black font-bold text-Platinum hover:bg-Orange-Web hover:text-Black">Get Started Now</button>
              <button className="w-60 h-10 px-px rounded-b-md rounded-r-md rounded-t-md bg-Black font-bold text-Platinum hover:bg-Orange-Web hover:text-Black">Login</button>
            </div>


        </div>
    </div>
  )
}

