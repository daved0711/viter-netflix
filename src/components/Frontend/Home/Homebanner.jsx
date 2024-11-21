import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Play } from 'lucide-react'

const Homebanner = () => {
  return (
    <section className='homebanner relative'>
      
            <img src={`${imgPath}/logo-head.webp`} alt=""  className='w-full h-full object-cover'/>
            <div className='absolute text-white bottom-[15rem] left-[15rem] flex flex-col gap-5'>
                <p>April 17, 2011, and May 19, 2019. HD</p>
                <h2>Game of Thrones</h2>
                <small>The series focuses on several noble houses of Westeros and a complicated, 
                   <br /> multiparty war for the Iron Throne that features shifting conflicts, alliances, and betrayals</small>
                <div className='flex gap-5'>
                <div className='bg-red-600 items-start flex border-red-600 rounded-md px-6 py-2'><Play />play</div>
                <div className='border rounded-md px-6 py-2'>Moreinfo</div>
                </div>

            </div>
     
    </section>
  )
}

export default Homebanner
