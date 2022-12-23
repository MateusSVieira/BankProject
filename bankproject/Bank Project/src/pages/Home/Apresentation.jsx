import apresetationImg from "../../assets/apresentation1.svg"

export function Apresentation() {

  return (

    <div className=" flex justify-center items-center content-center">
        <div className=" bg-Yale Blue w-80 h-screen md:bg-Yale-Blue lg:bg-Yale-Blue xl:bg-Yale-Blue flex flex-col justify-center items-center">
            <div>
                <img src={apresetationImg} alt="" />
            </div>
            <h1 className="text-2xl">Finity</h1>
            <p>Money Transfer Wallet & Finance UI Kit</p>
            <button className="w-28 h- bg-Orange-Web">Get Started Now</button>

        </div>
    </div>
  )
}

