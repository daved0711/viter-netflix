import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopMovies from './TopMovies'
import { ChevronLeft, ChevronRight } from 'lucide-react';



const MoviesCards = () => {

    

   

    const moviesCardsArray = [
        {
            img:"haikyuu.jpg",
         
        },
        {
            img:"terminator.jpg",
           
        },
        {
            img:"transformers.webp",
           
        },
        {
            img:"jjk.jpg",
         
        },
        {
            img:"johnwick.webp",
           
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
        <h2 className='mb-5 px-9  text-white'>Top Movies</h2>
        <div className='flex text-white px-10 '>
        <button><ChevronLeft size={40} /></button> 
        <button><ChevronRight size={40}/></button>
        </div>
        </div>
     <Slider {...settings}>

        {moviesCardsArray.map((item, key)=>(
           <TopMovies item={item} key={key}/>
           
        ))}     
     </Slider>
      </div>
    </section>
  )
}

export default MoviesCards
