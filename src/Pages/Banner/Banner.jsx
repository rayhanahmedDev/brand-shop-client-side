import '../../../public/computer-png-28449-removebg-preview.png'


const Banner = () => {
    return (
        <div>
            <div className="hero mt-8 h-[70vh] bg-white shadow">
                <div className="hero-content flex-col  lg:flex-row-reverse">
                  <div className='lg:w-2/4'>
                  <img src="computer-png-28449-removebg-preview.png" className="w-full rounded-lg" />
                  </div>
                    <div className='lg:w-2/4'>
                        <h1 className="text-5xl font-bold">IMAC</h1>
                        <h2 className='text-3xl font-normal text-[#FF3300] mt-3'>NEQUE PORRO</h2>
                        <p className="py-6 text-gray-500">Duis cursus ante nec dictum tincidunt posuere <br /> tate nisl quis gravida diam</p>
                        <h1 className='text-2xl font-bold text-[#FF3300]'> $399.0</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;