import { imgPath } from '@/components/Frontend/helpers/functions-general'
import { Clapperboard, LayoutDashboard, Star } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
    const links =[
    {
        title : 'Dashboard',
        slug : '/admin/Dashboard',
        icon : <LayoutDashboard/>,
    },
    { title : 'Movies',
        slug : '/admin/movies',
        icon : <Clapperboard/>,
    },
       
    {
        title : 'Top picks',
        slug : '/admin/top-picks',
        icon : <Star/>,
    }
]
  return (
    <>
       <aside className='p-4 border-r border-line'>
           <img src={`${imgPath}/logo-netflix.png`} alt="" className='w-[60%] mx-auto mt-2' />
           <nav>
        <ul className='mt-10'>
            {links.map((item,key)=>( <li className='px-4 py-2 mb-2 rounded-md border  border-transparent'
            key={key}>
                <NavLink to={`${item.slug}`} className="flex gap-2">
                {item.icon}{item.title}</NavLink></li>
      ))}
           
        </ul>
    </nav>
        </aside> 
    </>
    
  )
}
export default SideNav
