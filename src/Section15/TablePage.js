import Table from "../Component/Table";

function TablePage() {


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
            sortable: true,
            sortField: 'id',
        },
        {
            label: 'Name',
            render: (row) => row.name,
            sortable: true,
            sortField: 'name',

        },
        {
            label: 'Score',
            render: (row) => row.score,
            sortable: true,
            header:() => <th className="bg-red-500">Score </th>,
            sortValue: (row) => row.score,

        },
        {
            label: 'Color',
            render: (row) => <div className={`p-2 m-3 ${row.color}`}>{row.color}</div>,
            sortable: true,
            sortField: 'color',

        }
    ];


    const keyFn = (item) => {
        return item.label;
    };

    return (
        <div>
            <Table
                data={data}
                config={columns}
                keyFn={keyFn}
            >
            </Table>
        </div>
    );
}

export default TablePage;