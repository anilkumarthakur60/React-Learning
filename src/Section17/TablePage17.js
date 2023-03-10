
import SortableTable1 from "../Component/SortableTable1";

function TablePage17() {


    const data = [
        {id: 1, name: "John", score: 1, color: 'bg-red-500'},
        {id: 2, name: "Mary", score: 2, color: 'bg-green-500'},
        {id: 3, name: "Peter", score: 3, color: 'bg-blue-500'},
        {id: 4, name: "John", score: 4, color: 'bg-orange-500'},
        {id: 5, name: "Mary", score: 5, color: 'bg-yellow-500'},
        {id: 6, name: "Peter", score: 6, color: 'bg-purple-500'},
        {id: 7, name: "John", score: 7, color: 'bg-pink-500'},
        {id: 8, name: "Mary", score: 8, color: 'bg-gray-500'},
    ];


    const columns = [
        {
            label: 'Id',
            render: (row) => row.id,
            sortValue:(row)=>row.id,
        },
        {
            label: 'Name',
            render: (row) => row.name,
            sortValue:(row)=>row.name,


        },
        {
            label: 'Score',
            render: (row) => row.score,
            sortValue:(row)=>row.score,

        },
           {
            label: 'Score Square',
            render: (row) => row.score**2,
            sortValue:(row)=>row.score**2,

        },

        {
            label: 'Color',
            render: (row) => <div className={`p-2 m-3 ${row.color}`}>{row.color}</div>,
            header:() => <th className="bg-red-500">Color </th>,


        }
    ];


    const keyFn = (item) => {
        return item.label;
    };



    return (
        <div>

            <SortableTable1 config={columns} data={data} keyFn={keyFn}  ></SortableTable1>
        </div>
    );
}

export default TablePage17;