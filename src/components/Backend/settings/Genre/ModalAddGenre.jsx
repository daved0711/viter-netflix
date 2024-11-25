import React from 'react'
import SpinnerButton from '../../partials/spinners/SpinnerButton'
import { X } from 'lucide-react'
import { setIsAdd } from '@/components/Store/storeAction';
import { StoreContext } from '@/components/Store/storeContext';
import ModalWrapper from '../../partials/modals/ModalWrapper';

const ModalAddGenre = () => {
    const { dispatch} = React.useContext(StoreContext);

    const handleClose = () => {dispatch(setIsAdd(false));
    };
  return (
    <>
       <ModalWrapper>
        <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2
        -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
            <div className="modal-header flex gap-2 p-2  items-center border-b border-line mb-2">
              <span className='text-body'>Add Genre</span>
                <button className='ml-auto' onClick={handleClose}>
                    <X/>
                </button>
            </div>
            <div className='modal-body p-2 py-4 '>
                <form action="">
                    <div className="input-wrap">
                        <label htmlFor="">Genre</label>
                        <input type="text" />
                    </div>
                </form>
               
                <div className=' flex justify-end gap-3 mt-10'>
                  <button className='btn btn-info'><SpinnerButton/>Save</button>
                  <button className='btn btn-cancel'onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    </ModalWrapper>
    </>
  )
}

export default ModalAddGenre
