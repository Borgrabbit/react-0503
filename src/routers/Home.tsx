import React from "react";
import { Route } from "react-router";
import { HomePage } from "../pages";

const HomeRoute: React.ReactElement = (
    <Route path='/' element={<HomePage/>} />
)

export default HomeRoute;