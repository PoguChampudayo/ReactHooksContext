import React, { useContext, useEffect, useState} from 'react'
import { UserDetailsContext } from './context/UserDetailsContext'

export const Details = () => {
    const {id} = useContext(UserDetailsContext)
    const [userDetails, setDetails] = useState([])
    const uploadUser = async (id) => {
            try {const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`, {mode:'cors'});
            const data = await response.json();
            setDetails(data)
            console.log(data);}
            catch (e) {
                console.log(e);
            }
    }
    useEffect(() => {
       uploadUser(id)
      }, [id]);
  if (userDetails) {
    return (
        <div>
            <img src={userDetails.avatar} alt="111" />
            {userDetails.name}
            {/* {userDetails.details.city}
            {userDetails.details.company}
            {userDetails.details.position} */}
            
        </div>
      )
  }
      
}
