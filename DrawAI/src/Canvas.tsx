import React from 'react';
const rows = 28
const cols = 28

export default function Canvas() {
    const [binaryGrid, setBinaryGrid] = React.useState(Array(rows*cols).fill(0))
    const [gridStates, setGridStates] = React.useState(Array(rows * cols).fill('w-4 h-4'));
    const [isMouseDown, setIsMouseDown] = React.useState(false);

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
        const updatedGridStates = [...gridStates];
        const updatedBinaryGrid = [...binaryGrid];
        updatedBinaryGrid[index] = 1
        setBinaryGrid(updatedBinaryGrid)
        updatedGridStates[index] = 'w-4 h-4 bg-black';
        console.log(updatedBinaryGrid)
        setGridStates(updatedGridStates);
        sendBinaryArray(updatedBinaryGrid)
    };
    const canvasGridComponents = [];
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

    function sendBinaryArray(gridState:any){
        fetch('http://localhost:5000/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gridState)
        })
        console.log('success')
    }

    return (
        <div className="grid-container">
            {canvasGridComponents}
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
