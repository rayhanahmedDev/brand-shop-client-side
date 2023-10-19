

const Instas = ({inst}) => {
    const {img,img2} = inst
    return (
        <div>
            <div className="max-w-sm bg-base-100 shadow">
                <figure><img className="w-full lg:h-44" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                   <img className="" src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Instas;