import api from '../api/api'
import { allCar } from '../redux/slince';
import { allCliente } from '../redux/slince';

export const fetcApi =()=>{
  return (dispatch)=>{
    api.get('/carro').then((res)=>{dispatch(allCar(res.data))})
                     .catch(console.log('erro'))
  }
}

export const fetcApiCliente=()=>{
  return (dispatch)=>{
    api.get('/cliente').then((res)=>{dispatch(allCliente(res.data))})
                     .catch(console.log('erro'))
  }
}