import { useLoaderData} from "react-router-dom";



const Details = () => {
    const detailData = useLoaderData()
    return (
        <div>
          <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={detailData.photo} alt="Shoes" className="rounded-xl h-44 w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Brand:{detailData.brand}</h2>
                    <p>Name : {detailData.name}</p>
                    <p>Type : {detailData.computer}</p>
                    <p>Price : ${detailData.price}</p>
                    <p>Rating : {detailData.rating}</p>
                    <div className="card-actions flex lg:justify-between">
                       <button className="btn bg-gradient-to-r from-[#FF3300] to-[#FF8938]">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;