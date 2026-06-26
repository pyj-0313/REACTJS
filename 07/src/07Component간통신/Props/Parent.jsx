import {useState,useEffect} from "react"
import Son from "./Son"

// 부모 -> 자식 state 전파 : props
// 자식 -> 부모 state 변경 : 부모가 만든 Callback함수를 자식이 사용
const Parent = ()=>{
    const [name,setName] = useState("홍길동")

    const handleChangeName = (name)=>{
        setName(name);
    }
    return (
        <div>
            <h2>PARENT_01 COMPONENT</h2>
            부모 상태값 name : {name} <br />
            <hr/>
            <Son  
                user={name}
                handleChangeParentName={handleChangeName}
            />
        </div>
    )

}

export default Parent;