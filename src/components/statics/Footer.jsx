const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 flex flex-col  py-10 w-full">
            <div className="flex flex-row justify-evenly w-full">
                <div className=" w-1/5">
                    <h2 className="text-2xl font-bold text-white">tiendaTuya</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Tu tienda online de confianza. Comprá fácil, seguro y rápido.
                    </p>
                </div>
                <div className="w-1/5">
                    <h3 className="text-lg font-semibold text-white mb-2">Enlaces</h3>
                    <ul className="space-y-1 text-sm">
                        <li><a href="/" className="hover:text-white">Inicio</a></li>
                        <li><a href="/" className="hover:text-white">Productos</a></li>
                        <li><a href="/about" className="hover:text-white">Sobre nosotros</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} tiendaTuya. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;