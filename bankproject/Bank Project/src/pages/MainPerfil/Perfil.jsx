import { ReactComponent as Quad } from "../../assets/perfilQuad.svg"

export function Perfil() {

    return (
        <div className="flex justify-center items-center content-center">
            <div className="bg-Yale Blue w-80 h-screen sm:bg-Platinum md:bg-White lg:bg-White xl:bg-White flex flex-col justify-center items-center">
                <div className=" flex justify-start bg-slate-700">
                    <Quad/>
                </div>

            </div>

        </div>
    )
}