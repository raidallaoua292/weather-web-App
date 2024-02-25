import CurrentStats from "./currentStats";
import CurrentTemp from "./currentTemp";
import LocationAndDate from "./locationAndDate";
import WeeklyForcast from "./weeklyForcast";
import HourlyForcast from "./hourlyForcast";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import SearchBar from "./searechBar";
import SniperLoader from "./SniperLoader";


export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState({});
    const [searchInput, setSearchInput] = useState("");
    

    const handleChangeSearch = (e) => {
        setSearchInput(e.target.value);
    }
    const handelSearchClick = () => {
        //get the weather data based on the search input
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=000737b049ec9a67257b168307cce694&units=metric`)
            .then((response) => {
                console.log(response.data);
                setWeatherData({
                    location: response.data.name,
                    country: response.data.sys.country,
                    date: moment(new Date(response.data.dt * 1000)).format("MMM Do YY"),
                    temp: Math.round(response.data.main.temp),
                    feels_like: response.data.main.feels_like,
                    temp_min: response.data.main.temp_min,
                    temp_max: response.data.main.temp_max,
                    wind_speed: response.data.wind.speed,
                    rain: response.data.rain ? response.data.rain["1h"] : 0,
                    sunrise: moment(new Date(response.data.sys.sunrise * 1000)).format("h:mm a"),
                    sunset: moment(new Date(response.data.sys.sunset * 1000)).format("h:mm a"),
                    weather: response.data.weather[0].main,
                    weather_icon: response.data.weather[0].icon,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    useEffect(() => {
        // get the location
        navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords;
            console.log(latitude, longitude);
            // get the weather data
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude }&appid=000737b049ec9a67257b168307cce694&units=metric`)
            .then((response) => {
                console.log(response.data);
                setWeatherData({
                    location: response.data.name,
                    country: response.data.sys.country,
                    date: moment(new Date(response.data.dt * 1000)).format("MMM Do YY"),
                    temp: Math.round(response.data.main.temp),
                    feels_like: response.data.main.feels_like,
                    temp_min: response.data.main.temp_min,
                    temp_max: response.data.main.temp_max,
                    wind_speed: response.data.wind.speed,
                    rain: response.data.rain ? response.data.rain["1h"] : 0,
                    sunrise: moment(new Date(response.data.sys.sunrise * 1000)).format("h:mm a"),
                    sunset: moment(new Date(response.data.sys.sunset * 1000)).format("h:mm a"),
                    weather: response.data.weather[0].main,
                    weather_icon: response.data.weather[0].icon,
                });
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }, []);
    
    return (
        <>
            <div className="wether-app flex flex-wrap lg:w-[1120px] lg:mx-auto lg:my-4 lg:text-[1.1em]  ">
                {/* Searech bar */}
                <SearchBar 
                    handleChangeSearch={handleChangeSearch}
                    handelSearchClick={handelSearchClick}
                    searchInput={searchInput}
                />
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
            </div>
        </>
        
    )
}