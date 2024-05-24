import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import SignIn from '../Authetication/SingIn';
import LoginPage from '../../pages/LoginPage';

function PrivateRouters({ authToken }) {
    const auth = {'token':true};
  return (
    auth ? <Outlet/> : <LoginPage/>
  )
}

export default PrivateRouters