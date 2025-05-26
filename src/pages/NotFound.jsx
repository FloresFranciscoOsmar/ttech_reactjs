import notfound_logo from '../assets/notfound.png'

const NotFound = ()=>{

    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div  className=' w-full '>
                <img className=' w-1/5 mx-auto'
                src={notfound_logo} alt="page not found" />
                <p className='text-5xl font-extrabold w-1/2 text-center mx-auto'>Página no encontrada</p>
                
            </div>
        </div>
    );
}

export default NotFound;