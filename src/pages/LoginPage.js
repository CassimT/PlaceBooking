import React, { useState } from 'react';
import SignIn from '../componets/Authetication/SignIn';


function LoginPage() {
  return (
    <div className='container absolute top-24 w-10/12 m-auto items-center p-5 right-0'>
      <SignIn />
    </div>
  );
}

export default LoginPage;
