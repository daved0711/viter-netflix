import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'
import { Bell, Info, Play, Search, Speaker, Volume2 } from 'lucide-react'

const Banner = () => {
  return (
    <>
    <section className='w-full h-[90vh]'>
              <header className=' fixed w-full bg-gradient-to-b from-black to-transparent  py-5 px-10 top-0 left-0'>
                <div className="flex justify-between items-center ">
                  <div className='flex items-center gap-10'>
                    <img src={`${imgPath}/logo-netflix.png`} alt="" className='w-[120px]' />
                    <ul className=' flex gap-5 text-white'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Tv show</Link></li>
                        <li><Link to="/">Movies</Link></li>
                        <li><Link to="/">New & Popular</Link></li>
                        <li><Link to="/">My list</Link></li>
                        <li><Link to="/">Browse by language</Link></li>
                    </ul>
                    </div>

                    <ul className='flex items-center gap-5 text-white'>
                      <li><Search/></li>
                      <li>Kids</li>
                      <li><Bell/></li>
                      <li className='size-[30px] rounded-md bg-accent text-white center-all'>RP</li>
                   
                    </ul>
                </div>

              </header>
              <div className="banner text-white">
                <img src={`${imgPath}/transformers.webp`} alt="" className='w-full object-cover h-screen' />
              
              <div className='absolute bottom-[200px] left-10 max-w-[700px]'>
                <h1 className=' text-white mb-5'>Transformers</h1>
                <p className='text-xl  mb-10'>An ancient struggle between two Cybertronian races,
                  the heroic Autobots and the evil Decepticons,
                   comes to Earth, with a clue to the ultimate power held by a teenager.</p>
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
                  13+
                </div>
              </div>
              </div>
    </section>
      
    </>
  )
}

export default Banner
