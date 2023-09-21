import { configureStore } from "@reduxjs/toolkit";
import slince from "./slince";


export default configureStore({
    reducer:{
        cars: slince
    }
})