import React, { PureComponent } from 'react';
import loading from './loading1.gif'
/*eslint eqeqeq:0*/

export class Loading_Spinner extends PureComponent {
  render() {
    return (
    <div className='text-center'>
        <img src={loading} alt='' width="69 px"></img>
      </div>
    )
  }
  
}

export default Loading_Spinner