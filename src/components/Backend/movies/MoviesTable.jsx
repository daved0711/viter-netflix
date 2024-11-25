import React from 'react'
import IconServerError from '../partials/IconServerError'
import TableLoader from '../partials/TableLoader'
import LoadMore from '../partials/LoadMore'
import Pills from '../partials/Pills'
import { Archive, ArchiveRestore, FilePenLine, FileVideo, Trash2 } from 'lucide-react'
import IconNoData from '../partials/IconNoData'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import { StoreContext } from '@/components/Store/storeContext'
import { setIsConfirm, setIsDelete, setIsView } from '@/components/Store/storeAction'
import ModalDelete from '../partials/modals/ModalDelete'
import ModalConfirm from '../partials/modals/ModalConfirm'
import ModalViewMovies from './ModalViewMovies'

const MoviesTable = () => {
     const { dispatch, store} = React.useContext(StoreContext);

  const handleDelete = () => {
    dispatch(setIsDelete(true));
    }
  const handleRestore = () => {
    dispatch(setIsConfirm(true));
    }
  const handleArchive = () => {
    dispatch(setIsConfirm(true));
    }
  const handleView = () => {
    dispatch(setIsView(true));
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
                        {Array.from(Array(7).keys()).map((i)=>(
                            <tr key={i}>
                            <td>{i + 1}.</td>
                            <td><Pills/></td>
                            <td>wedding Singer</td>
                            <td>1999</td>
                            <td>1hr 40mins</td>
                            <td>
                                <ul className='table-action  '>
                                    {true ? (
                                 <>
                                    <li><button className='tooltip' data-tooltip="View" onClick={() => handleView()}><FileVideo/></button></li>
                                    <li><button className='tooltip' data-tooltip="Edit" onClick={() => handleAdd()}><FilePenLine/></button></li>
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
                    {store.isAdd && <ModalViewMovies/>} 
                      { store.isDelete && <ModalDelete/>}
                     {store.isConfirm && <ModalConfirm/> }
                    
                     </>
  )
}

export default MoviesTable
