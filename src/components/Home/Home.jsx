import { Footer } from "flowbite-react";
import Banner from "../Banner/Banner";
import Maps from "../Maps/Maps";
import NewsLetter from "../NewsLetter/NewsLetter";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import Reviews from "../Reviews/Reviews";

import { useEffect, useState } from "react";
import SpecialOfferModel from "./SpecialOfferModel";


const Home = () => {

   
    
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Show the modal when the homepage loads
        setShowModal(true);
    }, []);

    return (
        <div>

            <Banner></Banner>
            <FeaturedRooms></FeaturedRooms>
            <Reviews></Reviews>
            <Maps></Maps>

            <NewsLetter></NewsLetter>
            <SpecialOfferModel showModal={showModal} setShowModal={setShowModal} />
        </div>
    );
};

export default Home;