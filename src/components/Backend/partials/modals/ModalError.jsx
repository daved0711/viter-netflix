import { Archive, Frown, Info, Trash2, X } from 'lucide-react'
import React from 'react'
import ModalWrapper from './Modalwrapper'

const ModalError = () => {
return (
    <>
     <ModalWrapper>
        <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2
        -translate-y-1/2 max-w-[300px] w-full rounded-md border border-line">
           
            <div className='modal-body p-2 py-4 text-center'>

                <Frown className='text-alert mx-auto mb-4' size={35}/>
               
                <h5>Validation Issue</h5>
                <p className='my-5 text-center'> 
                  Something went wrong. Please reload the page
                </p>
                <button className='btn btn-alert w-full flex justify-center'>okay</button>
                
            </div>
        </div>
    </ModalWrapper>
      
    </>
  )
}

export default ModalError
