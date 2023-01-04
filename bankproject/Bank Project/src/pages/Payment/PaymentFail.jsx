import { ReactComponent as PayFail } from "../../assets/paymentfail.svg"
import ButtonBlue from "../Components/ButtonBlue"



export function PaymentFail() {


    return (
    <div className="md:w-4/6 flex flex-col items-center mx-auto justify-center">

        <div className="h- mt-20 text-center">
        <PayFail />

        <h1 className="mt-10 font-bold text-4xl">Payment Failed</h1>
            <p className="mt-5 mb-9">Hmm. Looks like your location access is<br></br> turned off. </p>
                <ButtonBlue TextButton={"Back"}/>
        </div>
           
        </div>

    
    )
}