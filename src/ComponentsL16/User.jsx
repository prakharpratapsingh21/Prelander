import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../Context/Context'
function User() {
    const {users, setusers}=useContext(UserContext);
  return (
    <div className='p-4'>
        <h1 className='text-2xl'>User List</h1>
        <div>
            {users.map((u)=>{
                <Link to={`/user/ ${u.id}`} >{u.name}</Link>
            })}
             
        </div>
    </div>
  )
}

export default User