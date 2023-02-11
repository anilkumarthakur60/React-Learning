import Table from "../Component/Table";

function TablePage(){


    const  data = [
        {id: 1, name: "John", score: 20,color:'bg-red-500'},
        {id: 2, name: "Mary", score: 21,color:'bg-green-500'},
        {id: 3, name: "Peter", score: 22,color:'bg-blue-500'},
        {id: 4, name: "John", score: 20,color:'bg-orange-500'},
        {id: 5, name: "Mary", score: 21,color:'bg-yellow-500'},
        {id: 6, name: "Peter", score: 22,color:'bg-purple-500'},
        {id: 7, name: "John", score: 20,color:'bg-pink-500'},
        {id: 8, name: "Mary", score: 21,color:'bg-gray-500'},
    ];
    const columns=['id','name','score','color'];

    return (
        <div>
            <Table data={data} columns={columns}>
            </Table>
        </div>
    );
}
export default TablePage;