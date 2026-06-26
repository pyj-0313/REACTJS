
const EventComponent_05 = ()=>{

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit...",e);
        // e.target.submit();       //동기방식 요청
    }
    return (
        <div>
            <hr/>
            <form onSubmit={handleSubmit} action="/test.jsp">
                <input type="text" /><br />
                <button type="submit">전송</button>
            </form>
         </div>
    )

  }

export default EventComponent_05;

    