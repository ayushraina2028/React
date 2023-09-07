import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'


const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {
            items.map((thing)=>(
                <l1 key = {thing.id} className = "item">
                    <input 
                        type = "checkbox" checked = {thing.checked}
                        onChange = {()=>handleCheck(thing.id)}
                    />
                    <label style = {(thing.checked) ? {textDecoration:'line-through'} : null} 
                        onDoubleClick={()=>handleCheck(thing.id)}>
                        {thing.item}
                    </label>
                    <FaTrashAlt
                        onClick={()=>handleDelete(thing.id)}
                        role = "button"
                        tabIndex="0"
                    />
                </l1>
            ))
        }
    </ul>
  )
}

export default ItemList