import { useLoaderData, useParams } from "react-router-dom";
import BrandData from "../../component/BrandData";
import BrandBanner from "../../component/BrandBanner";

const Product = () => {
    const dataLoad = useLoaderData();
    const { brand } = useParams()
    const products = dataLoad?.filter(products => products.brand !== brand)
    console.log(products);

    return (
        <div className="max-w-7xl mx-auto my-16">
            <div className="mb-12">
                <BrandBanner></BrandBanner>             
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {
                    dataLoad.map(data => <BrandData key={data._id} data={data}></BrandData>)
                }
            </div>
        </div>
    );
};

export default Product;