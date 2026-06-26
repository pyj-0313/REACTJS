import EventComponent_01 from "./04Event/01OnClick"
import EventComponent_02 from "./04Event/02OnMouse"
import EventComponent_03 from "./04Event/03OnKey"
import EventComponent_04 from "./04Event/04OnChange"
import EventComponent_05 from "./04Event/05OnSubmit"
import EventComponent_06 from "./04Event/06OnScroll"

function App() {
  return (
    <div className="App">
      <h1>EVENT HANDLING</h1>
      <hr/>
      {/* 01 onClick */}
      <EventComponent_01 />
      <hr/>
      {/* 02 onMouse */}
      <EventComponent_02 />
      {/* 03 onKey */}
      <EventComponent_03 />
      {/* 04 OnChange */}
      <EventComponent_04 />
      {/* 05 OnSubmit */}
      <EventComponent_05 />
      {/* 06 OnScroll */}
      <EventComponent_06 />

    </div>
  );
}

export default App;
