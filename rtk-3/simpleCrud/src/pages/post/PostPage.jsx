import React, { useEffect } from 'react'
import { useFetchPostsQuery } from "../../redux/post/postApi.js";
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";
import { useTableColumn } from "../../hooks/useTableColumn.jsx";
import { testFunction } from '../../redux/common/commonApi.js';
import {useTable} from "../../hooks/useTable.js";

const PostPage = () => {

    const { pagination, paginationComponentOptions, progress, filters } = useSelector((state) => state.posts)
    const { data, error, isLoading, refetch } = useFetchPostsQuery({ pagination, filters })
    const dispatch = useDispatch()
    const { postsColumn } = useTableColumn()


    const { postStoreData } = testFunction('posts')

    const  {handleSort,handlePerRowsChange,handlePageChange,handleRowSelected}= useTable({refetch:refetch,storeName:'posts'})



    const CustomLoader = () => {
        return <>
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={progress} />
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
                {JSON.stringify(postStoreData, null, 2)}
            </pre>
            <DataTable
                title="Posts"
                columns={postsColumn}
                data={data.data}
                progressPending={isLoading}
                progressComponent={<CustomLoader />}
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