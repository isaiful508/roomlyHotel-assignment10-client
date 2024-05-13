/* eslint-disable react/prop-types */
import { FaDollarSign } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";




const BookingsLists = ({ item, index }) => {

    // console.log(item);
    const { roomName, roomDetails, price, _id, date, } = item;
    const [openModal, setOpenModal] = useState(false);





    //handle calcel booking

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
                                    // getData();
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

    //handle update the date
    const handleUpdateDate = (event, _id) => {
        event.preventDefault();
        setOpenModal(false)
        // const date = event.target.value;
        const date = event.target.elements.date.value;
        console.log('input date', date)
        // const id = booking[0]._id;


        console.log(_id);


        axios.patch(`${import.meta.env.VITE_API_URL}/bookings/${_id}`, { date: date })
            .then(data => {
                console.log(data.data)
                if (data.data.modifiedCount > 0) {
                    toast.success("Updated Successfully")

                }

            }).catch(error => {
                console.error(error);
            })

    }



    return (


        <tr className="hover:bg-red-500 font-500 hover:text-white">
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{roomName}</td>
            <td className="border px-4 py-2">{
                roomDetails}</td>
            <td className="border px-4 py-2 flex items-center">{price} <FaDollarSign></FaDollarSign> </td>
            <td className="border px-4 py-2">{new Date(date).toLocaleDateString()}</td>

            <td className="border px-4 py-2 ">
                <TiDeleteOutline onClick={() => handleCancel(_id)} className="text-2xl "></TiDeleteOutline>

            </td>
            <td className="border px-4 py-2">
                <FaRegEdit onClick={() => setOpenModal(true)}></FaRegEdit>
            </td>
            <td className="border px-4 py-2">
                <button className="link">Post</button>
            </td>


            <Modal show={openModal} onClose={() => setOpenModal(false)}>

                <Modal.Header className="font-600 ">
                   Update Your Booking Date
                    </Modal.Header>

                <Modal.Body >


                    <div>


                        <form
                            onSubmit={() => handleUpdateDate(event, _id)} className="h-" >

                            <div className="flex gap-5">
                                <input name="date" type="date" className="border border-[#ff4338] p-2 rounded-md" />


                                <input className="px-6 py-2 font-medium tracking-wide border border-[#ff4338] text-[#ff4338]  hover:text-white capitalize transition-colors duration-300 transform    hover:bg-[#ff4338] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80  font-600 rounded-lg" type="submit" value="Update" />

                            </div>

                        </form>



                    </div>

                </Modal.Body>



            </Modal>
        </tr>




    );
};

export default BookingsLists;