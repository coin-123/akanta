import React from 'react'
import './brand.css';
import Brandimg from '../../assets/Frame 536.png'
import Quote from '../../assets/Vector.png';
import Arrow from '../../assets/arrow-circle-right.png';
import Arrow2 from '../../assets/arrow-circle-left.png';
import Frame1 from '../../assets/Frame 535 (1).png'
import frame2 from '../../assets/Frame 535.png'

import { useState, useRef, useEffect } from 'react';
// import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Brand = () => {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navReady, setNavReady] = useState(false);

  // Wait until refs are set
  useEffect(() => {
    setNavReady(true);
  }, []);

  // const [controlledSwiper, setSwiper] = useState(null);

  return (
          <section id="brandsec">






        <div className="brandcontents">
                <div className="brandhead">
                <h2 className="brandtitle">
                    A brand you can trust
                  <br />  Reviews don’t lie
                </h2>
            </div>
            <div className="branddes">
               <div className="custom-swiper-nav">
            <button ref={prevRef} className="swiper-button-prev-custom">  <img src={Arrow} alt="" className="leftarrow" /> </button>
            <button ref={nextRef} className="swiper-button-next-custom"> <img src={Arrow2} alt="" className="rightarrow" /> </button>
          </div>
      {navReady && (
                    <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
    >
     <div className="swipe">
       <SwiperSlide>
        <div className="miniholder">
               <div className="brandtext">
                 <div className="quoteimgs">
                    <img src={Quote} alt="" className="quoteimg" />

                </div>
                 <p className="brandpara">
                    Akanta has transformed our sales process.
                    it is user-friendly and has powerful analytics that have
                    boost our productivity and improve lead management.
                    Highly recommended for all sales team.                 </p>
               </div>
               <div className="brandimgs">
                <img src={Brandimg} alt="" className="brandimg" />

                <div className="imgname">
                  <h3 className="brandname">John Doe</h3>
                  <p className="brandposition">Sales Manager,Corp</p>
                </div>
               </div>

                              </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="miniholder">
               <div className="brandtext">
                 <div className="quoteimgs">
                    <img src={Quote} alt="" className="quoteimg" />

                </div>
                 <p className="brandpara">
                    Akanta has transformed our sales process.
                    it is user-friendly and has powerful analytics that have
                    boost our productivity and improve lead management.
                    Highly recommended for all sales team.                 </p>
               </div>
               <div className="brandimgs">
                <img src={Frame1} alt="" className="brandimg" />

                <div className="imgname">
                  <h3 className="brandname">John Doe</h3>
                  <p className="brandposition">Sales Manager,Corp</p>
                </div>
               </div>

                              </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="miniholder">
               <div className="brandtext">
                 <div className="quoteimgs">
                    <img src={Quote} alt="" className="quoteimg" />

                </div>
                 <p className="brandpara">
                    Akanta has transformed our sales process.
                    it is user-friendly and has powerful analytics that have
                    boost our productivity and improve lead management.
                    Highly recommended for all sales team.                 </p>
               </div>
               <div className="brandimgs">
                <img src={frame2} alt="" className="brandimg" />

                <div className="imgname">
                  <h3 className="brandname">John Doe</h3>
                  <p className="brandposition">Sales Manager,Corp</p>
                </div>
               </div>

                              </div>
      </SwiperSlide>
     </div>
    </Swiper>
    )}
            

            </div>
        </div>
    </section>
  )
}

export default Brand
