import Table from "./Table";
import {useState} from "react";
import {BsArrowBarDown, BsArrowBarUp, BsArrowsExpand} from "react-icons/bs";
import useSort from "../Hooks/useSort";

function SortableTable1(props) {
    const {config, data} = props;
    const {sortOrder,sortBy,handleSortColumn,sortedData}=useSort(data,config);

    const updatedConfig = config.map((item) => {
        if (item.sortValue) {
            return {
                ...item,
                header: () => {
                    return (
                        <th className="cursor-pointer " onClick={() => {
                            handleSortColumn(item.label);
                        }}>
                            <div className="flex items-center ">
                                {getIcons(item.label, sortBy, sortOrder)}
                                {item.label}
                            </div>
                        </th>
                    );
                }
            }
        }
        return item;
    });

    // ony sort if sortOrder && sortBy is not null
    //make a copy of the data
    //find the correct sortValue function and use it to sort the copy
    //sort the copy
    //pass the copy to the table




    return (
        <div>
            {sortOrder}-{sortBy}

            <Table {...props} data={sortedData} config={updatedConfig}></Table>
        </div>
    );
}


function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <BsArrowsExpand/>
    }
    if (sortOrder === null) {

        return <BsArrowsExpand/>
    } else if (sortOrder === 'asc') {
        return <BsArrowBarUp/>
    } else if (sortOrder === 'desc') {
        return <BsArrowBarDown/>
    }
}


export default SortableTable1;