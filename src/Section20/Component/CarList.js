import SortableTable from "../../Component/SortableTable";

import {useSelector} from "react-redux";
import {useEffect} from "react";


function CarList() {
    const data = useSelector((state) => {
        return state.cars;
    });
    const columns = [
        {
            label: 'Id',
            render: (row) => row.id,
            sortValue: (row) => row.id,
        },
        {
            label: 'Name',
            render: (row) => row.name,
            sortValue: (row) => row.name,

        },
        {
            label: 'Value',
            render: (row) => row.value,
            sortValue: (row) => row.value,

        }
    ];
    const keyFn = (item) => {
        return item.name;
    };
    useEffect(() => {
        console.log(data);

    }, [data])


    return (
        <div className="bg-purple-50 h-full w-full">
            <SortableTable config={columns} data={data} keyFn={keyFn}></SortableTable>

        </div>
    )
}

export default CarList;