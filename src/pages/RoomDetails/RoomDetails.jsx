import { useLoaderData } from "react-router-dom";
"use client";
import { Button, Modal } from "flowbite-react";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";






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
        
       } catch(err) {
        console.log(err);
       }

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
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        
                    </div>



                    {/* modal */}

                    <div className=" ">

                        <button
                            onClick={() => setOpenModal(true)}
                            className=" w-full px-6 py-2 tracking-wide text-[#ff4338] rounded-md  font-normal font-400  border border-[#ff4338]  hover:text-white capitalize transition-colors duration-300 transform bg-[]  hover:bg-[#ff4338] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Book Now</button>
                    </div>




                    <Modal show={openModal} onClose={() => setOpenModal(false)}>

                        <Modal.Header>Terms of Service</Modal.Header>
                        <Modal.Body>
                            <div className="space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                                    companies around the world are updating their terms of service agreements to comply.
                                </p>
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                                    to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                                    soon as possible of high-risk data breaches that could personally affect them.
                                </p>
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