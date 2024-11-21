import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Search } from 'lucide-react'

const Headers = () => {
  return (
 <>
 <header className='bg-black py-2 text-lg '>
    <div className="container ">
        <div className=' flex justify-between px-40'>
            <div className=' flex items-center gap-5'>
            <img src={`${imgPath}/Netflix-logo.png`} alt="" />           
            <ul className='text-white flex gap-4'>
                <li>Tv shows</li>
                <li>Movies</li>
                <li>Recently Added</li>
                <li>My list</li>
            </ul>
            </div>
            <button className='text-white'><Search /></button>
        </div>
    </div>
 </header>
 </>
 
  )
}

export default Headers
