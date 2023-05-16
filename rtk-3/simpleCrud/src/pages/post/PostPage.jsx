import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {useFetchPostsQuery} from "../../redux/post/postApi.js";
import useTableColumn from "../../hooks/useTableColumn.js";
const PostPage = () => {

    const { data, error, isLoading } = useFetchPostsQuery()
const  {postsColumn}=useTableColumn()
    return (
        <div className="">
            <DataGrid
                rows={data}
                columns={postsColumn}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default PostPage