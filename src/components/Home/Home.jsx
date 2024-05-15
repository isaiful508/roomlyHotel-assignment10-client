import { Footer } from "flowbite-react";
import Banner from "../Banner/Banner";
import Maps from "../Maps/Maps";
import NewsLetter from "../NewsLetter/NewsLetter";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Reviews></Reviews>
            <Maps></Maps>

            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;