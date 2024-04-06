import React, { useContext, useEffect, useState } from 'react'
import { UserDetailsContext } from './context/UserDetailsContext'

export const List = () => {
    const {setID} = useContext(UserDetailsContext)
    const [list, setList] = useState([])
    const uploadUsers = async () => {
        try {
            const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json ', {mode:'cors'});
            const data = await response.json();
            setList(data)
          }
          catch (e) {
            console.log(e)
          }
    }
    useEffect(() => {
       uploadUsers()
      }, []);
    

  return (
    <ul>
        {list.map((user) => {
            return <li key={user.id} onClick={() => setID(Number(user.id))}>
                {user.name}
            </li>
        })}
    </ul>
  )
}
