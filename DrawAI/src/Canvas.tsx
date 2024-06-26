import React from 'react'

const gridSize = 28

export default function Canvas() {
    const [gridStates, setGridStates] = React.useState(Array(gridSize ** 2).fill('w-4 h-4'));

    const handleMouseDown = (index: any) => {
        const updatedGridStates = [...gridStates];
        updatedGridStates[index] = 'w-4 h-4 bg-black';
        setGridStates(updatedGridStates);
    };

    const canvasGridComponents = [];
    for (let i = 0; i < gridSize ** 2; i++) {
        canvasGridComponents.push(
            <CanvasGrid
                key={i}
                className={gridStates[i]}
                onMouseDown={() => handleMouseDown(i)}
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
        <div className={props.className} onMouseDown={props.onMouseDown}>
            {props.content}
        </div>

    )
}