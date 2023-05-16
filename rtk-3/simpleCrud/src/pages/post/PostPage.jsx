import React from 'react'
import {useFetchPostsQuery} from "../../redux/post/postApi.js";
import DataTable from 'react-data-table-component';
import {useDispatch, useSelector} from 'react-redux';
import {setDescending, setPage, setRowsPerPage, setSortBy} from "../../redux/post/postSlice.js";
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";
import {useTableColumn} from "../../hooks/useTableColumn.jsx";

const PostPage = () => {

    const {data, error, isLoading} = useFetchPostsQuery()
    const {pagination, paginationComponentOptions, progress} = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const {postsColumn} = useTableColumn()

    const handleSort = (column, sortDirection) => {

        if (column.sortField) {
            dispatch(setSortBy(column.sortField))
        }
        if (sortDirection) {
            dispatch(setDescending(sortDirection === 'desc' ? true : false))
        }
    }


    const handlePerRowsChange = (newPerPage, page) => {

        dispatch(setRowsPerPage(newPerPage))
        dispatch(setPage(page))
    }
    const handlePageChange = (page) => {
        console.log('---------data logging-------page-', page);
    }
    const handleRowSelected = ({selectedRows}) => {
        console.log('---------data logging-------selectedRows-', selectedRows);
    }


    const CustomLoader = () => {
        return <>
            <Box sx={{width: '100%'}}>
                <LinearProgress variant="determinate" value={progress}/>
            </Box>
        </>
    }


    if (isLoading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>
            <pre>
                {JSON.stringify(error, null, 3)}
            </pre>
        </div>
    } else {


        return (<div className="">

            <pre>
                {JSON.stringify(pagination, null, 3)}
                {JSON.stringify(error, null, 3)}
            </pre>
                <DataTable
                    title="Posts"
                    columns={postsColumn}
                    data={data.data}
                    progressPending={isLoading}
                    progressComponent={<CustomLoader/>}
                    sortServer
                    onSort={handleSort}
                    selectableRows
                    onSelectedRowsChange={handleRowSelected}
                    pagination
                    paginationServer
                    paginationTotalRows={data.meta.total}
                    onChangeRowsPerPage={handlePerRowsChange}
                    onChangePage={handlePageChange}
                    paginationComponentOptions={paginationComponentOptions}
                    highlightOnHover
                    pointerOnHover
                />
            </div>
        )
    }
}

export default PostPage