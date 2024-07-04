
export function Button(props: { text: string, onClick: () => void }) {

    return (
        <button className="bg-white/80 p-3 w-1/4 rounded-xl text-draw-black font-bold hover:bg-white" onClick={props.onClick}>{props.text}</button>
    )
}