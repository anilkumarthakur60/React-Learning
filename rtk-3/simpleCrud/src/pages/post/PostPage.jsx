import { useMemo } from 'react'
import { useFetchPostsQuery } from "../../redux/post/postApi.js";
import Box from "@mui/material/Box";
import { useTableColumn } from "../../hooks/useTableColumn.jsx";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import useStore, { storeName } from "../../hooks/useStore.js";
import ListComponent from "../../component/frontend/crud/ListComponent.jsx";
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector } from "react-redux";
import { Fab } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';


const PostPage = () => {


    const { filters } = useSelector(state => state.posts)
    const { postsColumn } = useTableColumn()
    const { pagination, handleFilters, clearFilterKeys, allReset } = useStore(storeName.posts)

    const { data, error, refetch, status, isUninitialized, isLoading, isSuccess, isError, } = useFetchPostsQuery({ pagination, filters }, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true,

    })

    const subHeaderComponent = useMemo(() => {
        return (
            <Box>
                <Grid container direction="row" paddingY={2} justifyContent="flex-start" alignItems="start" spacing={2}>
                    <Grid item>
                        <TextField name='queryFilter' value={filters.queryFilter} onChange={handleFilters} fullWidth size='small' id="outlined-basic" label="Outlined" variant="filled" InputProps={{
                            endAdornment: (
                                <IconButton onClick={clearFilterKeys('queryFilter')}>
                                    <ClearIcon />
                                </IconButton>
                            ),
                        }} />
                    </Grid>
                    <Grid item>
                        <TextField name='id' value={filters.id} onChange={handleFilters} fullWidth size='small' id="outlined-basic" label="Outlined" variant="filled" />
                    </Grid>
                    <Grid item   >

                        <Grid item container direction='row' alignItems="flex-end" spacing={1} justify="flex-end">
                            <Grid item>
                                <Fab size='small' color="primary" aria-label="add" onClick={refetch}>
                                    <FilterAltOffIcon />
                                </Fab>
                            </Grid>
                            <Grid item>
                                <Fab size='small' color="secondary" aria-label="edit" onClick={allReset}>
                                    <RefreshIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }, []);





    return (<div className="">

        {/* <pre>
            {JSON.stringify(filters, null, 2)}
            {JSON.stringify(pagination, null, 2)}

        </pre> */}


        {data?.data &&
            <ListComponent
                data={data}
                error={error}
                refetch={refetch}
                status={status}
                isUninitialized={isUninitialized}
                isLoading={isLoading}
                isSuccess={isSuccess}
                isError={isError}
                columns={postsColumn}
                storeName={storeName.posts}
                subHeaderComponent={subHeaderComponent}
            />
        }
    </div>
    )

}

export default PostPage