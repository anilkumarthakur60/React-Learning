import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export function useTable({refetch, storeName}) {

    const dispatch = useDispatch();
    const {pagination, filters} = useSelector((state) => state[storeName]);

    const handleSort = (column, sortDirection) => {
        const sortByAction = {type: `${storeName}/setSortBy`, payload: column.sortField};
        dispatch(sortByAction);

        const descendingAction = {type: `${storeName}/setDescending`, payload: sortDirection === 'desc'};
        dispatch(descendingAction);
    };

    const handlePerRowsChange = (newPerPage, page) => {
        const rowsPerPageAction = {type: `${storeName}/setRowsPerPage`, payload: newPerPage};
        dispatch(rowsPerPageAction);

        const pageAction = {type: `${storeName}/setPage`, payload: page};
        dispatch(pageAction);
    };

    useEffect(() => {
        refetch();
    }, [pagination, filters, refetch]);


    const handlePageChange = (page) => {
        const pageAction = {type: `${storeName}/setPage`, payload: page};
        dispatch(pageAction);
    }

    const handleRowSelected = ({selectedRows}) => {

        console.log('---------data logging--------', selectedRows);
    }

    return {
        handleSort,
        handlePerRowsChange,
        handlePageChange,
        handleRowSelected,
    };
}
