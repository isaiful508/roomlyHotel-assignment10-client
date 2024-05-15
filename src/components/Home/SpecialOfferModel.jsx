


const SpecialOfferModel = ({ showModal, setShowModal }) => {

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
            <div className="relative w-11/12 max-w-lg p-8 bg-white rounded-lg shadow-lg md:w-2/3 lg:w-1/2">
                <button 
                    className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-800" 
                    onClick={() => setShowModal(false)}
                >
                    &#10005;
                </button>
                <div 
                    className="w-full h-64" // Set a height to ensure the background image is visible
                    style={{
                        backgroundImage: "url('https://i.ibb.co/Jm8gBg3/rktkn-ss-Oty-GE8-Cy-E-unsplash.jpg')", // Corrected format for backgroundImage
                        backgroundPosition: "center center",
                        backgroundSize: "cover" // Ensures the image covers the div
                    }}
                >
                    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-gray-800 bg-opacity-50">
                        <h1 className="text-4xl font-semibold leading-none text-center text-white bona-nova-regular">Special Offer!</h1>
                        <p className="pt-2 pb-8 text-xl text-center font-500 text-white">Get 50% off on your first booking. Limited time only!</p>
                        <button 
                            type="button" 
                            className="px-6 py-3 font-semibold text-gray-800 bg-white rounded-lg"
                            onClick={() => setShowModal(false)}
                        >
                            Book Now! 🥰
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SpecialOfferModel;