import { useMemo } from 'react'
import { useFetchPostsQuery } from "../../redux/post/postApi.js";
import Box from "@mui/material/Box";
import { useTableColumn } from "../../hooks/useTableColumn.jsx";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import useStore, { storeName } from "../../hooks/useStore.js";
import ListComponent from "../../component/frontend/crud/ListComponent.jsx";
import { InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ClearIcon from '@mui/icons-material/Clear';
const PostPage = () => {

    const { postsColumn } = useTableColumn()
    const { pagination, filters, handleFilters,deleteFilterKeys } = useStore(storeName.posts)

    const { data, error, isLoading, refetch } = useFetchPostsQuery({ pagination, filters }, {
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true,

    })

    const subHeaderComponent = useMemo(() => {
        return (
            <Box>
                <Grid container direction="row" paddingY={2} justifyContent="flex-start" alignItems="start">
                    <Grid item paddingRight={1} marginY={1}>
                        <TextField name='queryFilter' value={filters.queryFilter} onChange={handleFilters} fullWidth size='small'
                            id="outlined-basic" label="Outlined" variant="filled"

                            InputProps={{
                                endAdornment: (
                                    <IconButton
                                        onClick={deleteFilterKeys('queryFilter')}
                                    >
                                        <ClearIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item paddingRight={1} marginY={1}>
                        <TextField name='id' value={filters.id} onChange={handleFilters} fullWidth size='small'
                            id="outlined-basic" label="Outlined" variant="filled" />
                    </Grid>
                    <Grid item paddingRight={1} marginY={1}>
                        <TextField
                            label="Clearable Input"
                            value={filters.queryFilter}
                            onChange={handleFilters}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {filters.queryFilter && (
                                            <IconButton onClick={handleFilters}>
                                                <ClearIcon />
                                            </IconButton>
                                        )}
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        );
    }, []);





    return (<div className="">
        {data?.data &&
            <ListComponent
                data={data}
                error={error}
                isLoading={isLoading}
                columns={postsColumn}
                refetch={refetch}
                storeName={storeName.posts}
                subHeaderComponent={subHeaderComponent}
            />
        }
    </div>
    )

}

export default PostPage