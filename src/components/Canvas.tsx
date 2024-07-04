import React from 'react';
import { Button } from './Button';
const rows = 28
const cols = 28

export default function Canvas(props: any) {
    const [_binaryGrid, setBinaryGrid] = React.useState(Array(rows * cols).fill(0))
    const [gridStates, setGridStates] = React.useState(Array(rows * cols).fill('lg:w-4 lg:h-4 w-3 h-3 bg-white/80'));
    const [isMouseDown, setIsMouseDown] = React.useState(false);


    function clearCanvas() {
        setBinaryGrid(() => {
            const clearedBinaryGrid = Array(rows * cols).fill(0);
            sendBinaryArray(clearedBinaryGrid);
            return clearedBinaryGrid;
        });
        setGridStates(Array(rows * cols).fill('lg:w-4 lg:h-4 w-3 h-3 bg-white/80'));
    };

    const handleMouseDown = (index: number) => {
        setIsMouseDown(true);
        updateGridState(index);
    };

    const handleMouseEnter = (index: number) => {
        if (isMouseDown) {
            updateGridState(index);
        }
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };


    const updateGridState = (index: number) => {
        setBinaryGrid(prevBinaryGrid => {
            const updatedBinaryGrid = [...prevBinaryGrid];
            updatedBinaryGrid[index] = 1;
            sendBinaryArray(updatedBinaryGrid);
            return updatedBinaryGrid;
        });

        setGridStates(prevGridStates => {
            const updatedGridStates = [...prevGridStates];
            updatedGridStates[index] = 'lg:w-4 lg:h-4 w-3 h-3 bg-black';
            return updatedGridStates;
        });
    };

    const canvasGridComponents = [];
    async function sendBinaryArray(gridState: any) {
        const endpoint = import.meta.env.MODE == 'development' ? 'http://127.0.0.1:5000/api/aiGuess' : '/api/aiGuess'
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gridState)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const aiGuess = await response.json()
            props.setGuess(aiGuess.guessed_digit)
            console.log(aiGuess.probabilities)
            props.setStats(aiGuess.probabilities)

            console.log('Data sent successfully');
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    for (let i = 0; i < rows * cols; i++) {
        canvasGridComponents.push(
            <CanvasGrid
                key={i}
                className={gridStates[i]}
                onMouseDown={() => handleMouseDown(i)}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseUp={handleMouseUp}
                content={<canvas></canvas>}
            />
        );
    }


    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <div className="grid-container canvas-shadow">
                {canvasGridComponents}
            </div>
            <ClearButton onClick={() => clearCanvas()} />
        </div>
    );
}

function CanvasGrid(props: any) {
    return (
        <div
            className={props.className}
            onMouseDown={props.onMouseDown}
            onMouseEnter={props.onMouseEnter}
            onMouseUp={props.onMouseUp}
        >
            {props.content}
        </div>
    );
}

function ClearButton(props: { onClick: () => void }) {

    return (
        <Button text="Clear" onClick={props.onClick} />
    )
}