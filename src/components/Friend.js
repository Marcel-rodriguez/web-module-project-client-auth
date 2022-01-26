import React from 'react';

function Friend(props) {
    
  return <div className='Friend'>
        <h3>Name: {props.name}</h3>
        <p>Age: {props.age}</p>
        <p>Email: {props.email}</p>
    </div>
}

export default Friend;
