

import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function FetchMultipleEmployee() {
    const [employees,setEmployees] = useState([])
    useEffect(() => {
      axios.get("http://localhost:8080/employee/all")
      .then(res => {
        console.log(res)
        setEmployees(res.data)
      })
     .catch(err => console.log(err))
    }) 
  

  return (
    <div>
        <ul>
            {employees.map(e => {
               return <li key={e.id}>{e.first_name} {e.last_name} </li>
            })}
        </ul>
    </div>
  )
}
