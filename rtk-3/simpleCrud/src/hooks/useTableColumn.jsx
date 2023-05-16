import {CustomMaterialMenu} from "../component/table/CustomMaterialMenu.jsx";


export function  useTableColumn(){

    const postsColumn=[
        {
            name: 'id',
            selector: row => row.id,
            sortable: true,
            sortField: 'id',
            right: true,
            reorder: true,
        },
        {
            name: 'name',
            selector: row => row.name,
            sortable: true,
            sortField: 'name',
            right: true,
            reorder: true,
        },
        {
            name: 'slug',
            selector: row => row.slug,
            sortable: true,
            sortField: 'slug',
            format: row => `${row.slug.slice(0, 200)}...`,
            wrap: true,
            right: true,
            reorder: true,
        },
        {
            name: 'action',
            sortable: false,
            wrap: true,
            right: true,
            allowOverflow: true,
            button: true,
            width: '56px',
        },
        {
            cell: row => <CustomMaterialMenu size="small" row={row} onDeleteRow={(val)=>{logDat(val)}}  />,
            allowOverflow: true,
            button: true,
            width: '56px',
        },
    ]

    const logDat=(val)=>{
        console.log(val)
    }

    return {
        postsColumn
    }
}
