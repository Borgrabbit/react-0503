import React from 'react';
import { Route } from 'react-router-dom';
import { FilePage } from '../pages'

const FileRoute: React.ReactElement = (
    <Route path={'/file'} element={<FilePage/>} />
)

export default FileRoute;