import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'
import { Bell, Info, Play, Search, Speaker, Volume2 } from 'lucide-react'
import Header from './Header'
import { movies } from '@/components/Backend/movies/datamovies'


const Banner = () => {

  const getFeatureMovie =
  movies[Math.floor(Math.random() * movies.length)];
  

  
  return (
    <>
    <section className='w-full h-[90vh]'>
             <Header/>
              <div className="banner text-white">
                <img src={`${imgPath}/${getFeatureMovie.movie_image}`} alt="" className='w-full object-cover h-screen' />
              
              <div className='absolute bottom-[200px] left-10 max-w-[700px]'>
                <h1 className=' text-white mb-5'>{getFeatureMovie.movie_title}</h1>
                <p className='text-xl  mb-10'>{getFeatureMovie.movie_summary}</p>
                   <div className='flex gap-4 items-center'>
                <button className='rounded-md px-7 py-4 text-2xl flex gap-2 items-center bg-white text-black font-semibold hover:bg-opacity-70'>
                  <Play fill='black' size={30}/>Play</button>
                <button className='rounded-md px-7 py-4 text-2xl flex gap-2 items-center
                  text-white font-semibold bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.9)]'><Info size={30}/>More info</button>
                </div>
              </div>
              <div className='absolute right-0 bottom-[200px] flex gap-5 items-center'>
                <button className='size-[55px] center-all border border-white rounded-full'><Volume2 size={30}/></button>

                <div className='w-[150px] p-3  bg-[rgba(109,109,110,0.5)] border-l-4 border-white text-xl'>
                {getFeatureMovie.movie_rating}
                </div>
              </div>
              </div>
    </section>
      
    </>
  )
}

export default Banner
