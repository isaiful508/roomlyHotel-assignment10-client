import { useLoaderData } from "react-router-dom";
"use client";
import { Button, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";






const RoomDetails = () => {

    const room = useLoaderData();
    const { user } = useContext(AuthContext);

    const [openModal, setOpenModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const {
        name,
        description,
        pricePerNight,
        availability,
        image,
        roomSize,
        specialOffers,
        _id

    } = room || {};


    const handleBookRoom =  async (e) => {
        e.preventDefault();
        setOpenModal(false)
        const bookingDate = startDate;

        const booking = {
            _id,
            customerName: user?.displayName,
            customerEmail: user?.email,
            roomName: name,
            roomDetails : description,
            price: pricePerNight,
            date: bookingDate,
            photo: image,

        }

       try{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, booking)
        console.log(data);
        // await axios.put(`${import.meta.env.VITE_API_URL}/room-details/${_id}`, {}); // Update room availability
       
        Swal.fire({
            icon: 'success',
            title: 'Booking Confirmed!',
            text: 'Your booking has been successfully confirmed.',
            showConfirmButton: false,
            timer: 1500 
        });
        
       } catch(err) {
        console.log(err);
       }
    
    // try {
    //     const response = await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, booking);
    //     if (response.status === 201) {
    //         console.log("Booking successfully created");
    //         // Handle success notification
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Booking Confirmed!',
    //             text: 'Your booking has been successfully confirmed.',
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     } else {
    //         // Handle error cases
    //         console.error("Failed to create booking:", response.statusText);
    //         // Show error notification
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Booking Failed',
    //             text: 'Failed to create booking. Please try again later.',
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }
    // } catch (error) {
    //     console.error("Failed to create booking:", error);
    //     // Show error notification
    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Booking Failed',
    //         text: 'Failed to create booking. Please try again later.',
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    // }


    }
    



 return (
        <div>



            <div>
                <h2 className="text-3xl text-center mt-4 mb-6">Room Details Page </h2>
            </div>
            <div className="card container mx-auto lg:card-side bg-base-100 shadow-lg">

                <figure className="max-w-3xl">
                    <img src={image} alt="Album" />
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p>{description}</p>
                    <p> Price Per Night : {pricePerNight} $</p>
                    <p>Availability :  {availability}</p>
                    <p>{roomSize}</p>
                    <h2 className="text-2xl">Special Offers: </h2>

                    <li>{specialOffers?.[0]}</li>
                    <li>{specialOffers?.[1]}</li>

                    <div>
                        
                            <label htmlFor="">Booking Date : </label>
                            {/* <input type="date" name="date" className="input input-bordered" /> */}
                            <DatePicker
                             selected={startDate}
                             dateFormat="MMMM d, yyyy"
                              onChange={(date)=> setStartDate(date)} />
                        
                    </div>



                    {/* modal */}

                    <div className=" ">

                        <button
                            onClick={() => setOpenModal(true)}
                            className=" w-full px-6 py-2 tracking-wide text-[#ff4338] rounded-md  font-normal font-400  border border-[#ff4338]  hover:text-white capitalize transition-colors duration-300 transform bg-[]  hover:bg-[#ff4338] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Book Now</button>
                    </div>




                    <Modal show={openModal} onClose={() => setOpenModal(false)}>

                        <Modal.Header>Booking Summary : </Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <h2 className="text-2xl leading-relaxed text-gray-500 dark:text-gray-400">
                                    {description}
                                </h2>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    {pricePerNight} $ Per Night
                                </p>
                                <p>Booked For : {startDate.toDateString()}</p>

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