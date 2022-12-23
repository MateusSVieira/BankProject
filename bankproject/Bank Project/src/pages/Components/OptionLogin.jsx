function OptionLogin({Titulo}){
    return(
        <div className="flex justify-center flex-col items-center mt-20">
        <h1 className="text-5xl font-bold mb-10">{Titulo}</h1>
        <div className="mb-9">
        <button className="w-40 h-12 text-sm text-center bg-slate-100 mx-2 font-medium tracking-widest hover:Steel-Blue">Facebook</button>
        <button className="w-40 h-12 text-sm text-center bg-slate-100 mx-2 font-medium tracking-widest hover:Steel-Blue">Google</button>
        </div>
        <div className="flex flex-row items-center text-center mb-6">
        <p className="w-32 border-b-gray-300 border-b"></p>
        <p className="mx-4">or</p>
        <p className="w-32 border-b-gray-300 border-b"></p>
        </div>
        </div>
     )
}

export default OptionLogin