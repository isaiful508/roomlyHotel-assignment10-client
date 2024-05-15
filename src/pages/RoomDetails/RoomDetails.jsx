import { useLoaderData } from "react-router-dom";
"use client";
import { Button, Modal } from "flowbite-react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FcRating } from "react-icons/fc";






const RoomDetails = () => {

    const room = useLoaderData();
    const { user } = useContext(AuthContext);


    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [availability, setAvailability] = useState(room.availability);
    const [reviews, setReviews] = useState([])








    const {
        name,
        description,
        pricePerNight,
        // availability,
        image,
        roomSize,
        specialOffers,
        _id,
        // reviews

    } = room || {};

    const availabilityColor = availability === 'Available' ? 'text-green-700' : 'text-red-700';


    //reviews data fetch by room id
    useEffect(() => {


        getData();

    }, [])
    const getData = async () => {
        const { data } = await axios(`http://localhost:5000/reviews/${_id}`)
        setReviews(data);
    }
    console.log(reviews);





    const handleBookRoom = async (e) => {
        e.preventDefault();
        setOpenModal(false);
        const bookingDate = startDate;

        const booking = {
            _id,
            customerName: user?.displayName,
            customerEmail: user?.email,
            roomName: name,
            roomDetails: description,
            price: pricePerNight,
            date: bookingDate,
            photo: image,
        };

        try {
            const { data: updateData } = await axios.patch(`http://localhost:5000/room-details/${_id}`, { availability: 'Not-Available' });
            console.log(updateData);

            if (updateData.modifiedCount === 1) { // Ensure the update was successful
                setAvailability('Not-Available');
                const { data } = await axios.post(`http://localhost:5000/bookings`, booking);
                console.log(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Booking Confirmed!',
                    text: 'Your booking has been successfully confirmed.',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                toast.error("This room is already booked.");
            }
        } catch (err) {
            console.log(err);
        }
    };





    const toggleReviewsModal = () => {
        setOpenModal2(!openModal2);
    };




    // const handleBookRoom = async (e) => {
    //     e.preventDefault();
    //     setOpenModal(false)
    //     const bookingDate = startDate;

    //     const booking = {
    //         _id,
    //         customerName: user?.displayName,
    //         customerEmail: user?.email,
    //         roomName: name,
    //         roomDetails: description,
    //         price: pricePerNight,
    //         date: bookingDate,
    //         photo: image,

    //     }

    //     try {


    //         const { data: updateData } = await axios.patch(`http://localhost:5000/room-details/${_id}`, { availability: 'Not-Available' });
    //         console.log(updateData);

    //         if (availability === 'Not-Available') {
    //             toast.error("This Room already has been booked")

    //         } else {
    //             const { data } = await axios.post(`http://localhost:5000/bookings`, booking)
    //             console.log(data);
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Booking Confirmed!',
    //                 text: 'Your booking has been successfully confirmed.',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         }



    //     } catch (err) {
    //         console.log(err);
    //     }


    // }




    return (

        <div className="mb-6">


            <div>
                <h2 className="text-3xl text-center jost-600 text-[#3665b8] mt-4 mb-6">Here You Can Book Your Favourite Room</h2>
            </div>

            <div className="card container mx-auto lg:card-side bg-base-100 shadow-lg">

                <figure className="max-w-3xl">
                    <img src={image} alt="Album" />
                </figure>

                <div className="card-body font-500">
                    <h2 className="card-title text-[#3665b8]  text-3xl bona-nova-regular">{name}</h2>
                    <p className="text-[#3665b8]">Details :  <span className="text-[#eb865e]">{description}</span> </p>
                    <p className="text-[#3665b8]"> Price Per Night : <span className="text-[#eb865e]">{pricePerNight} $</span></p>
                    <p className="text-[#3665b8]">Availability :  <span className={`${availabilityColor}`}>{availability}</span></p>
                    <p className="text-[#3665b8]">Room Size : <span className="text-[#eb865e]"> {roomSize} </span></p>

                    {specialOffers &&

                        <div>
                            <h2 className="text-2xl text-[#3665b8]">Special Offers: </h2>

                            <p className="text-[#eb865e]">{specialOffers}</p>
                        </div>
                    }



                    <div>

                        <label htmlFor="">Pick Your Booking date : </label>

                        <DatePicker
                            className="border p-2 rounded-md text-[#eb865e]"
                            selected={startDate}
                            dateFormat="MMMM d, yyyy"
                            onChange={(date) => setStartDate(date)} />

                    </div>



                    {/* modal */}

                    <div className=" ">

                        <button
                            onClick={() => setOpenModal(true)}
                            className=" w-full px-6 py-2 tracking-wide text-[#ff4338] rounded-md  font-normal font-400  border border-[#ff4338]  hover:text-white capitalize transition-colors duration-300 transform bg-[]  hover:bg-[#ff4338] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Book Now</button>
                    </div>

                    {/* reviews sewction */}
                    <div className="">
                        <button
                            onClick={toggleReviewsModal}
                            className=" w-full px-6 py-2 tracking-wide text-[#ff4338] rounded-md  font-normal font-400  border border-[#ff4338]  hover:text-white capitalize transition-colors duration-300 transform bg-[]  hover:bg-[#ff4338] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                        >
                            See Reviews
                        </button>
                    </div>

                    {/* Reviews section */}
                    {reviews && (
                        <Modal show={openModal2} onClose={toggleReviewsModal}>
                            <Modal.Header className="underline jost-600">
                                Reviews for {name}
                            </Modal.Header>
                            <Modal.Body>
                                {reviews.map((review, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <p className="text-2xl font-500">Clients Name: {review.username}</p>
                                        <p className="font-500">Comments :  {review.comment}</p>

                                        <div className="flex items-center gap-2">
                                        <p>{review.rating}
                                        
                                        </p>
                                        <FcRating></FcRating> 
                                        </div>

                                        <p>{review.timestamp}</p>
                                    </div>
                                ))}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={toggleReviewsModal}>Close</Button>
                            </Modal.Footer>
                        </Modal>
                    )}





                    {/* {reviews &&

                    reviews.map((review, idx) => <div key={idx}>
                        <p>{review.username}</p>
                        <p>{review.comment}</p>
                        <p>{review.timestamp}</p>
                        
                    </div>)
                   } */}



                    {/* booking summary modal */}
                    <Modal show={openModal} onClose={() => setOpenModal(false)}>

                        <Modal.Header className="underline jost-600">Booking Summary : </Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <h2 className="text-2xl leading-relaxed text-[#3665b8] dark:text-gray-400 jost-600">
                                    {description}
                                </h2>
                                <p className="text-base leading-relaxed text-[#3665b8]  dark:text-gray-400 font-500">
                                    {pricePerNight} $ Per Night
                                </p>
                                <p className="font-500 text-[#3665b8] ">Booked For : {startDate.toDateString()}</p>

                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button onClick={handleBookRoom}>Confirm</Button>

                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                Close
                            </Button>
                        </Modal.Footer>

                    </Modal>


                </div>


            </div>
        </div>
    );
};

export default RoomDetails;