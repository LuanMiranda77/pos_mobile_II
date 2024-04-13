/* eslint-disable no-undef */
import axios from "axios";


export const api = axios.create({
    baseURL: 'http://localhost:5000/',
    headers:{
        
    }
  
});

// api.interceptors.request.use(async config => {
//   // const user = persistLocalStorage('@user-data', '', 'get');
//    const user = UtilsUserLocal.getTokenLogin();
//     if (user.token !== undefined && config !== undefined) {
//       config.headers.Authorization = `${user.token}`;
//     }else{
//       let token  = localStorage.getItem(null);
//       if(token){
//         config.headers.Authorization = `${token}`;
//       }
//     }
//     return config;
// });