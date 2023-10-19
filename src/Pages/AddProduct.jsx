import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const brand = form.brand.value;
        const computer = form.computer.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const user = {
            name, brand, computer, price, description, rating, photo
        }
        console.log(user)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
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
        <div>
            <div className="bg-gradient-to-r from-[#FF3300] to-[#FF8938] pb-6 mt-6 max-w-7xl mx-auto md:px-36 px-8 py-8">
                <h2 className="text-4xl text-white pt-8 font-bold text-center mb-12">Add Product</h2>
                <form onSubmit={handleAddProduct}>
                    {/* form add coffee row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text text-white">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
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
                                <select id="cars" name="computer" className='input input-bordered w-full'>
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
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2 w-full">
                            <label className="label">
                                <span className="label-text text-white">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
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
                                    step="0.1"
                                    min="0"
                                    max="5"
                                    required className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* photo form */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <input type="submit" value="Add to Cart" className="btn btn-block mt-8 bg-white text-[#FF3300]" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;