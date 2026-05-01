import slide1 from "../assets/slide-1.png"
import slide2 from "../assets/slide-2.png"
import slide3 from "../assets/slide-3.png"
import slide4 from "../assets/slide-4.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules'

const Herosection = () => {
    return (
        <div className='px-10 py-5 mt-28'>
            <Swiper
                spaceBetween={40}
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
                className='overflow-x-hidden'
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                </SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Herosection