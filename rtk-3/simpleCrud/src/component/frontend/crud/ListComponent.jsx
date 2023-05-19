import useStore from "../../../hooks/useStore.js";
import DataTable from "react-data-table-component";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";


function listComponent({ data, error, isLoading, storeName, subHeaderComponent, columns }) {


    const { paginationComponentOptions, progress, handleSort,
        handlePerRowsChange,
        handlePageChange,
        handleRowSelected,
        customStyles,
    } = useStore(storeName)

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
            {subHeaderComponent ?? null}
            <DataTable
                customStyles={customStyles}
                columns={columns}
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
                fixedHeader
                persistTableHead
            />
        </div>
        )
    }
}

export default listComponent
