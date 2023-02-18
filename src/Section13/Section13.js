import React, {useState,useContext} from "react";
import {NavigationProvider} from "../Context/navigation";
import MainSideBar from "./MainSideBar";

function Section13() {




    return (
        <div>

            <NavigationProvider>
                    <MainSideBar></MainSideBar>

            </NavigationProvider>


        </div>
    );
}

export default Section13;