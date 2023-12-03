import { Helmet } from "react-helmet-async";
import Navbar from "../../Page/Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Footer from "../../Page/Shared/Footer/Footer";
import BlogCard from "../BlogSection/BlogCard";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title> EchoMinds | Home </title> </Helmet>

            <Navbar ></Navbar>
            
            <Banner></Banner>
            <BlogCard></BlogCard>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;