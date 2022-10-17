import React from 'react'
import {ToastContainer} from 'react-toastify';

export default function CommonToast() {
  return (
    <ToastContainer
    position="bottom-center"
    hideProgressBar
    autoClose={3000}

    />        
  )
}
