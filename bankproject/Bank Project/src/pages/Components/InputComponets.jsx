export function InputComponents(props){
    return(
        <input className='active:border-blue-600 focus:text-blue-900 bg-slate-200 py-4 rounded font-medium mb-3 text-sm pl-3 text-slate-600 my-4' 
        type={props.TypeInput} name={props.NameInput} id={props.NameInput} placeholder={props.Placeholder} />
    )

}