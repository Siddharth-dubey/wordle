

const Row = (props) => {
    const { row } = props;
    const rowItems = row.map((word, index) => {
        return <div key={index} className={"grid-box " + word.type}> {word.value} </div>
    });
    return rowItems

}


export const DisplayGrid = (props) => {
    const { grid } = props

    return (
        <div>{grid.length && grid.map((row, index) => {
            return <div className="grid-row" key={index} >
                <Row key={index} row={row} />
            </div>
        })}</div>
    )
}