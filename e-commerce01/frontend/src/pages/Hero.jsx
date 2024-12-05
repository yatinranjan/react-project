import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/headset.jpg';
import earbuds from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrowsL: false
      };

      useEffect (() =>{
        AOS.init({
            offset: 100,
            duration:500,
            easing:'ease-in-out',
        })
        AOS.refresh();
      },[])
  return (
    <div className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
    <Slider className='w-full ' {...settings}>
        <div>
            <div className='w-full lg:px-20 px-5 lg:h [700px] h-[600px] flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${dslr})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-yellow-400 border rounded-lg border-yellow-300 px-6 py-2 text-xl'>Get upto Discount 80% Off</h1>
            <h1 data-aos='zoom-in ' data-aos-delay='100' className='text-white lg:txt-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>DSLR 360 <br />camera</h1>
            <h1 data-aos='zoom-in' data-aos-delay="100" className='text-2xl text-white'>100% trusted <span className='text-yellow-300 font-semibold'>Electronics Gadgets</span></h1>
            <button className='bg-yellow-400 px-6 py-3 rounded-lg text-black font-semibold'>ONLINE COLLECTIONS</button>           
            </div>
        </div>
        <div>
            <div className='w-full lg:px-20 px-5 lg:h [700px] h-[600px] flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${earbuds})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-yellow-400 border rounded-lg border-yellow-300 px-6 py-2 text-xl'>Get upto Discount 80% Off</h1>
            <h1 data-aos='zoom-in ' data-aos-delay='100' className='text-white lg:txt-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>Wireless  <br />Earbuds</h1>
            <h1 data-aos='zoom-in' data-aos-delay="100" className='text-2xl text-white'>100% trusted <span className='text-yellow-300 font-semibold'>Electronics Gadgets</span></h1>
            <button className='bg-yellow-400 px-6 py-3 rounded-lg text-black font-semibold'>ONLINE COLLECTIONS</button>           
            </div>
        </div>
        <div>
            <div className='w-full lg:px-20 px-5 lg:h [700px] h-[600px] flex-col justify-center items-start gap-10 bg-cover bg-center' style={{backgroundImage:`url(${headset})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-yellow-400 border rounded-lg border-yellow-300 px-6 py-2 text-xl'>Get upto Discount 80% Off</h1>
            <h1 data-aos='zoom-in ' data-aos-delay='100' className='text-white lg:txt-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]'>Best HeadPhone <br />Expansive Products</h1>
            <h1 data-aos='zoom-in' data-aos-delay="100" className='text-2xl text-white'>100% trusted <span className='text-yellow-300 font-semibold'>Electronics Gadgets</span></h1>
            <button className='bg-yellow-400 px-6 py-3 rounded-lg text-black font-semibold'>ONLINE COLLECTIONS</button>           
            </div>
        </div>

    </Slider>
    </div>
  )
}

export default Hero