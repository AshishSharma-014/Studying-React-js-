function printHello(){
    console.log("hello!");
}


function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
        </div>
    )
}
export default Button;