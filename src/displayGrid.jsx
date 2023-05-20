import { useEffect } from "react";


const Row = (props) => {
    const { row } = props;
    const rowItems = row.map((word, index) => {
        return <div key={index} className={"grid-box " + word.type}> {word.value} </div>
    });
    return rowItems

}


export const DisplayGrid = (props) => {
    const { grid, pointer, isInvalidWord } = props

    return (
        <div>{grid.length && grid.map((row, index) => {
            return <div className={!(isInvalidWord && pointer.y === index) ? "grid-row" : "grid-row shake"} key={index} >
                <Row key={index} row={row} />
            </div>
        })}</div>
    )
}