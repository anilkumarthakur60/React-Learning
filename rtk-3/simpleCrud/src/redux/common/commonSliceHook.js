const initialCommonState = {
    data: [],
    formData: {},
    loading: false,
    error: {},
    pagination: {
        page: 1,
        rowsPerPage: 20,
        sortBy: "id",
        descending: true,
        total: 0,
    },
    filters: {},
    progress: 0,
    paginationComponentOptions:{
        rowsPerPageText: 'Rows per page:',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All'
    }
};


const setCommonPage = (state, action) => {
    state.pagination.page = action.payload;
}
const setCommonRowsPerPage = (state, action) => {
    state.pagination.rowsPerPage = action.payload;
}
const setCommonSortBy = (state, action) => {
    state.pagination.sortBy = action.payload;
}
const setCommonDescending = (state, action) => {
    state.pagination.descending = action.payload;
}
const setCommonFilters = (state, action) => {
    state.filters = action.payload;
}
const setCommonFormData = (state, action) => {
    state.formData = action.payload;
}
const clearCommonError = (state, action) => {
    const {fieldName} = action.payload;
    delete state.error[fieldName];
}

const setCommonProgress = (state, action) => {
    state.progress = action.payload;
}

export {
    initialCommonState,
    setCommonPage,
    setCommonRowsPerPage,
    setCommonSortBy,
    setCommonDescending,
    setCommonFilters,
    setCommonFormData,
    clearCommonError,
    setCommonProgress
};
