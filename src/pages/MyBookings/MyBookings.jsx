import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import BookingsLists from "./BookingsLists";



const MyBookings = () => {



    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    

    
    





    useEffect(() => {


        getData();

    }, [user])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/bookings/${user?.email}`)
        setBooking(data);
    }









    return (
        <div className="container lg:w-full md:w-full w-96  mx-auto mb-4">

            <div>
                <h2 className="text-4xl text-center sora-500 mb-4 mt-4 underline">My Booking Lists</h2>
            </div>
            <div className="overflow-x-auto ">
                <table className="table-auto w-full">
                    <thead className="sora-500">
                        <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Room Description</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Cancel</th>
                            <th className="px-4 py-2">Update</th>
                            <th className="px-4 py-2">Post Review</th>
                        </tr>
                    </thead>
                    <tbody className="sora-400">
                        {booking.map((item, index) =><BookingsLists
                         key={item._id}
                         item={(item)}
                         index={index}
                         ></BookingsLists> )}
                    </tbody>
                </table>
                
              


                {/* <Modal show={openModal2} onClose={() => setOpenModal2(false)}>

                    <Modal.Header>Post a Review</Modal.Header>
                    <Modal.Body >


                        <div>

                           
                            <form
                                onSubmit={handlePostReview} className="h-[400px]" >

                                <input name="date" type="date" className="border p-2 rounded-md" />
                                <input className="btn" type="submit" value="Confirm" />

                            </form>



                        </div>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button color="gray" onClick={() => setOpenModal2(false)}>
                            X
                        </Button>
                    </Modal.Footer>

                </Modal> */}

            </div>
        </div>
    );
};

export default MyBookings;