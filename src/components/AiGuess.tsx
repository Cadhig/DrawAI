
export default function AiGuess(props: any) {

    return (
        <div className="lg:h-full h-1/4 w-full flex items-center justify-center">
            <div className="w-64 h-1/2 p-4 bg-draw-blue flex justify-center items-center border rounded shadow-xl hover:shadow-2xl cursor-pointer">
                <div className="w-64 h-full flex flex-col items-center lg:gap-20">
                    <p className="font-bold lg:text-xl text-center">Draw AI thinks the number is:</p>
                    <p className="font-bold text-2xl lg:text-8xl">{props.guess}</p>
                </div>
            </div>
        </div>
    )
}