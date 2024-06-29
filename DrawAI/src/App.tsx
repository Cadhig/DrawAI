import React from 'react'
import Canvas from './components/Canvas'
import Header from './components/Header'
import { ClearButton } from './components/Button'

export default function App() {
    const [clear, setClear] = React.useState(false);

    const handleClearButtonClick = () => {
        setClear(!clear);
    };

    return (
        <div className='flex justify-center items-center h-svh flex-col'>
            <Header />
            <Canvas clear={clear} />
            <ClearButton onClick={handleClearButtonClick} log="test"/>
        </div>
    );
}