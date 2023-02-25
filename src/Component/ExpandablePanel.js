import React from "react";
import classNames from "classnames";

function  ExpandablePanel({children,className,...rest}) {

    const  finalClassName= classNames("border rounded p-3 shadow bg-white w-full",className);
    return (
        <div className={finalClassName} {...rest}>
            {children}
        </div>
    );


}
export  default  ExpandablePanel;