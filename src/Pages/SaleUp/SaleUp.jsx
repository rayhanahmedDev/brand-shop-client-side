import { useEffect, useState } from "react";
import Blog from "../../component/Blog";


const SaleUp = () => {
    const [blogs, setBlogs] = useState([])
    
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="my-8">
            <h2 className="text-3xl font-semibold text-center"><span className="text-[#FF8436]">LATEST</span> BLOG</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-16">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default SaleUp;