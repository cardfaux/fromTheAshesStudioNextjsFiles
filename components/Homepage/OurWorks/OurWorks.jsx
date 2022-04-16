import { Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import NewCardItem from '../NewCardItem';
import PhoenixEgg from '../PhoenixEgg';

import { OurWorksSection } from './OurWorksStyles';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

const OurWorks = ({ projects }) => {
  return (
    <OurWorksSection className='our--works'>
      <h1>our works</h1>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        className='mySwipper'
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <Col key={index} md='12'>
                <NewCardItem
                  slug={project.slug}
                  image={project.coverImage}
                  title={project.projectTitle}
                  subTitle={project.projectSubtitle}
                  link={{
                    href: '/projects/[slug]',
                    as: `/projects/${project.slug}`,
                  }}
                />
              </Col>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='phoenix--egg'>
        <PhoenixEgg />
      </div>
    </OurWorksSection>
  );
};

export default OurWorks;
