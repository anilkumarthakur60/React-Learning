import axios from 'axios'
import _ from "lodash"
import Swal from "sweetalert2";
import qs from "qs";




const axiosInstance = axios.create({
    paramsSerializer: params => {
        return qs.stringify(params, {arrayFormat: "repeat"});
    },
    headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    },
    baseURL: 'http://127.0.0.1:8000/api/react/',

});


    axiosInstance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {

            if (error.response && error.response.status === 404) {
                Swal.fire({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    timer: 2000,
                });
            } else if (error.response && error.response.status === 422) {
                Swal.fire({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    timer: 2000,
                });

            } else if (error.response && error.response.status === 555) {
                Swal.fire({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    timer: 2000,
                });
            } else if (error.response && error.response.status === 401) {
                Swal.fire({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    timer: 2000,
                });

            } else if (error.response && error.response.status === 400) {
                // oauth.logout()
                if (error.response.data.message) {
                    Swal.fire({
                        title: "Error!",
                        text: error.response.data.message,
                        icon: "error",
                        timer: 2000,
                    });
                }

            } else if (error.response && error.response.status === 4001) {
                Swal.fire({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    timer: 2000,
                });
            } else if (error.response && error.response.status === 500) {
                Swal.fire({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    timer: 2000,
                });
            } else if (error.response && error.response.status === 403) {
                Swal.fire({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    timer: 2000,
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: error.response.data.message,
                    icon: "error",
                    timer: 2000,
                });
            }
            return Promise.reject(error);
        }
    );


export {axiosInstance}
