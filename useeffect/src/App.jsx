import { List } from './components/List'
import { useState } from 'react';
import { UserDetailsContext } from './components/context/UserDetailsContext'
import './App.css'
import { Details } from './components/Details';

function App() {
  const [id, setID] = useState("");
  return (
    
    <UserDetailsContext.Provider value={{ id, setID }}>
      <List/>
      <Details/>
    </UserDetailsContext.Provider>
    
  )
}

export default App
