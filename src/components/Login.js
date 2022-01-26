import axios from 'axios'
import React, { Component } from 'react'

export default class Login extends Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleCredentials = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:9000/api/login', this.state.credentials)
        .then(resp => {
            localStorage.setItem('role', resp.data.role)
            localStorage.setItem('token',resp.data.token)
            localStorage.setItem('username',resp.data.username)
            this.props.history.push('/FriendsList')
        }).catch(err => console.error(err))
    }

    componentDidMount(){
        console.log('Login: Mounted')
        if(!localStorage.getItem('token')){
            console.log('you are not logged in')
        }
    }

    render() {
        return(
            <div className='LoginFormContainer'>
                <form className='LoginForm' onSubmit={this.handleSubmit}>
                    <h2>Log In</h2>
                    <label>Username: </label>
                    <input name='username' onChange={this.handleCredentials} value={this.state.username} />
                    <label>Password: </label>
                    <input name='password' onChange={this.handleCredentials} value={this.state.password} />
                    <button>Log In</button>
                </form>
            </div>
            )
      }
}
