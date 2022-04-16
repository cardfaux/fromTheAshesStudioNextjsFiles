import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { testimonialsList } from '../../../store/Testimonials';
import Curve from '../../SVGs/Curve';

import { TestimonialsStylesSection } from './TestimonialStyles';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

const TestimonialsSection = () => {
  return (
    <>
      <TestimonialsStylesSection className='testimonials--wrapper'>
        <Curve />
        <div className='inside--testimonials__container'>
          <div className='just--text'>
            <h5>testimonial section</h5>
            <p>
              what customers <br /> think of us
            </p>
          </div>
          {/* <div className='article--container'> */}
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              980: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            pagination={{ clickable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className='mySwipper'
          >
            {testimonialsList.map((tL) => {
              return (
                <SwiperSlide key={tL.id.toString()}>
                  <article>
                    <div className='top-image__container'>
                      <Image
                        src={tL.coverImage}
                        alt='cuastomer testimonial'
                        width={142}
                        height={142}
                      />
                    </div>
                    <h1>{tL.name}</h1>
                    <p>{tL.shortDescription}</p>
                    <Image src='/Stars.png' alt='stars' width={111} height={16} />
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* </div> */}
        </div>
        <Curve invert />
      </TestimonialsStylesSection>
    </>
  );
};

export default TestimonialsSection;
