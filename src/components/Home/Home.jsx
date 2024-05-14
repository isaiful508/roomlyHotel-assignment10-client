import { Footer } from "flowbite-react";
import Banner from "../Banner/Banner";
import Maps from "../Maps/Maps";
import NewsLetter from "../NewsLetter/NewsLetter";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Maps></Maps>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;