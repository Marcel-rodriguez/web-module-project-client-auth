import axiosWithAuth from '../axiosWithAuth';
import React, { Component } from 'react';
import Friend from './Friend';

export default class FriendsList extends Component {
    state = {
        friends: []
    }

    componentDidMount(){
        axiosWithAuth()
        .get('/friends')
        .then(resp => {
            this.setState({
                ...this.state.friends,
                friends: resp.data
            })
        }).catch(err => console.error(err))
    }

  render() {
    return(
        <div>
            <h1>Friends List</h1>
            <div className='FriendContainer'>
            {this.state.friends.map(friend => {
               return (
                       <Friend id={friend.id} name={friend.name} age={friend.age} email={friend.email}   />
               )
            })}
            </div>
        </div>
    );
  }
}
