import React from 'react';
import { Button } from './Button';
const rows = 28
const cols = 28

export default function Canvas() {
    const [binaryGrid, setBinaryGrid] = React.useState(Array(rows * cols).fill(0))
    const [gridStates, setGridStates] = React.useState(Array(rows * cols).fill('w-4 h-4'));
    const [isMouseDown, setIsMouseDown] = React.useState(false);

    
    function clearCanvas() {
        setBinaryGrid(() => {
            const clearedBinaryGrid = Array(rows * cols).fill(0);
            sendBinaryArray(clearedBinaryGrid);
            return clearedBinaryGrid;
        });
        setGridStates(Array(rows * cols).fill('w-4 h-4'));
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
            updatedGridStates[index] = 'w-4 h-4 bg-black';
            return updatedGridStates;
        });
    };

    const canvasGridComponents = [];
    function sendBinaryArray(gridState: any) {
        fetch('http://localhost:5000/api/data', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gridState)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Data sent successfully');
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
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
        <div>
            <div className="grid-container canvas-shadow">
                {canvasGridComponents}
            </div>
            <ClearButton onClick={()=> clearCanvas()}/>
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
        <Button text="Clear" onClick={props.onClick}/>
    )
}