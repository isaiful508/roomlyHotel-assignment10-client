/* eslint-disable react/prop-types */
import { FaDollarSign } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";




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
        // const date = event.target.value;
        const date = event.target.elements.date.value;
        console.log('input date', date)
        // const id = booking[0]._id;


        console.log(_id);


        axios.patch(`${import.meta.env.VITE_API_URL}/bookings/${_id}`, { date: date })
            .then(data => {
                console.log(data.data)
                
            }).catch(error => {
                console.error(error);
            })

    }



    return (


        <tr className="hover:bg-[#ff4338] hover:text-white">
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


                <Modal.Body >


                    <div>


                        <form
                            onSubmit={()=>handleUpdateDate(event, _id )} className="h-[400px]" >

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
        </tr>




    );
};

export default BookingsLists;