import PropTypes from 'prop-types';

const Cards = ({ data }) => {
    const {_id, computer, photo,description,price,brand} = data;

    const handleDelete = _id =>{
        console.log(_id)
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
                    <button onClick={()=>handleDelete(_id)} className="btn w-20 bg-gradient-to-r from-[#FF3300] to-[#FF8938]">X</button>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    data: PropTypes.object.isRequired
};
export default Cards;