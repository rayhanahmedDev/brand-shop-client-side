
import Banner from "./Banner/Banner";
import Brand from "./Brand/Brand";
import Footer from "./Footer/Footer";
import Insta from "./Insta/Insta";

import SaleUp from "./SaleUp/SaleUp";

const Home = () => {


    return (
        <div>
            <div className="max-w-7xl mx-auto ">
                <div>
                    <Banner></Banner>
                </div>
                <div>
                    <Brand></Brand>
                </div>
                <div>
                    <SaleUp></SaleUp>
                </div>
                <div>
                    <Insta></Insta>
                </div>
                <div>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Home;