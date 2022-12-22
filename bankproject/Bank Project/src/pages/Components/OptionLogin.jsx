function OptionLogin({Titulo}){
    return(
        <>
        <h1 className="text-5xl font-bold mb-10">{Titulo}</h1>
        <button className="w-40 h-12 text-sm text-center bg-slate-100 mr-2 font-medium tracking-widest">Facebook</button>
        <button className="w-40 h-12 text-sm text-center bg-slate-100 mr-2 font-medium tracking-widest">Google</button>
        <p>OR</p>
        </>
     )
}

export default OptionLogin