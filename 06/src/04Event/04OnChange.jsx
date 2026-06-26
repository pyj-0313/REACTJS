import { useState, useEffect } from "react"

const EventComponent_04 = () => {
    const [state,setState] = useState("")

    const handleChange = (e)=>{
        console.log("onChange...",e);
        const {name, value, type, checked} = e.target;
        console.log(name,value,type,checked)
        setState(value);
    }
    return (

        <div>
            <hr/>
            {state}
            <hr/>
            <input type="text" onChange={handleChange} />       <br /> 
            <input type="checkbox" onChange={handleChange} /> 체크박스  <br />
            <input type="radio" name="radio" value="r1" onChange={handleChange} />  선택1   <br />
            <input type="radio" name="radio" value="r2" onChange={handleChange} />  선택2   <br />
        </div>
    )
}


export default EventComponent_04;