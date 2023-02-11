import Table from "./Table";
import {useState} from "react";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleClick = (label) => {
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
                        <th onClick={() => {
                            handleClick(item.label);
                        }}>
                            {item.label}
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

            if(typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            }else {
                return (valueA - valueB) * reverseOrder;
            }


        })
        ]
    }


    return (
        <div>
            {sortOrder}-{sortBy}

            <Table {...props} data={sortedData} config={updatedConfig}></Table>
        </div>
    );
}

export default SortableTable;