
const Key = (props) => {
    const { state } = props
    console.log(state)
    return <button className={`key-item status-${state}`} data-value={props.children}>{props.children}</button>
}

export const Keyboard = (props) => {

    const { KEYBOARD, clickHandler, enterHandler, enterEnabled, handleDelete, highlightBackspace } = props

    const handleClick = (e) => {
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
                <Key state={KEYBOARD['Q'].state}>Q</Key>
                <Key state={KEYBOARD['W'].state}>W</Key>
                <Key state={KEYBOARD['E'].state}>E</Key>
                <Key state={KEYBOARD['R'].state}>R</Key>
                <Key state={KEYBOARD['T'].state}>T</Key>
                <Key state={KEYBOARD['Y'].state}>Y</Key>
                <Key state={KEYBOARD['U'].state}>U</Key>
                <Key state={KEYBOARD['I'].state}>I</Key>
                <Key state={KEYBOARD['O'].state}>O</Key>
                <Key state={KEYBOARD['P'].state}>P</Key>
            </div>
            <div className="keys-row">
                <Key state={KEYBOARD['A'].state}>A</Key>
                <Key state={KEYBOARD['S'].state}>S</Key>
                <Key state={KEYBOARD['D'].state}>D</Key>
                <Key state={KEYBOARD['F'].state}>F</Key>
                <Key state={KEYBOARD['G'].state}>G</Key>
                <Key state={KEYBOARD['H'].state}>H</Key>
                <Key state={KEYBOARD['J'].state}>J</Key>
                <Key state={KEYBOARD['K'].state}>K</Key>
                <Key state={KEYBOARD['L'].state}>L</Key>
            </div>
            <div className="keys-row">
                <button className={enterEnabled ? "key-item" + " enabled-btn" : "key-item"} disabled={!enterEnabled} onClick={handleEnter}>ENTER</button>
                <Key state={KEYBOARD['Z'].state}>Z</Key>
                <Key state={KEYBOARD['X'].state}>X</Key>
                <Key state={KEYBOARD['C'].state}>C</Key>
                <Key state={KEYBOARD['V'].state}>V</Key>
                <Key state={KEYBOARD['B'].state}>B</Key>
                <Key state={KEYBOARD['N'].state}>N</Key>
                <Key state={KEYBOARD['M'].state}>M</Key>
                <button className={highlightBackspace ? "key-item" + " enabled-bkp" : "key-item"} onClick={handleDelete}> &lt;&lt; </button>

            </div>
        </div>
    )
}