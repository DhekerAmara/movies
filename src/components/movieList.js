import React from 'react'
import Cards from "./cardMovie"
export default function MovieList(props) {
    return (
        <div className="wrapper">
           {props.movies.filter(el=> el.name.toLowerCase().includes(props.input.toLowerCase())).map(el=>  <div><Cards movie={el} /> </div>)}
        </div>
    )
}
