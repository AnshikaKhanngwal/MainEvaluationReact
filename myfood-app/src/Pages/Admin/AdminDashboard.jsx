import React from 'react'
import { useState } from 'react';

const AdminDashboard = () => {
 const [food,setFood]= useState("");
 const [id,setId]= useState("");
 const [type,setType]= useState("");
 const [parking,setParking]=useState("")
 const [data,setData]= useState([])

  function handleAdd(){
    setData([...data,("food","id","type","data")]);
    setFood("");
    setId("");
    setType("");
    setData("")
  }
 

 

  return (
    <div>
        <h1>Admin Daashboard</h1>
        
        <h2>SideBar</h2>
        
        <input type="text"  placeholder='Enter Food'  onChange={(e)=>setFood(e.target.value)}/>
         <input type="text" placeholder='Enter id' onChange={(e)=>setId(e.target.value)}/>
         <select name="Type" id="Type"  onChange={(e)=>setType(e.target.value)}>
          <option value="Rajisthani">Rajisthani</option>
          <option value="jain">jain</option>
            <option value="Northen">Northen</option>
         </select>

         <select name="Parking" id="parking" onChange={(e)=>setParking(e.target.value)}>
          <option value="Parking yes">Parking Yes</option>
           <option value="Parking yes">Parking No</option>
         </select>
         <button>Add Data</button>
      
    </div>
  )
}

export default AdminDashboard
