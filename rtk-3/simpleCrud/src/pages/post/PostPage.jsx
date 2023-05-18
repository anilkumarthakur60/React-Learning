import {useMemo} from 'react'
import {useFetchPostsQuery} from "../../redux/post/postApi.js";
import DataTable from 'react-data-table-component';
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";
import {useTableColumn} from "../../hooks/useTableColumn.jsx";
import {useTable} from "../../hooks/useTable.js";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import useStore, {storeName} from "../../hooks/useStore.js";

const PostPage = () => {

    const {postsColumn} = useTableColumn()//no
    const {pagination, paginationComponentOptions, progress, filters, handleSort,
        handlePerRowsChange,
        handlePageChange,
        handleRowSelected,
        customStyles,
        handleFilters,} = useStore(storeName.posts)

    const {data, error, isLoading, refetch} = useFetchPostsQuery({pagination, filters})//no

    const {} = useTable({refetch, storeName: storeName.posts})


    const CustomLoader = () => {
        return <>
            <Box sx={{width: '100%'}}>
                <LinearProgress variant="determinate" value={progress}/>
            </Box>
        </>
    }

    const subHeaderComponent = useMemo(() => {
        return (
            <Box>
                <Grid container direction="row" paddingY={2} justifyContent="flex-start" alignItems="start">
                    <Grid item paddingRight={1} marginY={1}>
                        <TextField name='id' value={filters.name} onChange={handleFilters} fullWidth size='small'
                                   id="outlined-basic" label="Outlined" variant="filled"/>
                    </Grid>
                    <Grid item paddingRight={1} marginY={1}>
                        <TextField name='names' value={filters.names} onChange={handleFilters} fullWidth size='small'
                                   id="outlined-basic" label="Outlined" variant="filled"/>
                    </Grid>
                </Grid>
            </Box>
        );
    }, []);


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
                {subHeaderComponent}
                <DataTable
                    customStyles={customStyles}
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
                    fixedHeader
                    persistTableHead
                />
            </div>
        )
    }
}

export default PostPage