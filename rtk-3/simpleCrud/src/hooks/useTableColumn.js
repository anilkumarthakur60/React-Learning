
function  useTableColumn(){

    const postsColumn=[
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        }
    ]

    return {
        postsColumn
    }
}

export default useTableColumn