import React from 'react'
import IconServerError from '../partials/IconServerError'
import TableLoader from '../partials/TableLoader'
import LoadMore from '../partials/LoadMore'
import Pills from '../partials/Pills'
import { Archive, ArchiveRestore, FilePenLine, FileVideo, Trash2 } from 'lucide-react'
import IconNoData from '../partials/IconNoData'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import { StoreContext } from '@/components/Store/storeContext'
import { setIsAdd, setIsConfirm, setIsDelete, setIsView } from '@/components/Store/storeAction'
import ModalDelete from '../partials/modals/ModalDelete'
import ModalConfirm from '../partials/modals/ModalConfirm'
import ModalViewMovies from './ModalViewMovies'
import { movies } from './datamovies'

const MoviesTable = () => {
     const { dispatch, store} = React.useContext(StoreContext);
     const [movieInfo, setmovieInfo] = React.useState("");
   let counter = 1;
  const handleDelete = () => {
    dispatch(setIsDelete(true));
    }
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
    }
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
    }
  const handleView = (item) => {
    dispatch(setIsView(true));
    setmovieInfo(item)
    }
  const handleEdit = () => {
    dispatch(setIsAdd(true));
    }
  return (
    <>
    <div className='mt-10 bg-secondary rounded-md p-4 border border-line relative' >
                        {/* <SpinnerTable/> */}
                    <div className='table-wrapper custom-scroll'>
                   
                   {/* <TableLoader count={7} cols={2}/> */}
                   
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
                        {/* <tr>
                            <td colSpan={100}>
                               <IconNoData/>
                            </td>    
                        </tr>
                        <tr>
                            
                             <td colSpan={100}>
                               <IconServerError/>
                            </td>
                            
                        </tr> */}
                       {movies.map((item, key)=>( 
                        <tr  key={key}>
                            <td>{counter++}.</td>
                            <td><Pills/></td>
                            <td>{item.movie_title}</td>
                            <td>{item.movie_year}</td>
                            <td>{item.movie_duration}</td>
                            <td>
                                <ul className='table-action  '>
                                    {item.movie_is_active ? (
                                 <>
                                    <li><button className='tooltip' data-tooltip="View" onClick={() => handleView(item)}><FileVideo/></button></li>
                                    <li><button className='tooltip' data-tooltip="Edit" onClick={() => handleEdit()}><FilePenLine/></button></li>
                                    <li><button className='tooltip' data-tooltip="Archive" onClick={()=>handleArchive()}><Archive /></button></li>
                                </>) :(<>
                                    <li><button className='tooltip' data-tooltip="Restore" onClick={()=>handleRestore()}><ArchiveRestore /></button></li>
                                    <li><button className='tooltip' data-tooltip="Delete" onClick={()=>handleDelete()}><Trash2 /></button></li>
                                </>)}
                               
                                    
                                </ul>
                            </td>
                        </tr>

                       ))}
                           
                    
                       
                    </tbody>    
                    </table>    

                    <LoadMore/>
                    </div>
                    </div> 
                  
                    {store.isDelete && <ModalDelete/>}
                     {store.isConfirm && <ModalConfirm/> }
                     {store.isView && <ModalViewMovies movieInfo= {movieInfo}/> }
                    
                     </>
  )
}

export default MoviesTable
