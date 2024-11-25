import React from 'react'
import SideNav from '../partials/SideNav'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import { Link } from 'react-router-dom'
import { Archive, ArchiveRestore, FilePenLine, Plus } from 'lucide-react'
import LoadMore from '../partials/LoadMore'
import IconServerError from '../partials/IconServerError'
import IconNoData from '../partials/IconNoData'
import TableLoader from '../partials/TableLoader'
import Pills from '../partials/Pills'
import Category from './Category/Category'
import Ratings from './Ratings/Ratings'
import Genre from './Genre/Genre'

const Settings = () => {
    const [tableIndex, setTableIndex] = React.useState(0);
    const tables = [ <Category/>, <Ratings/>,<Genre/> ];

    const handleChangeIndex = (index) => setTableIndex(index);
  return (
    <>
    <section className='layout-main '>
        <div className=" layout-division ">
       <SideNav/>
            <main className=''>
               <Header title='Settings' subtitle='Manage movies options'/>
                <div className='p-8'> 
                 <ul className='flex leading-snug gap-10 font-semibold  mb-5 border-b border-line'>
                    <li><button>General</button></li>
                    <li className={`${tableIndex === 0 ? "border-b-4 border-accent pb-5 text-accent" : ""}`}> <button onClick={() => handleChangeIndex(0)}>Category</button></li>
                    <li className={`${tableIndex === 1 ? "border-b-4 border-accent pb-5 text-accent" : ""}`}><button onClick={() => handleChangeIndex(1)}>Ratings</button></li>
                    <li className={`${tableIndex === 2 ? "border-b-4 border-accent pb-5 text-accent" : ""}`}><button onClick={() => handleChangeIndex(2)}>Genre</button></li>
                    
                    </ul>
                    {tables[tableIndex]}
                </div>
                 
                <Footer/>
            </main>
        </div>
    </section>
    </>
  )
}

export default Settings
