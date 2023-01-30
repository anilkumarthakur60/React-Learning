import React, {useContext} from "react";

import {Provider} from "../Context/books";
import Section8Content from "./Section8Content";

function Section8({listData}) {

    return (
       <Provider>
              <Section8Content listData={listData} />
         </Provider>
    )
}

export default Section8