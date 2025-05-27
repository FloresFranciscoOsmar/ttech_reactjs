

const Error = () =>{

    return (
        <div className="min-h-screen flex flex-col justify-center gap-6
                    mask-linear-[to_right,transparent_0%,black_20%,black_80%,transparent_100%] 
                    bg-gray-300 w-9/10 mx-auto
        " >
            <h1 className="w-1/2 text-center mx-auto text-4xl font-bold">Error al cargar la página</h1>
            <p className="w-2/3 text-center mx-auto text-2xl">Por favor comunique a los administradores del sitio del error.</p>
        </div>
    );

}


export default Error ; 