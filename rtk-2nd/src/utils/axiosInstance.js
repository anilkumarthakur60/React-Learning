import axios from "axios";
import { apiUrl } from "./api";
import qs from "qs";


const token = localStorage.getItem("access_token");

const axiosInstance = axios.create({
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  },

  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  baseURL: apiUrl,
});

export { axiosInstance };
// import AutohideExample from "../components/AutohideExample";

// const token = localStorage.getItem("access_token");
// const axiosInstance = axios.create({
//   paramsSerializer: (params) => {
//     return qs.stringify(params, { arrayFormat: "repeat" });
//   },
//   headers: {
//     "X-Requested-With": "XMLHttpRequest",
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + token,
//   },
//   baseURL: apiUrl,
// });

// axiosInstance.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     if (error.response && error.response.status === 404) {
//       return (
//         <AutohideExample
//           message={"Resource not found"}
//           color={"negative"}
//           code={error.response.status}
//         />
//       );
//     } else if (error.response && error.response.status === 422) {
//       return (
//         <AutohideExample
//           message={error.response.data.message}
//           color={"negative"}
//           code={error.response.status}
//         />
//       );
//     } else if (error.response && error.response.status === 555) {
//       return (
//         <AutohideExample
//           message={error.response.data.message}
//           color={"negative"}
//           code={error.response.status}
//         />
//       );
//     } else if (error.response && error.response.status === 401) {
//       return (
//         <AutohideExample
//           message={"Session Time Out. Please re-login to continue."}
//           color={"negative"}
//           code={error.response.status}
//         />
//       );
//     } else if (error.response && error.response.status === 400) {
//       if (error.response.data.message) {
//         return (
//           <AutohideExample
//             message={error.response.data.message}
//             color={"negative"}
//             code={error.response.status}
//           />
//         );
//       }
//     } else if (error.response && error.response.status === 4001) {
//       return (
//         <AutohideExample
//           message={error.response.data.message}
//           color={"negative"}
//           code={error.response.status}
//         />
//       );
//     } else if (error.response && error.response.status === 500) {
//       return (
//         <AutohideExample
//           message={error.response.data.message}
//           color={"negative"}
//           code={error.response.status}
//         />
//       );
//     } else if (error.response && error.response.status === 403) {
//       return (
//         <AutohideExample
//           message={error.response.data.message}
//           color={"negative"}
//           code={error.response.status}
//         />
//       );
//     } else {
//       return (
//         <AutohideExample
//           message={error.response.data.message}
//           color={"negative"}
//           code={error.response.status}
//         />
//       );
//     }
//   }
// );

// export { axiosInstance };
