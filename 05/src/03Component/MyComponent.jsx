import {useState,useEffect} from "react" 
 
const MyComponent = ()=>{
    //State
    const [count,setCount] = useState(0);

    //Handler
    const handleClick = ()=>{
        setCount(count+1);      //비동기 함수 
        // console.log("clicked..",count); 
    }
    //최초 1회 실행(1회만 랜더링 이후 처리 Hook)
    //
    useEffect(()=>{
        console.log("init setting..");
    },[])

    //Count state가 변경될때마다 실행(변경될때마다 랜더링 이후 처리Hook)
    useEffect(()=>{
        console.log("count state changed..",count);
    },[count])

    //UI
    return (
        <>
            <h2>MYCOMPONENT</h2>
            <button onClick={handleClick}>BTN Count : {count}</button>
        </>
    )
}


export default MyComponent;