

const NewsLetter = () => {
    return (
        <div
        className='lg:w-full md:w-full w-96 container mx-auto rounded-xl py-16 mb-10 text-black bg-slate-100  px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl  text-2xl bona-nova-regular  py-2'>
                    Stay Updated with Our <span className="text-[#ff4338]">Roomly</span> Hotel Insider Newsletter!
                    </h1>
                    <p className="font-500">Sign up to our newsletter and get updates, deals, and exclusive offers.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center rounded-md justify-between w-full border border-[#ff4338]'>
                        <input
                            className='px-6 py-2 flex w-full  rounded-md text-black'
                            type='email'
                            placeholder='Enter Email'
                        />
                        <button className=' font-500 px-6 py-2 tracking-wide text-[#ff4338]  font-normal font-400 rounded-md hover:text-white capitalize transition-colors duration-300 transform bg-[]  hover:bg-[#ff4338] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
                           Subscribe
                        </button>
                    </div>
                    <p className="font-500">
                        We care bout the protection of your data. Read our{' '}
                        <span className='link text-[#ff4338]'>Privacy Policy.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;