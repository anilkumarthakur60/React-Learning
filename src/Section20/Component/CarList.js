import SortableTable from "../../Component/SortableTable";

import {useSelector} from "react-redux";


function CarList() {
    const data = useSelector((state) => {
        return state.cars;
    });
    console.log('---------data logging-----data---', data);
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
        return item.id;
    };


    return (
        <div className="bg-purple-50 h-full w-full">

            {data.length &&
                <SortableTable config={columns} data={data} keyFn={keyFn}></SortableTable>
            }
        </div>
    )
}

export default CarList;