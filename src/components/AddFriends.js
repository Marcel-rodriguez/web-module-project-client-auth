import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../axiosWithAuth';

function AddFriends() {
    const {push} = useHistory()
    const [text, setText] = useState({
        user: {
            name: '',
            age: '',
            email: ''
        }
    })
    const handleTextInput = (e) => {
        setText({
            user: {
                ...text.user,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/friends', text.user)
        .then(resp => {
            console.log(resp)
            push('/FriendsList')
        }).catch(err => console.error(err))
    }

  return(
      <div className='AddFriendsContainer'>
          <form className='AddFriends' onSubmit={handleSubmit}>
          <label>name: </label>
          <input onChange={handleTextInput} value={text.user.name} name='name'/>
          <label>age: </label>
          <input onChange={handleTextInput} value={text.user.age} name='age'/>
          <label>email: </label>
          <input onChange={handleTextInput} value={text.user.email} name='email'/>
          <button>Add</button>
      </form>
      </div>
  );
}

export default AddFriends;
