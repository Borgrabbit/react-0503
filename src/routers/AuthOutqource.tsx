import React from 'react';
import { Route } from 'react-router-dom';
import { AuthOutqourcePage } from '../pages'

const AuthOutqourceRoute: React.ReactElement = (
    <Route path={'/auth_outqource'} element={<AuthOutqourcePage/>} />
)

export default AuthOutqourceRoute;