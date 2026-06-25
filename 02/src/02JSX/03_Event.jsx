//01
function handleClick_01(){
    console.log("clicked_01...");
}

export function Component_Event_01(){
    return (
        <div>
            <h2>Component_Event_01...</h2>
            <button onClick={handleClick_01}>CLICK_ME</button>
        </div>
    )
}

//02
export function Component_Event_02(){
    //state

    //handler
    function handleClick_02(){
        console.log("clicked_02...");
    }

    //ui
    return (
        <div>
            <h2>Component_Event_02...</h2>
            <button onClick={handleClick_02}>CLICK_ME</button>
        </div>
    )
}

//03
export function Component_Event_03(){
    //state

    //handler
    function handleKeyDown(e){
        console.log("keyDown...",e.target.value)
    }

    //ui
    return (
        <div>
            <h2>Component_Event_03...</h2>
            <input onKeyDown={handleKeyDown}  />
        </div>
    )
}