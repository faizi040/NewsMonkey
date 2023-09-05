import React from 'react';
import loading from './loading.gif';

export default function Spinner() {

  return (
    <div className=' spinner mx-auto'>
      <img className='spinner-img my-5' src={loading} alt="loading" />
    </div>
  )

}








