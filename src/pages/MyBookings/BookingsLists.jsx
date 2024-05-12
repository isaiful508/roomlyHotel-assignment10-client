// /* eslint-disable react/prop-types */
// import { FaDollarSign } from "react-icons/fa";
// import { TiDeleteOutline } from "react-icons/ti";
// import { FaRegEdit } from "react-icons/fa";
// import Swal from "sweetalert2";
// import axios from "axios";


// const BookingsLists = ({ item, index }) => {

//     const { roomName, roomDetails, price, _id, date, } = item;


   
//     // console.log(booking);

//     const handleCancel = (id) =>{
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#FFB400",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axios.delete(`${import.meta.env.VITE_API_URL}/bookings/${id}`)
//                     .then(response => {
//                         const { data } = response;
//                         console.log(data);
//                         if (data.deletedCount > 0) {
//                             setBooking(prevBookings => prevBookings.filter(booking => booking._id !== id));
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your file has been deleted.",
//                                 icon: "success"
//                             });
//                         }
//                     })
//                     .catch(error => {
//                         console.error('Error deleting booking:', error);
//                     });
//             }
//         })
//     }



//     return (
//         <tr className="hover:bg-[#ff4338] hover:text-white">
//             <td className="border px-4 py-2">{index + 1}</td>
//             <td className="border px-4 py-2">{roomName}</td>
//             <td className="border px-4 py-2">{
//                 roomDetails}</td>
//             <td className="border px-4 py-2 flex items-center">{price} <FaDollarSign></FaDollarSign> </td>
//             <td className="border px-4 py-2">{new Date(date).toLocaleDateString()}</td>

//             <td className="border px-4 py-2 ">
//                 <TiDeleteOutline onClick={() => handleCancel(_id)} className="text-2xl "></TiDeleteOutline>

//             </td>
//             <td className="border px-4 py-2">
//                 <FaRegEdit></FaRegEdit>
//             </td>
//             <td className="border px-4 py-2">
//                 <button className="link">Post</button>
//             </td>
//         </tr>

//     );
// };

// export default BookingsLists;