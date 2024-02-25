// Code to display the current temperature and weather condition
export default function CurrentTemp({temp, weather, weather_icon}) {
    return (
        <div className="flex justify-around items-center w-full  py-1 px-3 md:w-2/4" >
            <div className="flex flex-col justify-center items-center gap-2">
                <img className="" src={`http://openweathermap.org/img/wn/${weather_icon}@4x.png`} alt="weather icon" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <span className="text-6xl font-medium">{temp}°</span>
                <p className="text-xl">{weather}</p>
            </div>
        </div>
    )
}