import {useState,useEffect} from "react"

import { useContext } from "react"
import CustomContext from "../ContextAPI/Context"

const Son = ({user,handleChangeParentName})=>{
    const [name,setName] = useState(user)

        //Context Global Value
    const { globalState,setGlobalState } = useContext(CustomContext)

    const handleChangeName=(e)=>{
        setName(e.target.value);    //Son's name 변경
        // handleChangeParentName(e.target.value); //Parent's name 변경

        
        
    }
    const handleClick=()=>{
        handleChangeParentName(name);
    }
    return (
        <div>
            <h2>SON_01 COMPONENT</h2>
            부모로부터 받은 상태값 name : {name} <br/>
            <hr/>
            ContextAPI SON에서 전역변수 확인 : {globalState} <br/>

            <input onChange={handleChangeName}/> <br/>
            <button onClick={handleClick}>Parent name 변경 버튼</button>
            <hr/>
        </div>
    )

}

export default Son;