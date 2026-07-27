
import './App.css'

function App() {
  function handleInputChange(e){
    console.log("Value till now : ", e.target.value);
  }
  function handleSubmit(e) {
    alert("Form has been submitted.");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
