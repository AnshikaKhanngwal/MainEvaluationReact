import React from 'react'

const AdminDashboard = () => {
 

  return (
    <div>
        <h1>Customer Daashboard</h1>
        <h2>SideBar</h2>
        
        <input type="text"  placeholder='Enter Food' />
         <input type="text" placeholder='Enter id'/>
         <select name="Type" id="">
          <option value="Rajisthani">Rajisthani</option>
          <option value="jain">jain</option>
            <option value="Northen">Northen</option>
            
          
         </select>
       
    </div>
  )
}

export default AdminDashboard
// onChange={(e)=>setData(e.target.value)}