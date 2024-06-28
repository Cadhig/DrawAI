
export default function Header() {

    return (
        <div className="h-14 w-full text-draw-black bg-draw-blue absolute top-0 font-ai flex items-center text-2xl p-4 justify-between">
            <h1>Draw AI</h1>
            <div className="flex gap-4 text-lg">
                <p className="cursor-pointer hover:text-draw-hover hover:underline hover:underline-offset-2">GitHub</p>
                <p className="cursor-pointer hover:text-draw-hover hover:underline hover:underline-offset-2">Contact</p>
            </div>
        </div>
    )
}