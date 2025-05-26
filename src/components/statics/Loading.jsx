import logo from '../../assets/logo.png'

const Loading = () =>{


return (
    <div className='min-h-screen w-full  flex flex-col justify-center items-center'>
        <img className='w-50 h-50 animate-bounce' src={logo} alt='loading ...'/>
    </div>
);

}

export default Loading;