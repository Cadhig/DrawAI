import { grid } from "./assets/grid"
const gridSize = 28

export default function Canvas() {
    let canvasGridComponents = []
    for (let i = 0; i < gridSize ** 2; i++) {
        canvasGridComponents.push(<CanvasGrid test='hey' content={<canvas className="w-4 h-4"></canvas>} />)
    }

    console.log(canvasGridComponents.length)

    return (
        <div className="grid-container">
            {canvasGridComponents}
        </div>

    )
}

function CanvasGrid(props: any) {

    return (
        <div className="w-4 h-4">
            {props.content}
        </div>

    )
}