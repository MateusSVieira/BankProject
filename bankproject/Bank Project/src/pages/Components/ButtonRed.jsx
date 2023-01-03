function ButtonRed({TextButton}){
    return(
        <div className="w-full text-center flex items-center mx-auto mt-2">
        <button className="w-5/6 h-14 text-center text-lg font-bold  text-white rounded-lg bg-red-400 
        ">{TextButton}</button>
        </div>
    )
}

export default ButtonRed