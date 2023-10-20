import { useLoaderData } from "react-router-dom";
import Cards from "../component/Cards";
import { useState } from "react";


const MyCart = () => {
    const loadData = useLoaderData();
    const [deleted, setDeleted] = useState(loadData)
    return (
        <div className="max-w-7xl mx-auto mt-12 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    deleted.map(data => <Cards
                        key={data._id}
                        deleted={deleted}
                        setDeleted={setDeleted}
                        data={data}>
                    </Cards>)
                }
            </div>
        </div>
    );
};

export default MyCart;