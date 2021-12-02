// import React, {useEffect, useState} from 'react';
// import api from '../services/api';
// import {State, StateType} from './types';
// import {useDispatch, useSelector} from 'react-redux';
// import {
//   serverStatus,
//   dataAction,
//   mode,
//   xtbStatus,
//   initialStore,
//   initialData,
//   maxLucro,
//   maxPrejuizo,
//   timer,
// } from '../store/action';
// import {StoreType} from '../store/types';
// import {Alert} from 'react-native';
// const UseUpdate = () => {
//   const dispatch = useDispatch();
//   const Mode = useSelector((state: StoreType) => state.mode);

//   useEffect(() => {
//     let fetching = false; // não irá deixar realizar nova requisição de um já estiver em andamento
//     let qtdFetching = 0;

//     const update = setInterval(() => {
//       qtdFetching++;
//       if (qtdFetching > 10) {
//         dispatch(serverStatus(false));
//         dispatch(xtbStatus(false));
//         dispatch(mode(false));
//       }
//       const handleConnect = async () => {
//         fetching = true;
//         const {data, status} = await api.post('/api/v1/data', {
//           token: 'ff14c67a-8273-4679-a843-82f878b9ef41',
//         });

//         let {code, value} = data;
//         if (code === 'sucess') {
//           fetching = false;
//           qtdFetching = 0;
//           dispatch(serverStatus(true));
//           dispatch(xtbStatus(value.xtbStatus));
//           dispatch(mode(value.xtbStatus));
//           dispatch(timer(value.timer));
//           //value.xtbStatus && dispatch(mode(true));
//           dispatch(maxLucro(value.max.lucro));
//           dispatch(maxPrejuizo(value.max.prejuizo));
//           value.data.balance
//             ? dispatch(dataAction(value.data))
//             : dispatch(initialData());
//         } else {
//           fetching = false;
//           dispatch(initialStore());
//           dispatch(serverStatus(false));
//           dispatch(xtbStatus(false));
//           dispatch(mode(false));
//         }
//       };
//       if (!fetching) {
//         handleConnect();
//       }
//     }, 1000);
//     return () => {
//       clearInterval(update);
//     };
//   }, []);

//   return null;
// };

// export default UseUpdate;