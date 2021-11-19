import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')

  const initialSearch = 'strawberry'
  
  const getImage = (search = initialSearch) => {
    console.log(search)
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=3DtaphgeVb3f2b6BjeQNqiUX8Z5uNQFw&limit=1&q=${search}`)
    .then(response => {
   console.log(response)
   setData(response.data.data)
  })
}

useEffect(getImage, [initialSearch])

  //useEffect (() => {
//console.log(axios)
//axios.get('http://api.giphy.com/v1/gifs/search?api_key=3DtaphgeVb3f2b6BjeQNqiUX8Z5uNQFw&limit=1&q=cat')
 //.then(response => {
   //console.log(response)
   //setData(response.data.data)
 //})}, [])

 const handleClick = (e) => {
  e.preventDefault()
  console.log('input: ', input)
  getImage(input)
 } 

 const handleChange = (e) => {
  setInput(e.target.value)
 }

  return (
    <div className="App">
      <form>
        <input type="text" value={input} onChange={handleChange} name="topic" />
        <button type="submit" onClick={handleClick}> Search </button>
      </form>
      
   {
        data.map( img => {
       console.log(img)
       return (<div>
         <img src={img.images.fixed_width.url} alt={img.title}></img>
       </div>)
     } )
   }
    </div>
  );
}

export default App;
