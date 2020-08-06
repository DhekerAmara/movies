import React from 'react'

export default function Filter(props) {
    
    return (
        <div>
            <input  onChange={(e)=>props.handleFilter(e.target.value)} />
        </div>
    )
}
