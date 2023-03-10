import React, {useState} from "react";
import classNames from "classnames";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";
import AlbumList from "../Section22/AlbumList";

function ExpandablePanel({header, children,post, ...rest}) {

    const [expanded, setExpanded] = useState(false);


    return (
        <div className={`mb-2 border rounded`}>
            <div className={`flex p-2 justify-between items-center `}>
                <div className="flex flex-row justify-between items-center">
                    {header}
                </div>
                <div className="cursor-pointer" onClick={() => setExpanded(!expanded)}>

                    {
                        expanded ? <GoChevronDown/> :
                            <GoChevronLeft/>
                    }
                </div>
            </div>
            <div className="p-2 border-t">
                {expanded && <div className="p-2 border-t" >
                    {children}
                    <AlbumList post={post}/>

                </div>}
            </div>

        </div>
    );


}

export default ExpandablePanel;