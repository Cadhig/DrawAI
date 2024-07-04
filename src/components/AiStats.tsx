export default function AiStats(props: any) {
    const statDisplay = props.stats || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    return (
        <div className="lg:h-full h-1/4 w-full lg:flex items-center justify-center hidden lg:visible ">
            <div className="w-64 h-1/2 p-4 bg-draw-blue items-center border rounded shadow-xl hover:shadow-2xl cursor-pointer">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-xl">Confidence</h2>
                </div>
                <div className="flex">
                    <div className="flex lg:flex-col flex-row w-6 text-lg">
                        <p>0:</p>
                        <p>1:</p>
                        <p>2:</p>
                        <p>3:</p>
                        <p>4:</p>
                        <p>5:</p>
                        <p>6:</p>
                        <p>7:</p>
                        <p>8:</p>
                        <p>9:</p>
                    </div>
                    <div className="flex lg:flex-col flex-row w-20 text-lg">
                        {statDisplay.map((stats: any, index: number) => {
                            return <AiStatsIndividual stats={stats} key={index} />
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
            <div>
                <p>{toPercent.toFixed(1)}%</p>
            </div>
        </div>
    )
}