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
import ToastSuccess from '../partials/ToastSuccess'
import LoadMore from '../partials/LoadMore'
import SpinnerWindow from '../partials/spinners/SpinnerWindow'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import TableLoader from '../partials/TableLoader'
import IconNoData from '../partials/IconNoData'
import IconServerError from '../partials/IconServerError'
import ModalAddMovie from './ModalAddMovie'
import MoviesTable from './MoviesTable'
import ModalViewMovies from './ModalViewMovies'

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
                      <MoviesTable/>
                </div>

                <Footer/>
            </main>
        </div>
    </section>
    {/* <Modaldelete/> */}
    {/* <ModalConfirm/> */}
    {/* <ModalValidation/> */}
    {/* <ModalError/> */}
    {/* <ToastSuccess/> */}
    {/* <SpinnerWindow/> */}
    {/* <ModalAddMovie/> */}
    <ModalViewMovies/>
    </>
  )
}

export default Movies
