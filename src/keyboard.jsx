


export const Keyboard = (props) => {

    const { clickHandler, enterHandler, enterEnabled, handleDelete } = props

    const handleClick = (e) => {
        console.log('s')
        if (clickHandler && e.target.dataset.value) {
            clickHandler(e.target.dataset.value)
        }
    }
    const handleEnter = (e) => {
        e.stopPropagation();
        if (enterHandler) {
            enterHandler()
        }
    }

    return (
        <div className="keyboard-grid" onClick={handleClick}>
            <div className="keys-row">
                <button className="key-item" data-value="Q">Q</button>
                <button className="key-item" data-value="W">W</button>
                <button className="key-item" data-value="E">E</button>
                <button className="key-item" data-value="R">R</button>
                <button className="key-item" data-value="T">T</button>
                <button className="key-item" data-value="Y">Y</button>
                <button className="key-item" data-value="U">U</button>
                <button className="key-item" data-value="I">I</button>
                <button className="key-item" data-value="O">O</button>
                <button className="key-item" data-value="P">P</button>
            </div>
            <div className="keys-row">
                <button className="key-item" data-value="A">A</button>
                <button className="key-item" data-value="S">S</button>
                <button className="key-item" data-value="D">D</button>
                <button className="key-item" data-value="F">F</button>
                <button className="key-item" data-value="G">G</button>
                <button className="key-item" data-value="H">H</button>
                <button className="key-item" data-value="J">J</button>
                <button className="key-item" data-value="K">K</button>
                <button className="key-item" data-value="L">L</button>
            </div>
            <div className="keys-row">
                <button className={enterEnabled ? "key-item" + " enabled-btn" : "key-item"} disabled={!enterEnabled} onClick={handleEnter}>ENTER</button>
                <button className="key-item" data-value="Z">Z</button>
                <button className="key-item" data-value="X">X</button>
                <button className="key-item" data-value="C">C</button>
                <button className="key-item" data-value="V">V</button>
                <button className="key-item" data-value="B">B</button>
                <button className="key-item" data-value="N">N</button>
                <button className="key-item" data-value="M">M</button>
                <button className="key-item" onClick={handleDelete}> &lt;&lt; </button>

            </div>
        </div>
    )
}