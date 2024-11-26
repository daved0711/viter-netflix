import { Bell, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Header = () => {
  const[scrollPostion,setscrollPostion] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener('scroll',() => setscrollPostion(window.scrollY) );
    return  window.removeEventListener('scroll',() => setscrollPostion(window.scrollY) );
  }, [])

  return (
    <>
       <header className={`${scrollPostion > 200 ? "bg-black text-white z-[2]": ""} fixed w-full bg-gradient-to-b from-black to-transparent  py-5 px-10 top-0 left-0 `} >
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
    </>
  )
}

export default Header
