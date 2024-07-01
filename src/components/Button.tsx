
export function Button(props: { text: string, onClick: () => void}) {

    return (
        <button className="bg-draw-blue p-3 w-1/4 rounded-xl text-draw-black font-bold hover:bg-draw-hover-blue" onClick={props.onClick}>{props.text}</button>
    )
}