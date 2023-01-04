function ButtonBlue({TextButton}){
    return(
        <div className="w-2/3 text-center flex flex-col items-center mx-auto my-auto mt-5">
        <button className="bg-blue-500 hover:scale-110 ease-in-out text-white w-5/6 h-14 text-center text-lg font-bold rounded-lg
        ">{TextButton}</button>
        </div>
    )
}

export default ButtonBlue