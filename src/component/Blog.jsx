

const Blog = ({ blog }) => {
    const { img,name } = blog
    return (
        <div>
            <div className="max-w-sm bg-base-100 shadow ">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Blog;