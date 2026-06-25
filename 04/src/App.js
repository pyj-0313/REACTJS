import EventComponent_01 from "./04Event/01OnClick"
import EventComponent_02 from "./04Event/02OnMouse"

function App() {
  return (
    <div className="App">
      <h1>EVENT HANDLING</h1>
      <hr/>
      {/* 01 onClick */}
      <EventComponent_01 />
      <hr/>
      <EventComponent_02 />
    </div>
  );
}

export default App;
