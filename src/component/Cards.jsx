import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const Cards = ({ data, setDeleted, deleted }) => {
    const { _id, computer, photo, description, price, brand } = data;

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-assignment-server-flrrilml5-rayhans-projects.vercel.app/users/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = deleted.filter(del => del._id !== _id)
                            setDeleted(remaining)
                        }

                    })
            }
        })
    }
    return (
        <div>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 mx-12 max-w-sm">
                {/* img */}
                <img className="w-full p-2 lg:p-0 max-h-60 rounded-t-lg md:w-48 md:rounded-none md:rounded-l-lg" src={photo} alt="" />

                {/* title */}
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Brand Name : {brand}</h5>

                    {/* des */}
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Des : {description}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price : ${price}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Type : {computer}</p>

                    {/* btn section */}
                    <button onClick={() => handleDelete(_id)} className="btn w-20 bg-gradient-to-r from-[#FF3300] to-[#FF8938] ">X</button>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    data: PropTypes.object.isRequired
};
export default Cards;