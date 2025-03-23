import './App.css'

function App() {

  return (
    <main className='main-content'>
      <h1 className='advice-number'>ADVICE #117</h1>
      <p className='advice'>"It's easy to sit up and take notice, what's difficult is getting up and taking action."</p>
      <picture className='pic'>
        <source media="(min-width: 720px)" srcset="./images\pattern-divider-desktop.svg" />
        <img src="./images\pattern-divider-mobile.svg" alt="divider row" />
      </picture>
      <button className='button'></button>
    </main>
  )
}

export default App
