import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'

const Content = () => {

    const [items,setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Paneer Noodles"
        },
        {
            id: 2,
            checked: false,
            item: "Veg Biryani",
        },
        {
            id: 3,
            checked: false,
            item: "Dosa"
        },
        {
            id: 4,
            checked: false,
            item: "Rajma Chawal"
        }
    ]);

    const handleCheck = (id)=>{
        const newList = items.map((thing)=>(
            thing.id === id ? { ...thing, checked: !thing.checked} : thing
        ));
        setItems(newList)
    }

    const handleDelete = (id)=>{
        const newList = items.filter((thing)=>thing.id !== id)
        setItems(newList)
    }

    return (

        
        <main>
            {items.length ? (
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
            ): (<p style = {{marginTop: '2rem'}}>
                    Your List is Empty
                </p>)}
        </main>
    )
}

export default Content