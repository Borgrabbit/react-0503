import React from 'react';
import { Route } from 'react-router-dom';
import { AuthPage } from '../pages'

const AuthRoute: React.ReactElement = (
    <Route path={'/auth'} element={<AuthPage/>} />
)

export default AuthRoute;