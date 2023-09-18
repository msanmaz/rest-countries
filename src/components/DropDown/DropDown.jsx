import React from 'react'

const DropDown = () => {

    const continents = ["Asia", "Africa", "America", "Oceania", "Europe"];

  return (
<>
<div className="dropdown">
  <label tabIndex={0} className="btn m-1">Filter By Region</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    
      {continents.map(continent => (
        <div key={continent}>
          {continent}
        </div>
      ))}
    
  </ul>
</div>
</>
  )
}

export default DropDown