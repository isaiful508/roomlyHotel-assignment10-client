import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { FaDollarSign } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Button, Modal } from "flowbite-react";
import "react-datepicker/dist/react-datepicker.css";



const MyBookings = () => {



    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    // console.log(booking[0]._id);





    useEffect(() => {


        getData();

    }, [user])
    const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/bookings/${user?.email}`)
        setBooking(data);
    }

    // console.log(booking);
    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure want to cancel?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FFB400",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/bookings/${id}`)
                    .then(response => {
                        const { data } = response;
                        console.log(data);
                        if (data.deletedCount > 0) {
                            axios.patch(`${import.meta.env.VITE_API_URL}/room-details/${id}`, { availability: 'Available' })
                                .then(updateResponse => {
                                    const { data: updateData } = updateResponse;
                                    console.log(updateData);
                                    // for refreshing UI
                                    getData();
                                    Swal.fire({
                                        title: "Canceled!",
                                        text: "Your booking has been canceled.",
                                        icon: "success"
                                    });
                                })
                                .catch(error => {
                                    console.error('Error updating room details:', error);
                                });
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting booking:', error);
                    });
            }
        });
    }




    const handleUpdateDate = (event) => {
        event.preventDefault();
        const date = event.target.elements.date.value;
        // console.log('input date', date)
        const id = booking[0]._id;

        axios.patch(`${import.meta.env.VITE_API_URL}/bookings/${id}`, { date: date })
            .then(data => {
                console.log(data.data)
            }).catch(error => {
                console.error(error);
            })

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
                        {booking.map((item, index) => (
                            <tr className="hover:bg-[#ff4338] hover:text-white" key={item._id}>
                                <td className="border px-4 py-2">{index + 1}</td>
                                <td className="border px-4 py-2">{item.roomName}</td>
                                <td className="border px-4 py-2">{item.
                                    roomDetails}</td>
                                <td className="border px-4 py-2 flex items-center">{item.price} <FaDollarSign></FaDollarSign> </td>
                                <td className="border px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>

                                <td className="border px-4 py-2 ">
                                    <TiDeleteOutline onClick={() => handleCancel(item._id)} className="text-2xl "></TiDeleteOutline>

                                </td>
                                <td className="border px-4 py-2">

                                    <FaRegEdit onClick={() => setOpenModal(true)}></FaRegEdit>

                                </td>
                                <td className="border px-4 py-2">
                                    <button className="link">Post</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* modal  */}
                <Modal show={openModal} onClose={() => setOpenModal(false)}>

                    {/* <Modal.Header>Update Booking Date</Modal.Header> */}
                    <Modal.Body >


                        <div>

                            <form
                                onSubmit={handleUpdateDate} className="h-[400px]" >

                                <input name="date" type="date" className="border p-2 rounded-md" />
                                <input className="btn" type="submit" value="Confirm" />

                            </form>



                        </div>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button color="gray" onClick={() => setOpenModal(false)}>
                            X
                        </Button>
                    </Modal.Footer>

                </Modal>
            </div>
        </div>
    );
};

export default MyBookings;