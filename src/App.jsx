import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const puppyUrl = 'https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players';
  const [puppyData, setPuppyData] = useState ([]);

  useEffect(() =>{
    const getPuppyData = async () => {
      const response = await fetch(puppyUrl);
      const results = await response.json();
      const puppyList = results.data.players;
      console.log(puppyList)
     }
      getPuppyData();
  }) 
  
  return (
    <>
     <h1>puppy bowl</h1>
   
    </>

  )
}

export default App
