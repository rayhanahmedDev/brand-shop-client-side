
import { Link} from "react-router-dom";

const BrandCard = ({ data }) => {
    
    const { img, name, brand } = data;
    return (
        <Link to={brand==='Itel'? `/products/prod`:`/products/${brand}`}>
            <div className="border cursor-pointer">
                <div className="card h-64 bg-base-100 shadow">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BrandCard;