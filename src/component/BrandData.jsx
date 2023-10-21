import { Link } from "react-router-dom";


const BrandData = ({ data }) => {
    const { _id, photo, brand, name, computer, price, } = data

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-44 w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Brand:{brand}</h2>
                    <p>Name : {name}</p>
                    <p>Type : {computer}</p>
                    <p>Price : ${price}</p>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <div className="card-actions flex lg:justify-between">
                        <Link to={`/detail/${_id}`}><button className="btn bg-gradient-to-r from-[#FF3300] to-[#FF8938]">Details</button></Link>
                        <Link to={`/update/${_id}`}><button className="btn bg-gradient-to-r from-[#FF3300] to-[#FF8938]">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandData;