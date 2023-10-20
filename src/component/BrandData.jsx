

const BrandData = ({data}) => {
    const {photo,brand,name} = data
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="Shoes" className="rounded-xl h-44 w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Brand:{brand}</h2>
                    <p>Name:{name}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandData;