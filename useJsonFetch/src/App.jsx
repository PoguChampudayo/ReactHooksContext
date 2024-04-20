

import './App.css'
import { TestData } from './components/TestData'
import { TestError } from './components/TestError'
import { TestLoading } from './components/testLoading'


function App() {


  return (
    <>
    <TestData/>
    <TestLoading/>
    <TestError/>
    </>
  )
}

export default App
