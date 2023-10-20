import { useLoaderData } from "react-router-dom";


const Update = () => {

    const data = useLoaderData()
    const { _id, computer, photo, price, name, brand,rating } = data;

    const handleUpdateProduct = _id => {
        console.log('hello');
    }

    return (
        <div>
            <div className="bg-gradient-to-r from-[#FF3300] to-[#FF8938] pb-12 mt-6 max-w-7xl mx-auto md:px-36 px-8 py-8">
                <h2 className="text-4xl text-white pt-8 font-bold text-center mb-12">Update Product</h2>
                <form onSubmit={handleUpdateProduct}>
                    {/* form add coffee row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text text-white">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier and taste row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text text-white">Type</span>
                            </label>
                            <label className="input-group ">
                                <select id="cars" name="computer" defaultValue={computer} className='input input-bordered w-full'>
                                    <option value="phone">Phone</option>
                                    <option value="headphone">Headphone</option>
                                    <option value="computer">Computer</option>
                                    <option value="Watch">Watch</option>
                                    <option value="tv">TV</option>
                                </select>
                                {/* <input type="text" name='computer' placeholder="" className="input input-bordered w-full" /> */}
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text text-white">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="number"
                                    name="rating"
                                    placeholder="Rating"
                                    defaultValue={rating}
                                    step="0.1"
                                    min="0"
                                    max="5"
                                    required className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-block mt-8 bg-white text-[#FF3300]" />
                </form>
            </div>
        </div>
    );
};

export default Update;