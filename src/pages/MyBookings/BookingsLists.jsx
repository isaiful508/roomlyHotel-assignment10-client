

const BookingsLists = ({booking}) => {
    return (
        <tr className="hover:bg-[#ff4338] hover:text-white" key={item._id}>
        <td className="border px-4 py-2">{index + 1}</td>
        <td className="border px-4 py-2">{item.roomName}</td>
        <td className="border px-4 py-2">{item.
            roomDetails}</td>
        <td className="border px-4 py-2 flex items-center">{item.price} <FaDollarSign></FaDollarSign> </td>
        <td className="border px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>

        <td className="border px-4 py-2 ">
          <TiDeleteOutline onClick={()=> handleCancel(item._id)} className="text-2xl "></TiDeleteOutline>
            
            </td>
        <td className="border px-4 py-2">
           <FaRegEdit></FaRegEdit>
        </td>
        <td className="border px-4 py-2">
        <button className="link">Post</button>
        </td>
    </tr>
        </div>
    );
};

export default BookingsLists;