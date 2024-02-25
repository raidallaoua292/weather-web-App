export default function SniperLoader() {

    return (
        <>
            <div className="absolute flex -translate-y-2/4 top-2/4 -translate-x-2/4 left-2/4">
                <div className="animate-bounce w-10 h-10 bg-blue-500 rounded-full"></div>
                <div className="animate-bounce w-10 h-10 bg-red-500 rounded-full ml-2"></div>
                <div className="animate-bounce w-10 h-10 bg-green-500 rounded-full ml-2"></div>
            </div>
        </>
    )
}