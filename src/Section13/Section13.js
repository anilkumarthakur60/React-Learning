import React, {useState,useContext} from "react";
import {NavigationProvider} from "../Context/navigation";
import Section131 from "./Section13-1";

function Section13() {




    return (
        <div>

            <NavigationProvider>
                <div className="container-lg mx-20">
                    <Section131></Section131>
                </div>

            </NavigationProvider>


        </div>
    );
}

export default Section13;