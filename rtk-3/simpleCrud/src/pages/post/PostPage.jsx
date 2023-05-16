import React from 'react'
import {useFetchPostsQuery} from "../../redux/post/postApi.js";
import useTableColumn from "../../hooks/useTableColumn.js";
import DataTable from 'react-data-table-component';
import {useSelector} from 'react-redux';

const PostPage = () => {

    const {data, error, isLoading} = useFetchPostsQuery()
    const {pagination} = useSelector((state) => state.posts)
    const {postsColumn} = useTableColumn()



    const handleSort = (column, sortDirection) => {
        console.log(column.name, sortDirection)
    }

    if (isLoading) return (<div>Loading...</div>)
    if (error) return (<div>{error}</div>)
    return (<div className="">
            <DataTable
                title="Users"
                columns={postsColumn}
                data={data.data}
                progressPending={isLoading}
                pagination
                paginationServer
                paginationTotalRows={data.meta.total}
                sortServer
                onSort={handleSort}
                // onChangeRowsPerPage={handlePerRowsChange}
                // onChangePage={handlePageChange}
            />
        </div>
    )
}

export default PostPage