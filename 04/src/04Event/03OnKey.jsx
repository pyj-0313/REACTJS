import {useState} from "react"

const EventComponent_03 = ()=>{
    const [state,setState] = useState("");

    const handleKeyUp = (e) =>{console.log('KeyUp...',e.target.value);setState(e.target.value);}
    const handleKeyDown = (e) =>{console.log('KeyDonw...',e.target.value);setState(e.target.value);}
    return (
        <div>
            <div>
                STATE : {state}
            </div>
            KEY UP : <input type="text" onKeyUp={handleKeyUp} className="KeyUp" /> <br />
            KEY DOWN : <input type="text" onKeyDown={handleKeyDown} /> <br />
        </div>
    )
}


export default EventComponent_03;