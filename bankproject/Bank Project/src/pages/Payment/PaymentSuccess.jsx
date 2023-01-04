import { ReactComponent as PaySuccess } from "../../assets/paymentsuccess.svg"
import ProfileBlank  from "../../assets/blankProfile.svg"
import { ReactComponent as Kokoro }  from "../../assets/kokoro.svg"
import ButtonBlue from "../Components/ButtonBlue"



export function PaymentSuccess() {
    return (
    <div className="md:w-4/6 flex flex-col items-center mx-auto">

            <div className="w-full flex justify-around mx-auto text-center mt-10 font-bold -mb-15">

                <button className="rounded-full w-10 h-10 bg-blue-500 hover:scale-110 ease-in-out text-white">
                        &#8592;
                </button>

                <button className="rounded-full w-10 h-10 bg-blue-500 hover:scale-110 ease-in-out text-white">
                        ;;
                </button>

            </div>
            

        <div className=" w-4/5 flex flex-col justify-center items-center">
            <PaySuccess />

            <div className=" text-center">
                <h1 className="font-bold text-4xl">Payment<br></br>Successful</h1>
                <p className="mt-3">Your Payment was successful. Make this<br></br> user in your favourite list</p>
            </div>

            <div className="hover:scale-105 shadow-lg flex mx-auto justify-around bg-red-500 w-4/5 h-20 mt-4 rounded-xl">

                <div className="flex items-center my-auto ml-3 ">
                    <img src={ProfileBlank} width="50" height="20"  alt="Profile" className="border-2 rounded-xl bg-white"></img>
                    
                    <div className="ml-2 text-white">
                        <h5 className="font-bold">Krish Kendall</h5>
                        <p className="-mt-2">Canada</p>
                    </div>
                    
                </div>

                <div className="flex my-auto items-center mx-auto bg-white w-10 h-10 rounded-md ml-20">
                        <Kokoro />
                </div>
            </div>


                <div className="w-4/5 flex flex-col mt-8 justify-center items-center mx-auto">
                     <h3 className="text-gray-500 text-sm">SHOULD ARRIVED BY</h3>
                     <h1 className="font-bold text-xl">27 APRIL 2020</h1>
                </div>

                <ButtonBlue TextButton={"Track"}/>
        </div>

    </div>
    )
}