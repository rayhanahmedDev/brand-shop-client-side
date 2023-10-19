import { useEffect, useState } from "react";
import Instas from "../../component/Instas";


const Insta = () => {
    const [instas, setInstas] = useState([])
    useEffect(()=>{
        fetch('insta.json')
        .then(res => res.json())
        .then(data => setInstas(data))
    },[])
    return (
        <div>
            <h2 className="text-3xl font-semibold text-center">CHECK OUR <span className="text-[#FED600]">INSTAGRAM</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 lg:gap-0 my-16">
                {
                    instas.map(inst => <Instas key={inst.id} inst={inst}></Instas>)
                }
            </div>
        </div>
    );
};

export default Insta;