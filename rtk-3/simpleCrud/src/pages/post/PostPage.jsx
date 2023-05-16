import React from 'react'
import { useFetchPostsQuery } from "../../redux/post/postApi.js";
import useTableColumn from "../../hooks/useTableColumn.js";
import DataTable from 'react-data-table-component';
import CustomMaterialPagination from "../../component/table/CustomMaterialPagination.jsx";

const PostPage = () => {

    const { data, error, isLoading } = useFetchPostsQuery()
    const { postsColumn } = useTableColumn()

    if (isLoading) return (<div>Loading...</div>)
    if (error) return (<div>{error}</div>)
    return (<div className="">
        <DataTable
            title="Movie List"
            columns={postsColumn}
            data={data}
            pagination
            paginationComponent={CustomMaterialPagination}
        />
    </div>
    )
}

export default PostPage