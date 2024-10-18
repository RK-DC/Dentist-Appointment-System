import React from 'react';
import Login from '../components/Login';
import { Helmet } from 'react-helmet';

const AuthPage = () => {
    return (
        <>
         <Helmet>
        <title>{"Login"}</title>
        </Helmet>
        <Login />
        </>
    )
}

export default AuthPage;