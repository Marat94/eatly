import React from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const success = (text) => {
  return (
    <>
      {
        toast(text || 'Success request', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        })
      }
    </>
  )
}

const error = (error) => {
  return (
    <>
      {toast(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    </>
  )
}

export {
  success,
  error
}