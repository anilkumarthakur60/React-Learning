import Table from "./Table";
import {useState} from "react";
import {BsArrowBarDown, BsArrowBarUp, BsArrowsExpand} from "react-icons/bs";

function    SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleClick = (label) => {

        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return
        }

        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        } else if (sortOrder === 'desc') {

            setSortOrder(null)
            setSortBy(null)
            // setSortOrder('asc')
            // setSortBy(label)
        }
    }

    const {config, data} = props;
    const updatedConfig = config.map((item) => {
        if (item.sortValue) {
            return {
                ...item,
                header: () => {
                    return (
                        <th className="cursor-pointer " onClick={() => {
                            handleClick(item.label);
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

    let sortedData = data;
    if (sortOrder && sortBy) {
        const {sortValue} = config.find((item) => item.label === sortBy);
        sortedData = [...data.sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }


        })
        ]
    }



    return (
        <div>
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


export default SortableTable;