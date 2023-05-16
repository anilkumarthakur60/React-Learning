import {useSelector} from "react-redux";

const apiBaseUrl = "http://127.0.0.1:8000/api/admin";
export {apiBaseUrl};


export function testFunction(storeName) {
    const {pagination} = useSelector(state => state[storeName])
    return {
        postStoreData: pagination
    }

}
