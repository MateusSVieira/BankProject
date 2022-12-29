function OptionLogin({Titulo}){
    return(
        <div className="px-10 bg-red-300">
        <h1 className="text-5xl font-bold mb-10 text-start">{Titulo}</h1>
        <div className="flex">

        <button className="w-2/4 h-12 text-sm text-center bg-slate-200 mr-2 font-medium tracking-widest">Facebook</button>
        <button className="w-2/4 h-12 text-sm text-center bg-slate-200 mr-2 font-medium tracking-widest">Google</button>
        </div>
        <p className="text-center text-base my-6">or</p>
        </div>
     )
}

export default OptionLogin