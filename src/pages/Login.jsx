import logo from '../assets/logo.png';
const Login = () => {

    return (
        <div className="flex min-h-screen">
            <div className="w-full max-w-xl m-auto bg-indigo-100 rounded p-5">
                <header className='flex flex-row justify-center items-center gap-3.5 '>
                    <img className="w-20" src={logo} />
                    <a className='text-lg font-semibold'>TiendaTuya</a>
                </header>
                <form> {/** esperar a la segunda parte para añadir lógica de autenticacion */}
                    <div>
                        <label className="block mb-2 text-gray-800" >Usuario</label>
                        <input className="w-full p-2 mb-6 text-gray-700 border-b-2 border-b-blue-500 outline-none focus:bg-gray-300" type="text" name="username" />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-800" >Clave</label>
                        <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-b-blue-500 outline-none focus:bg-gray-300" type="password" name="password" />
                    </div>
                    <div>
                        <input className="w-full bg-blue-700 hover:bg-pink-600 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                    </div>
                </form>
                <footer>
                    <a className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#">Olvidaste tu contraseña?</a>
                    <a className="text-indigo-700 hover:text-pink-700 text-sm float-right" href="#">Crear cuenta</a>
                </footer>
            </div>
        </div>
    )
}


export default Login; 