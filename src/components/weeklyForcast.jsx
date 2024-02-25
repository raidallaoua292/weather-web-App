import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeeklyForcast() {
    
    
    return (
        <div className="w-full grid gap-3 p-3" >
            <h2 className="text-xl font-semibold">Next 5 days Forecast</h2>
            <div className="grid grid-rows-5 gap-3" >
                {Array(5).fill().map((_, index) => (
                    <div key={index} className=" grid grid-cols-3 gap-3 md:flex flex-wrap items-center justify-around border-2 border-gray-300 rounded-lg p-2" >
                        <span className="text-center">
                            <p className="text-lg font-semibold">tue</p>
                            <p className="text-sm">25/5</p>
                        </span>
                        <span className="text-center">
                        <FontAwesomeIcon icon={faCircle} size="2x" />

                        </span>
                        <span className="text-center">
                            <p className="text-lg font-semibold">26°C</p>
                            <p className="text-sm">Low</p>
                        </span>
                        <span className="text-center">
                            <p className="text-lg font-semibold">22°C</p>
                            <p className="text-sm">High</p>
                        </span>
                        <span className="text-center">
                            <p className="text-lg font-semibold">0%</p>
                            <p className="text-sm">Rain</p>
                        </span>
                        <span className="text-center">
                            <p className="text-lg font-semibold">12Km/h</p>
                            <p className="text-sm">wind</p>
                        </span>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}