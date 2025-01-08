import './App.css'
import { Counter } from './app/components/Counter/Counter'
import { NaturalAreaList } from './app/components/NaturalAreaList/NaturalAreaList'
import { UserInput } from './app/components/UserInput/UserInput'


function App() {
  return (
    <>      
      <Counter />
      <UserInput />
      <NaturalAreaList />
    </>
  )
}

export default App
