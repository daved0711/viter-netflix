import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Koreandrama from './Koreandrama'
import { ChevronLeft, ChevronRight } from 'lucide-react';



const Koreancards = () => {

    

   

    const koreancardsArray = [
        {
            img:"12.jpg",
         
        },
        {
            img:"100.jpg",
           
        },
        {
            img:"goblin.jpg",
           
        },
        {
            img:"gentleman.jpg",
         
        },
        {
            img:"the sun.jpg",
           
        },
        {
            img:"4witches.jpg",
           
        },
    ]



    var settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed:1500,


      
        
      };
  return (
    <section className='MoviesCards py-10 bg-gray-900'>
      <div className="container">
      <div className=' flex justify-between '>
        <h2 className='mb-5 px-9  text-white'>Korean Drama</h2>
        <div className='flex text-white px-10 '>
        <button><ChevronLeft size={40} /></button> 
        <button><ChevronRight size={40}/></button>
        </div>
        </div>
     <Slider {...settings}>

        { koreancardsArray.map((item, key)=>(
           <Koreandrama item={item} key={key}/>
           
        ))}     
     </Slider>
      </div>
    </section>
  )
}

export default Koreancards
