import {useState} from "react";

function useSort(data,config){

    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleSortColumn = (label) => {

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


    return {
        sortOrder:sortOrder,
        sortBy:sortBy,
        handleSortColumn:handleSortColumn,
        sortedData:sortedData

    }
}
export  default useSort