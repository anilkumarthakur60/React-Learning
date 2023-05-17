import {useDispatch, useSelector} from "react-redux";

function useStore(storeName) {
    const {
        data,
        formData,
        loading,
        error,
        pagination,
        filters,
        progress,
        paginationComponentOptions,
    } = useSelector((state) => state[storeName]);
  return {

  };
}

export  default useStore;