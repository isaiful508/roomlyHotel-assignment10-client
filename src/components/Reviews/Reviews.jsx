import axios from "axios";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Testimonials from "./Testimonials";


const Reviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {


        getData();

    }, [])
    const getData = async () => {
        const { data } = await axios(`https://roomly-server-assignment11.vercel.app/reviews`)
        setReviews(data);
    }
    // console.log(reviews);

    return (
        <div
        data-aos="zoom-in"
        
        data-aos-duration="1000"
        className="container mx-auto ">

            <div>
                <h1 className="text-2xl font-semibold text-center text-[#3665b8] jost-600 capitalize lg:text-3xl dark:text-white">
                    What clients are saying
                </h1>
                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                </div>
            </div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
          
            >


                {
                    reviews.map((review, idx) => <SwiperSlide key={idx}> <Testimonials
                        review={review}
                        key={review._id}
                    ></Testimonials> </SwiperSlide>)
                }




            </Swiper>

        </div>
    );
};

export default Reviews;