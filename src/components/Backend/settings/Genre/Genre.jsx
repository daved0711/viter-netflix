import { Archive, ArchiveRestore, FilePenLine, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import Pills from '../../partials/Pills'
import IconServerError from '../../partials/IconServerError'
import IconNoData from '../../partials/IconNoData'
import TableLoader from '../../partials/TableLoader'
import ModalDelete from '../../partials/modals/ModalDelete'
import ModalConfirm from '../../partials/modals/ModalConfirm'
import { setIsAdd, setIsConfirm, setIsDelete} from '@/components/Store/storeAction'
import { StoreContext } from '@/components/Store/storeContext'
import ModalAddGenre from './ModalAddGenre'

const Genre = () => {
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
    const handleAdd = () => {
      dispatch(setIsAdd(true));
      }
  return (
    <>
      <div className='bg-secondary p-4 mt-5 border-line rounded-md'>
                     <button className=' btn btn-add'><Plus size={16}/>Add New</button>
                     <div className='table-wrapper custom-scroll mt-5 max-h-[65vh]'>
{/*                    
                   <TableLoader count={7} cols={2}/> */}
                   
                    <table>
                    <thead>
                        <tr>
                        <th> # </th>
                        <th> Status </th>
                        <th className='w-[50%]'> Genre </th>
                         
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
                            <td>Rom-com</td>
                           
                            <td>
                                <ul className='table-action  '>
                                    {true ? (
                                 <>
                                    
                                    <li><button className='tooltip' data-tooltip="Edit" onClick={handleAdd}><FilePenLine/></button></li>
                                    <li><button className='tooltip' data-tooltip="Archive"onClick={handleArchive}><Archive/></button></li>
                                </>) :(<>
                                    <li><button className='tooltip' data-tooltip="Restore"onClick={handleRestore}><ArchiveRestore/></button></li>
                                    <li><button className='tooltip' data-tooltip="Delete" onClick={handleDelete}><Trash2/></button></li>
                                </>)}
                               
                                    
                                </ul>
                            </td>
                        </tr>
                    ))}
                       
                    </tbody>    
                    </table>    

                   
                    </div>
                    </div>
                    {store.isAdd &&<ModalAddGenre/>}
                    { store.isDelete && <ModalDelete/>}
                     {store.isConfirm && <ModalConfirm/> }
    </>
  )
}

export default Genre

