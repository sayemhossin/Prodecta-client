import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className="text-center text-5xl md:text-7xl font-bold mt-10 text-green-500 ">All Product</h1>
                <div className="divider w-[500px] mx-auto"></div>
            </div>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;