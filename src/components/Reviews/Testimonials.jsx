import { Blockquote } from "flowbite-react";
import { FcRating } from "react-icons/fc";

const Testimonials = ({ review }) => {

    const {
        username,
        rating,
        comment,
        timestamp
    } = review

    return (
        <section className=" dark:bg-gray-900 bg-base-100 rounded-lg shadow-xl mt-6">
            <div className="container px-6 py-10 mx-auto">

                <div className="flex items-start max-w-6xl mx-auto mt-16">


                    <div>


                        <div className="flex items-center text-center lg:mx-8">
                            <Blockquote className="text-[#eb865e] font-500"> {comment}</Blockquote>

                        </div>



                        <div className="flex flex-col items-center justify-center mt-8">

                            {/* <img
                                className="object-cover rounded-full w-14 h-14"
                                src={""}
                                alt=""
                            /> */}
                            <div className="flex items-center font-500 gap-2">
                                <FcRating></FcRating> {rating}
                            </div>

                            <div className="mt-4 text-center">
                                <h1 className="font-semibold text-gray-800 dark:text-white font-500">{username}</h1>
                                <p className="font-500">{timestamp}</p>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Testimonials;