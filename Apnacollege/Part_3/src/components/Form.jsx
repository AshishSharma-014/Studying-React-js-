function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted successfully!");
};
function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Type something" />
            <button>Submit</button>
        </form>
    )
}
export default Form;