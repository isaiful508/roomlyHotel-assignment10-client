
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';




const Banner = () => {
    return (
        <div className=' container  mx-auto'>
             <Swiper
        effect={'cards'}
        // grabCursor={true}
        modules={[EffectCards]}
        loop={true}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}

        className="mySwiper"
      >


        <SwiperSlide 
        
        >

       <div 
       className='min-h-screen'
        style={{ backgroundImage: 'url(https://i.ibb.co/VvRHzJG/room-banner-img.jpg)' }}
       
       >

        <h1 className='text-6xl text-center'> This is Room</h1>
       </div>
        
        </SwiperSlide>



        <SwiperSlide>

        <div 
       className='min-h-screen bg-center  bg-cover bg-no-repeat'
        style={{ backgroundImage: 'url(https://i.ibb.co/wdqCS8X/banner1-2.jpg)' }}
       
       >
        <h1 className='text-6xl text-center'> This is Room</h1>
       </div>
        </SwiperSlide>


        <SwiperSlide>

        <div 
       className='min-h-screen bg-center  bg-cover bg-no-repeat'
        style={{ backgroundImage: 'url(https://i.ibb.co/hZN8FfC/banner3-2.jpg)' }}
       
       >
        <h1 className='text-6xl text-center'> This is Room</h1>
       </div>
        </SwiperSlide>



        <SwiperSlide>
        <div 
       className='min-h-screen bg-center  bg-cover bg-no-repeat'
        style={{ backgroundImage: 'url(https://i.ibb.co/XxcRmqx/banner2-2.jpg)' }}
       
       >
        <h1 className='text-6xl text-center'> This is Room</h1>
       </div>
        </SwiperSlide>


        
      </Swiper>


        </div>




    );
};

export default Banner;