import React from 'react'


export function ClearButton(props: { onClick: () => void }) {

    return (
        <Button text="Clear" onClick={props.onClick}/>
    )
}

export function Button(props: { text: string, onClick: () => void}) {

    return (
        <button className="bg-draw-blue p-3 rounded-xl text-draw-black font-bold" onClick={props.onClick}>{props.text}</button>
    )
}