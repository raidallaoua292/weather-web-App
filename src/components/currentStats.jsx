import { } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CurrentStats({high, wind, sunrise, low, rain, sunset}) {
    const stats = [
        {
            name: "High",
            value: `${high}°`,
        },
        {
            name: "Wind",
            value: `${wind} m/s`,

        },
        {
            name: "Sunrise",
            value: sunrise
        },
        {
            name: "Low",
            value: `${low}°`
        },
        {
            name: "Rain",
            value: `${rain} mm`
        },
        {
            name: "Sunset",
            value: sunset
        }

    ]
    return (
        <div className="grid grid-rows-2 grid-cols-3 w-full border-y-2 px-3 py-2 gap-3 md:w-2/4 md:border-y-0 md:border-l-2 " >
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center  p-2" >
                    <p className="text-md font-semibold">{stat.value}</p>
                    <p className="text-sm font-bold text-neutral-600">
                    {stat.name} </p>
                </div>
            ))}
        </div>
    )
}