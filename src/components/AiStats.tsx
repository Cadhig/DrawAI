export default function AiStats(props: any) {
    const statDisplay = props.stats || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    return (
        <div className="lg:h-full h-1/4 w-full lg:flex items-center justify-center hidden lg:visible ">
            <div className="w-64 h-1/2 p-4 items-center border rounded shadow-xl bg-white/80">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-xl">Confidence</h2>
                </div>
                <div className="flex">
                    <div className="flex lg:flex-col flex-row w-20 text-lg">
                        {statDisplay.map((stats: any, index: number) => {
                            return <AiStatsIndividual stats={stats} key={index} number={index} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

function AiStatsIndividual(props: any) {

    let toPercent = props.stats * 100

    return (
        <div>
            <div className="flex gap-2">
                <p>{props.number}: </p>
                <p>{toPercent.toFixed(1)}%</p>
            </div>
        </div>
    )
}