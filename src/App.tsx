import React from 'react'
import Canvas from './components/Canvas'
import Header from './components/Header'
import AiGuess from './components/AiGuess';
import AiStats from './components/AiStats';

export default function App() {
    const [guess, setGuess] = React.useState()
    const [stats, setStats] = React.useState()

    return (
        <div className='flex justify-center items-center h-svh lg:gap-6 w-full lg:flex-row flex-col'>
            <Header />
            <AiGuess guess={guess} />
            <Canvas setGuess={setGuess} setStats={setStats} />
            <AiStats stats={stats} />
        </div>
    );
}