import { createAction, createReducer } from "@reduxjs/toolkit";

const INICIAL_STATE = [];

export const allCar = createAction('ALL_CAR')
export const allCliente = createAction('ALL_CLIENTE')

export default createReducer(INICIAL_STATE, {
    [allCar.type]: (state, action) => [... action.payload],
    [allCliente.type]: (state, action) => [... action.payload]
})