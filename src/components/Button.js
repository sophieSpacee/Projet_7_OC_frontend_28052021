import React from 'react';

function Button (props) {
    
   return <button className='button'
   style={{backgroundColor: props.backgroundColor}}
   text={{text: props.text}}
   type={{type: props.type}}>
     {props.text}
   </button>

       
}

export default Button;