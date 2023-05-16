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
    },
    filters: {},
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
export {
    initialCommonState,
    setCommonPage,
    setCommonRowsPerPage,
    setCommonSortBy,
    setCommonDescending,
    setCommonFilters,
    setCommonFormData,
    clearCommonError,
};

