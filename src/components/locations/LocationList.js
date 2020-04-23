import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"


export default () => {
  const { locations } = useContext(LocationContext)

  return (
    <div className='locations'>
      {
        locations.map(loc => <Location key={loc.id} location={loc.name} />)
      }
    </div>
  )
}