import { useEffect, useState } from "react";
import BrandCard from "../../component/BrandCard";



const Brand = () => {

    const [brandData, setBrandData] = useState([])
    useEffect(() => {
        fetch('branddata.json')
            .then(res => res.json())
            .then(data => setBrandData(data))
    }, [])
    return (
        <div className="mt-16 pb-16">
            <h2 className="text-5xl font-semibold text-center mb-12">Our <span className="text-[#FF3300]">Brand</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    brandData.map(data => <BrandCard key={data.id}
                        data={data}
                    ></BrandCard>)
                }
            </div>
        </div>

    );
};

export default Brand;