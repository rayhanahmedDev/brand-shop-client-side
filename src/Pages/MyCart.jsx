import { useLoaderData } from "react-router-dom";
import Cards from "../component/Cards";


const MyCart = () => {
    const loadData = useLoaderData()

    return (
        <div className="max-w-7xl mx-auto border border-red-500">
               <h2>Add Products : {loadData.length}</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    loadData.map(data => <Cards key={data._id} data={data}></Cards>)
                }
               </div>
        </div>
    );
};

export default MyCart;