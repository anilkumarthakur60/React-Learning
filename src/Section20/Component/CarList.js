import {useSelector} from "react-redux";


function CarList() {
    const data = useSelector((state) => {
        return state.cars.cars;
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


    return (
        <div className="bg-purple-50 h-full w-full">
            <table className="table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2">SN</th>
                    <th className="px-4 py-2">Id</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Value</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item,i) => {
                    return (
                        <tr key={item.id}>
                            <td className="border px-4 py-2">{i+1}</td>
                            <td className="border px-4 py-2">{item.id}</td>
                            <td className="border px-4 py-2">{item.name}</td>
                            <td className="border px-4 py-2">{item.cost}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
)
}

export default CarList;