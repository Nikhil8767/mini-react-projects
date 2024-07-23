import React from 'react'

export const Additem = () => {


    const[thingsArray,setThingsArray]=React.useState(["things1","things2"])

    function addItem(){
        setThingsArray(prevthingArray=>{
            return[...prevthingArray,`thing ${prevthingArray.length+1}`]
        })
    }
    const thingsElements=thingsArray.map(things=><p key={things}>{things}</p>)
  return (
    <>
    <div>
        <button onClick={addItem}>add item</button>
        {thingsElements}
    </div>

    
    </>
  )
}
