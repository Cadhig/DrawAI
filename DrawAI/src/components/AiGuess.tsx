import React from 'react'
export default function AiGuess(){
const [guess, setGuess] = React.useState()
    async function getGuess() {
        const response = await fetch('http://localhost:5000/api/data/aiGuess', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const aiGuess = await response.json()
        setGuess(aiGuess.guessed_digit)
        console.log(aiGuess)
    }

    return(
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-64 h-1/2 p-4 bg-draw-blue flex justify-center items-center border rounded">
            <div className="w-64 h-full flex flex-col items-center gap-20">
                <p className="font-bold text-xl text-center">Draw AI thinks the number is:</p>
                <p className="font-bold text-8xl">{guess}</p>
                <button onClick={()=> getGuess()}>tester</button>
            </div>
            </div>
        </div>
    )
}