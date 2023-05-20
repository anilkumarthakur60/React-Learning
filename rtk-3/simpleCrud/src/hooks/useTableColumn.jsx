import { CustomMaterialMenu } from "../component/table/CustomMaterialMenu.jsx";
import useStore, { storeName } from "./useStore.js";
import { useMemo } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear.js";
import { Fab } from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff.js";
import RefreshIcon from "@mui/icons-material/Refresh.js";
import AddIcon from '@mui/icons-material/Add';

export function useTableColumn({ ...rest }) {

    const { handleDelete, refetch } = rest
    const { handleEditFormData, handleFilters, filters, clearFilterKeys, allReset, setShowModal,setFormDataNull } = useStore(storeName.posts)

    const postsColumn = [
        {
            name: 'id',
            cell: (row, index) => index + 1,
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
            cell: row => <CustomMaterialMenu size="small" row={row} onDeleteRow={(val) => { handleDelete(val) }} onEditRow={(val) => { handleEdit(val) }} />,
            allowOverflow: true,
            button: true,
        },
    ]




    const handleEdit = (val) => {
        handleEditFormData(val)
        setShowModal(true)
    }

    const showFormDialogue = () => {
        setFormDataNull()
        setShowModal(true)
    }



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
                            <Grid item>
                                <Fab size='small' color="secondary" aria-label="edit" onClick={showFormDialogue}>
                                    <AddIcon />
                                </Fab>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }, []);


    return {
        subHeaderComponent,
        postsColumn
    }
}
