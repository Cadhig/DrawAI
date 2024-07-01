
export default function AiGuess(props: any){

    return(
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-64 h-1/2 p-4 bg-draw-blue flex justify-center items-center border rounded shadow-xl">
            <div className="w-64 h-full flex flex-col items-center gap-20">
                <p className="font-bold text-xl text-center">Draw AI thinks the number is:</p>
                <p className="font-bold text-8xl">{props.guess}</p>
            </div>
            </div>
        </div>
    )
}