import React from 'react'
import { imgPath } from '../helpers/functions-general'

const TopMovies = ({item, key}) => {
  return (
    <section>
      
    <div className='new-arrival-card px-10 ' key={key} >
    <div className='mb-4 relative group '>
       
     <img src={`${imgPath}/${item.img}`}alt=""className="h-[30rem] w-[25rem] object-cover "/>
    
    
    </div>
            
   </div>
   </section>
  )
}

export default TopMovies