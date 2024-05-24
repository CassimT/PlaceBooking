import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';

import LoginPage from '../../pages/LoginPage';

function PrivateRouters({ authToken }) {
    const auth = {'token':false};
  return (
    auth.token ? <Outlet/> : <LoginPage/>
  )
}

export default PrivateRouters