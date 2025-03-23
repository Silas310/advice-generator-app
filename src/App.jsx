import './App.css'
import { useState } from 'react';

async function getAdvice() {
  try {
    let response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return response.json()
  } catch (error) {
    console.log(error.type)
  }
}



function App() {
  let [advice, setAdvice] = useState("It's easy to sit up and take notice, what's difficult is getting up and taking action.");
  

  function changeAdvice() {
    getAdvice().then(data => 
      setAdvice(data.slip.advice)
    )
  }

  return (
    <main className='main-content'>
      <h1 className='advice-number'>ADVICE #117</h1>
      <p className='advice'>{advice}</p>
      <picture className='pic'>
        <source media="(min-width: 720px)" srcSet="./images/pattern-divider-desktop.svg" />
        <img src="./images/pattern-divider-mobile.svg" alt="divider row" />
      </picture>
      <button className='button' onClick={changeAdvice}></button>
    </main>
  )
}

export default App
