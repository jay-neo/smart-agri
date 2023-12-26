import React, { useState } from 'react'
import './styles/App.css'
import AppRoute from './routes/AppRoute'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoute/>
    </>
  )
}

export default App
