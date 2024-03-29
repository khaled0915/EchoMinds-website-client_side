import { Link } from "react-router-dom";
import WishListBtn from "../../Components/WishListButton/WishListBtn";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useBlog from "../../hooks/useBlog";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import FilteredBlog from "./FilteredBlog";


const AllBlogs = () => {


    const [blog, refetch] = useBlog();
    const axiosPublic  = useAxiosPublic();

    console.log(blog);











    return (


        <> 

<Navbar></Navbar>
        
        <div className="mt-10">





<h1 className="text-3xl underline font-bold  text-center mt-10 mb-5 text-sky-800 "> This is all blog page </h1>


<FilteredBlog></FilteredBlog>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

{
blog.map( item =>

<div key={item._id} className="card lg:card-side bg-base-100 shadow-xl">
<figure><img className="w-[300px] h-[250px]" src={item.image} alt="Album"/></figure>
<div className="card-body">
<h2 className="card-title"> Blog Title :  {item.title}  </h2>
<p> {item.shortDescription} </p>
<p className="underline font-bold text-slate-700 "> Category :  {item.category} </p>
<div className="card-actions mt-5 justify-end">


<Link to={`/blogDetail/${item._id}`}> 
<button className="btn btn-info font-bold  mr-5 "> Details </button> </Link>

{/* <button className="btn btn-primary"> wishlist </button>
 */}
 
 <WishListBtn></WishListBtn>

</div>







</div>
</div>

)
}


</div>






<Footer></Footer>

</div>
        </>

      
    );
};

export default AllBlogs;