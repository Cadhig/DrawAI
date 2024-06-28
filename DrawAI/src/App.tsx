import React from 'react'
import Canvas from './Canvas'
import Header from './Header'

export default function App() {

    return (
        <div className='flex justify-center items-center h-svh flex-col'>
            <Header />
            <Canvas />
        </div>
    )
}