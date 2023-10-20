

import { useLoaderData, useParams } from "react-router-dom";
import BrandData from "../../component/BrandData";

const Product = () => {
    const dataLoad = useLoaderData();
    console.log(dataLoad)
    const { brand } = useParams()
    const products = dataLoad?.filter(products => products.brand !== brand)
    console.log(products);

    return (
        <div className="max-w-7xl mx-auto my-16">
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={products.photo} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {
                  dataLoad.map(data => <BrandData key={data._id} data={data}></BrandData>)  
                }
            </div>
        </div>
    );
};

export default Product;