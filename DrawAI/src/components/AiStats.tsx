export default function AiStats(){

    return(
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-64 h-1/2 p-4 bg-draw-blue items-center border rounded shadow-xl">
                <div className="flex flex-col items-center">
                <h2 className="font-bold text-xl">Stats</h2>
                    <ul className="text-xl">
                        <li>9 = 90%</li>
                        <li>8 = 5%</li>
                        <li>4 = 3%</li>
                        <li>3 = 2%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}