import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
    const detailData = useLoaderData()

    const handleAddToCart = () =>{
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers:{
                "content-type" : "application/json",
            },
            body: JSON.stringify(detailData),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Product Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Close'
                })
            }
        })

    }
    return (
        <div className="lg:h-[70vh] my-12 flex justify-center items-center">

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="w-full h-64" src={detailData.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{detailData.name}</h2>
                    <p>Price : ${detailData.price}</p>
                    <div className="card-actions">
                        <button onClick={ handleAddToCart} className="btn bg-gradient-to-r from-[#FF3300] to-[#FF8938]">Add to card</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;