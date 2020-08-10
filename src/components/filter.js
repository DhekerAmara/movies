import React,{useState} from 'react'
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];



 
export default function Filter(props) {
    const [star, setstar] = useState(0)
   const  handleChange = value => {
        setstar(value)
        props.handleStar(value)
      };
    return (
        <div>
            <input  onChange={(e)=>props.handleFilter(e.target.value)} />
            <span>
        <Rate tooltips={desc} onChange={handleChange} value={star} />
        {star ? <span className="ant-rate-text">{desc[star - 1]}</span> : ''}
      </span>
        </div>
    )
}
