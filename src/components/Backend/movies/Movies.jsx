import { Archive, ArchiveRestore, FilePenLine, FileVideo, Moon, Plus, SearchIcon, Settings, Trash2 } from 'lucide-react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { imgPath } from '@/components/Frontend/helpers/functions-general'
import SideNav from '../partials/SideNav'
import Searchbar from '../partials/Searchbar'
import Pills from '../partials/Pills'
import Modaldelete from '../partials/modals/ModalDelete'
import ModalConfirm from '../partials/modals/ModalConfirm'
import ModalValidation from '../partials/modals/ModalValidation'
import ModalError from '../partials/modals/ModalError'

const Movies = () => {
  return (
    <>
    <section className='layout-main '>
        <div className=" layout-division ">
       <SideNav/>
            <main className=''>
               <Header/>
                <div className='p-8'> 
                    <div className='flex justify-between items-center'>
                      <Searchbar/>
                        <button className='btn btn-add'>
                           <Plus size={16}/> add New
                        </button>
                    </div>  
                     <div className='mt-10 bg-secondary rounded-md p-4'>
                    <div className='table-wrapper custom-scroll'>
                    <table>
                    <thead>
                        <tr>
                        <th> # </th>
                        <th> Status </th>
                        <th> Title </th>
                        <th> Year </th>
                        <th> Duration </th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(Array(16).keys()).map((i)=>(
                            <tr keys={i}>
                            <td>{i + 1}.</td>
                            <td><Pills/></td>
                            <td>wedding Singer</td>
                            <td>1999</td>
                            <td>1hr 40mins</td>
                            <td>
                                <ul className='table-action  '>
                                    {true ? (
                                 <>
                                    <li><button className='tooltip' data-tooltip="View"><FileVideo/></button></li>
                                    <li><button className='tooltip' data-tooltip="Edit"><FilePenLine/></button></li>
                                    <li><button className='tooltip' data-tooltip="Archive"><Archive/></button></li>
                                </>) :(<>
                                    <li><button className='tooltip' data-tooltip="Restore"><ArchiveRestore/></button></li>
                                    <li><button className='tooltip' data-tooltip="Delete"><Trash2/></button></li>
                                </>)}
                               
                                    
                                </ul>
                            </td>
                        </tr>
                    ))}
                       
                    </tbody>    
                    </table>    
                    </div>
                    </div>     
                </div>
                <Footer/>
            </main>
        </div>
    </section>
    {/* <Modaldelete/> */}
    {/* <ModalConfirm/> */}
    {/* <ModalValidation/> */}
    <ModalError/>
    </>
  )
}

export default Movies
