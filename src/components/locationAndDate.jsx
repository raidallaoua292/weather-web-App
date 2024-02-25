import { useEffect,useState } from "react"
import moment from "moment";

export default function LocationAndDate({location, country}) {
    const [date, setDate] = useState({date: "", day: "", time: ""});
    useEffect(() => {
        // update the date and time
        setInterval(() => {
            const now = moment();
            setDate({
                date: now.format("MMM Do YY"),
                day: now.format("dddd"),
                time: now.format("h:mm:ss a")
            });
        }, 1000);
        // clean useEffect 
    }, [])
    return (
        <div className="w-full flex flex-col items-center justify-around mb-3  px-3 py-1 md:flex-row" >
            <h1 className="text-2xl font-bold">{location}, {country}</h1>
            <div className="text-center" >
                <p className="text-sm text-gray-500 md:text-base">
                <span className="font-semibold">{date.day}</span>, {date.date}</p>
                <p className="text-sm text-gray-500 md:text-base">{date.time}</p>                                                 
            </div>
        </div>
    )
}