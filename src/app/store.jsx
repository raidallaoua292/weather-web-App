import { configureStore } from "@reduxjs/toolkit";
import weatherApiSliceReducer from "../slices/weatherApiSlice";
export default configureStore({
    reducer: {
        weatherApi: weatherApiSliceReducer,
    }
});