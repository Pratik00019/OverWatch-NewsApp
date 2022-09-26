import React from 'react';
import loading from './loading1.gif'
/*eslint eqeqeq:0*/

const Loading_Spinner =()=> {
  
    return (
    <div className='text-center'>
        <img className='my-3' src={loading} alt='' width="69 px"></img>
      </div>
    )
  
}

export default Loading_Spinner