import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NaturalAreaList } from './app/components/NaturalAreaList/NaturalAreaList'
import { UserInput } from './app/components/UserInput/UserInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserInput />
    </>
  )
}

export default App
