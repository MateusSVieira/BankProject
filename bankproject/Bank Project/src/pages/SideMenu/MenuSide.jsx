import ProfileBlank  from "../../assets/blankProfile.svg"


export function SideMenu() {
    return(

        <div className='bg-Platinum w-80 h-screen flex flex-col items-start pl-8'>
            <div className="mb-12 pt-5">
                <a href="#">Close</a>
                <img src={ProfileBlank} alt="" className="bg-white rounded-xl mb-3 mt-2"/>
                <h1>Name</h1>
                <p>County</p>
            </div>

            <div className="w-64 h-80 flex">
                <nav className="flex flex-col divide-y-2 justify-evenly  w-64 divide-White">
                    <div className=""><a href="#" >Profile</a></div>
                    <div className="pt-5 "><a href="#" className="">My Accounts</a></div>
                    <div className="pt-5 "><a href="#" >History</a></div>
                    <div className="pt-5 "><a href="#">Debit Card</a></div>
                    <div className="pt-6 "><a href="#">Settings</a></div>
                </nav>
            </div>

            <div className=" w-64 h-32 flex place-items-end">
                <a href="#" className="pb-5">LOGOUT</a>
            </div>
        </div>
    )

}