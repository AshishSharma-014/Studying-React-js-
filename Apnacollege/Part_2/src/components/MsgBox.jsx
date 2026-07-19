function MsgBox({name, textColor}) {
    return (
        <div>
        <h3 style = {{ color : textColor}}>Hello : {name} </h3>
        <p>How are you?</p>
        </div>
    )
}
export default MsgBox;