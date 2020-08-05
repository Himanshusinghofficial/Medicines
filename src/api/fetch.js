// const data = 'https://api.emetroplus.com/drug/data'
// import axios from "axios";

// export const fetchMedicineByType = (limit, skip) => (dispatch) => {
//     const config = {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };


//     const body = {
//         limit: limit,
//         skip: skip,
//     };

//     axios
//         .post("https://api.emetroplus.com/drug/data", body, config)
//         .then((res) => {
//             console.log(res);
//             dispatch({
//                 type: MEDICINE_BY_TYPES,
//                 payload: res.data.data,
//             });
//         });
// };


