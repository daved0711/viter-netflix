import React from 'react'
import SpinnerButton from '../../partials/spinners/SpinnerButton'
import { X } from 'lucide-react'
import { setIsAdd } from '@/components/Store/storeAction';
import { StoreContext } from '@/components/Store/storeContext';
import ModalWrapper from '../../partials/modals/ModalWrapper';
import *as Yup from "Yup";
import { Form, Formik } from 'formik';
import { InputText } from '@/components/Frontend/helpers/FormInputs';

const ModalAddGenre = () => {
    const { dispatch} = React.useContext(StoreContext);

    const handleClose = () => {dispatch(setIsAdd(false));
    };

    
    const initVal={
      genre_title: "",
   
  };
  
  const yupSchema = Yup.object ({
    genre_title: Yup.string().required ("Required"),
  });
  return (
    <>
       <ModalWrapper>
       <Formik
        initialValues={initVal}
        validationSchema={yupSchema}
        onSubmit={async (values) => {
          console.log(values)
        }}
      >
        {(props) => {
          return (
            <Form>
        <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2
        -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
            <div className="modal-header flex gap-2 p-2  items-center border-b border-line mb-2">
              <span className='text-body'>Add Genre</span>
                <button className='ml-auto' onClick={handleClose}>
                    <X/>
                </button>
            </div>
            <div className='modal-body p-2 py-4 '>
                
                    <div className="input-wrap">
                    <InputText 
                       label="Ratings"
                       type="text"
                       name="genre_title"/>
                    </div>
            
               
                <div className=' flex justify-end gap-3 mt-10'>
                  <button className='btn btn-info' type='submit'><SpinnerButton/>Save</button>
                  <button className='btn btn-cancel'  type='reset' onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
        </Form>
          );
        }}
      </Formik>
    </ModalWrapper>
    </>
  )
}

export default ModalAddGenre
