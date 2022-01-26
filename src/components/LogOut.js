import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom'
import axiosWithAuth from '../axiosWithAuth';
function LogOut() {
    const { push } = useHistory()
    useEffect(() => {
        axiosWithAuth()
        .post('/logout')
        .then(resp => {
            console.log(resp)
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('password')
            localStorage.removeItem('role')
            push('/Login')
        }).catch(err => console.error(err))
    }, [])
    return (<div></div>)
}

export default LogOut;
