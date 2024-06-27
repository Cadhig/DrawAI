import React from 'react';
const rows = 28
const cols = 28
let binaryGridStates = Array(rows*cols).fill(0)

export default function Canvas() {
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
        binaryGridStates[index] = 1
        updatedGridStates[index] = 'w-4 h-4 bg-black';
        console.log(binaryGridStates)
        setGridStates(updatedGridStates);
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