import React, {useState,useContext} from "react";
import {NavigationProvider} from "../Context/navigation";
import Section131 from "./Section13-1";

function Section13() {




    return (
        <div>

            <NavigationProvider>
                    <Section131></Section131>

            </NavigationProvider>


        </div>
    );
}

export default Section13;