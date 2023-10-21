// import '../../public/slider-1.jpeg'
// import '../../public/slider-2.webp'
// import '../../public/slider3.jpg' 

const BrandBanner = () => {
    return (
        <div>
              <div className="carousel w-full lg:h-[60vh]">
             
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/8P5sKFQ/slider1.jpg" className="w-full" />
                       
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/n0xtPbK/slider2.webp" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/5sPL2Q8/slider3.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default BrandBanner;