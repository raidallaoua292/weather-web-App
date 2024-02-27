import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import moment from "moment";

const weatherApiSlice = createSlice({
    name: "weatherApi",
    initialState: {
        weatherData: "empty",
        isLoading: false,
        
    },
    reducers:{
        setWeatherData: (state, action) => {
            state.weatherData = "full";
        },
    },
    extraReducers(builder){
        builder.addCase(featchweatherData.pending, (state, action) => {
            console.log("pending the fetchweatherData");
            state.isLoading = true;
        }).addCase(featchweatherData.fulfilled, (state, action) => {
            console.log("fulfilled the fetchweatherData");
            state.isLoading = false;
            state.weatherData = action.payload;
            console.log("the payload is: ", action.payload);
        }).addCase(featchweatherData.rejected, (state, action) => {
            console.log("rejected the fetchweatherData");
            state.isLoading = false;
        }).addCase(featchweatherDataByCity.pending, (state, action) => {
            console.log("pending the fetchweatherDataByCity");
            state.isLoading = true;
        }).addCase(featchweatherDataByCity.fulfilled, (state, action) => {
            console.log("fulfilled the fetchweatherDataByCity");
            state.isLoading = false;
            state.weatherData = action.payload;
            console.log("the payload is: ", action.payload);
        }).addCase(featchweatherDataByCity.rejected, (state, action) => {
            console.log("rejected the fetchweatherDataByCity");
            state.isLoading = false;
        })
    }
});



export const featchweatherData = createAsyncThunk("weatherApi/fetchweatherData", async () => {
    console.log("inside the fetchweatherData");
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=51.509865&lon=-0.118092&appid=000737b049ec9a67257b168307cce694&units=metric`,
    // {
    //     cancelToken: new axios.CancelToken((c) => {
    //         cancelAxios = c;
    //     }),
    // }
    )
    console.log("the response is: ", response);
    return {
        location: response.data.name,
        country: response.data.sys.country,
        date:moment(new Date(response.data.dt * 1000)).format("MMM Do YY"),
        temp: Math.round(response.data.main.temp),
        feels_like: response.data.main.feels_like,
        temp_min: Math.round(response.data.main.temp_min),
        temp_max: Math.round(response.data.main.temp_max),
        wind_speed: response.data.wind.speed,
        rain: response.data.rain ? response.data.rain["1h"] : 0,
        sunrise: moment(new Date(response.data.sys.sunrise * 1000)).format("h:mm a"),
        sunset: moment(new Date(response.data.sys.sunset * 1000)).format("h:mm a"),
        weather: response.data.weather[0].main,
        weather_icon: response.data.weather[0].icon,
    
    }
    
});

export const featchweatherDataByCity = createAsyncThunk("weatherApi/fetchweatherDataByCity", async (city) => {
    console.log("inside the fetchweatherDataByCity");
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=000737b049ec9a67257b168307cce694&units=metric`,
    // {
    //     cancelToken: new axios.CancelToken((c) => {
    //         cancelAxios = c;
    //     }),
    // }
    )
    console.log("the response is: ", response);
    return {
        location: response.data.name,
        country: response.data.sys.country,
        date:moment(new Date(response.data.dt * 1000)).format("MMM Do YY"),
        temp: Math.round(response.data.main.temp),
        feels_like: response.data.main.feels_like,
        temp_min: Math.round(response.data.main.temp_min),
        temp_max: Math.round(response.data.main.temp_max),
        wind_speed: response.data.wind.speed,
        rain: response.data.rain ? response.data.rain["1h"] : 0,
        sunrise: moment(new Date(response.data.sys.sunrise * 1000)).format("h:mm a"),
        sunset: moment(new Date(response.data.sys.sunset * 1000)).format("h:mm a"),
        weather: response.data.weather[0].main,
        weather_icon: response.data.weather[0].icon,
    
    }
});

export const { setWeatherData } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;

