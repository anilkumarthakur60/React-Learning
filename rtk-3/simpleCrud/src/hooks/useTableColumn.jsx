import {CustomMaterialMenu} from "../component/table/CustomMaterialMenu.jsx";


export function  useTableColumn(){

    const postsColumn=[
        {
            name: 'id',
            selector: row => row.id,
            sortable: true,
            sortField: 'id',
            reorder: true,
        },
        {
            name: 'name',
            selector: row => row.name,
            sortable: true,
            sortField: 'name',
            reorder: true,
        },
        {
            name: 'slug',
            selector: row => row?.slug,
            sortable: true,
            sortField: 'slug',
            format: row => `${row?.slug?.slice(0, 200)}...`,
            reorder: true,
        },

        {
            name: 'actions',
            cell: row => <CustomMaterialMenu size="small" row={row} onDeleteRow={(val)=>{logDat(val)}}  />,
            allowOverflow: true,
            button: true,
        },
    ]

    const logDat=(val)=>{
        console.log(val)
    }

    return {
        postsColumn
    }
}
