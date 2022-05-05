import React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from '../pages'

const MainRoute: React.ReactElement = (
    <Route path={'/main'} element={<MainPage/>} />
)

export default MainRoute;