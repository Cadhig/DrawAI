

export function ClearButton() {

    return (
        <Button text="Clear" />
    )
}

export function Button(props: any) {

    return (
        <button className="bg-draw-blue p-3 rounded-xl text-draw-black font-bold">{props.text}</button>
    )
}