export default function SniperLoader() {

    return (
        // curcular loader
        <>
            <div className=" flex justify-center items-center h-screen w-screen">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    )
}