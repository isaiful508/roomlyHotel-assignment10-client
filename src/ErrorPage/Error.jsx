
import { Link } from 'react-router-dom';
import img from '../assets/pikabu.gif'
const Error = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            
            <h1 className="mt-3 jost-600 text-
            4xl  text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
            <p className="mt-4 font-500 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for does not exist</p>
  
            <div className="flex items-center mt-6 gap-x-3">
              
              <Link to='/' className="w-1/2 px-5 py-2 text-sm tracking-wide hover:text-white transition-colors duration-200 font-500 hover:bg-[#ff4338] border-[#ff4338] border-2 rounded-lg shrink-0 sm:w-auto hover:bg-[c] dark:hover:bg-blue-500 dark:bg-blue-600">
                Take me home
              </Link>
            </div>
          </div>
          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover" src={img} alt="" />
          </div>
        </div>
      </section>
    );
};

export default Error;