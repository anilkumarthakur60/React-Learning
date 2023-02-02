import React from "react";
import Section81 from "./Section81";
import {Provider} from "../Context/books1";

function Section81MainFile() {

    return (
        <div>
            <Provider>

                <Section81/>
            </Provider>
        </div>
    )
}

export default Section81MainFile