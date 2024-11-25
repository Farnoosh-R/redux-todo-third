"use client"
import React from "react";
import Card from "../../components/Card/Card";
import { Provider } from "react-redux";
import store from "../../store/store";

const home = () => {
    return(
        <div className="home h-screen pt-8">
        <Provider store={store}>
        <Card />
        </Provider>
        </div>
    )
}
export default home;