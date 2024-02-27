import CurrentStats from "./currentStats";
import CurrentTemp from "./currentTemp";
import LocationAndDate from "./locationAndDate";
import WeeklyForcast from "./weeklyForcast";
import HourlyForcast from "./hourlyForcast";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import SearchBar from "./searechBar";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { featchweatherData, featchweatherDataByCity } from "../slices/weatherApiSlice";
import SniperLoader from "./SniperLoader";


export default function WeatherApp() {

    // Redux Code
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.weatherApi.isLoading);

    const weatherData = useSelector((state) => state.weatherApi.weatherData);

    // const [weatherData, setWeatherData] = useState("");
    const [searchInput, setSearchInput] = useState("");
    

    const handleChangeSearch = (e) => {
        setSearchInput(e.target.value);
    }
    const handelSearchClick = () => {
        //get the weather data based on the search input
        console.log("search input is: ", searchInput);
        dispatch(featchweatherDataByCity(searchInput));
    }
    
    useEffect(() => {
        // get the location  
        console.log("despatching the action");
        dispatch(featchweatherData() );
    }, []);
    
    return (
        <>
            <div className="wether-app flex flex-wrap lg:w-[1120px] lg:mx-auto lg:my-4 lg:text-[1.1em]  ">
                {/* Searech bar */}
                <SearchBar handleChangeSearch={handleChangeSearch}
                    handelSearchClick={handelSearchClick}
                    searchInput={searchInput}
                />
                {
                    isLoading ? <SniperLoader /> : 
                    <>
                        {/* location & date */}
                        <LocationAndDate 
                            location={weatherData.location}
                            country={weatherData.country}
                            date={weatherData.date}
                        />
                        {/* current temperature */}
                        <CurrentTemp 
                            temp={weatherData.temp}
                            weather={weatherData.weather}
                            weather_desc={weatherData.weather_desc}
                            weather_icon={weatherData.weather_icon}
                        />
                        {/* current stats */}
                        <CurrentStats 
                            high={weatherData.temp_max}
                            wind={weatherData.wind_speed}
                            sunrise={weatherData.sunrise}
                            low={weatherData.temp_min}
                            rain={weatherData.rain }
                            sunset={weatherData.sunset}
                        />
                        {/* hourly forecast */}
                        <HourlyForcast 
                            searchInput={searchInput}
                        />
                        {/* weekly forecast */}
                        <WeeklyForcast />
                    </>
                    
                }
                
            </div>
        </>
        
    )
}