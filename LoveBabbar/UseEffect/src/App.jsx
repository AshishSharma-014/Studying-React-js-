import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);


  // first -> side effect function
  // second -> clean up function
  // third -> comma separated dependency list


  // variation 1 
  // runs on every render

  // useEffect(() => {
  //   alert("I will run on each render.")
  // })


  // variation 2
  // that runs on only first render

  // useEffect(() => {
  //   alert("I will run on first render only")
  // }, [])


  // variation 3 
  
  // useEffect(() => {
  //   alert("I will run when count is updated.")
  // }, [count])


  // variation 4
  // multiple dependencies

  // useEffect(() => {
  //   alert("I will run every time when count / total is updated")
  // }, [count, total])


  // variation 5 
  // Now let's add a clean up

  useEffect(() => {
    alert("count is updated")
    return () => {
      alert("count is unmounted form UI")
    }
  }, [count])

  function handleClick() {
    setCount(count + 1);
  }

  function updateTotal() {
    setTotal(total + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>
        update current
      </button>
      <br></br>
      <h2>Count : {count}</h2>
      <br />

      <button onClick={updateTotal}>
        update total
      </button>
      <br></br>
      <h2>Total : {total}</h2>
    </div>
  )
}

export default App
