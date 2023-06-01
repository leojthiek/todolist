import React from "react"
import Header from "./components/header"
import Main from "./components/main"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <main className="main-section">
        <Main />
      </main>
    </div>
  )
}

export default App
