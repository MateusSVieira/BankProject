import apresetationImg from "../../assets/apresentation1.svg"

export function Apresentation() {

  return (

    <div className="bg-orange-500 w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
            <div>
                <img src={apresetationImg} alt="" />
            </div>
            <h1 className="text-2xl">Finity</h1>
            <p>Money Transfer Wallet & Finance UI Kit</p>
            <button className="border-solid border-2 border-black">Get Started Now</button>

        </div>
    </div>
  )
}

