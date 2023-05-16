
function  useTableColumn(){

    const postsColumn=[
        {
            name: 'id',
            selector: row => row.id,
            sortable: true,
            sortField: 'id',
        },
        {
            name: 'name',
            selector: row => row.name,
            sortable: true,
            sortField: 'name',
        },
        {
            name: 'slug',
            selector: row => row.slug,
            sortable: true,
            sortField: 'slug',
        },
    ]

    return {
        postsColumn
    }
}

export default useTableColumn