import Component01 from "./05ConditionRendering/Component01"
import Component02 from "./05ConditionRendering/Component02"
import Component03 from "./05ConditionRendering/Component03"

function App() {
  return (
    <div className="App">
      <h1>ConditionRendering HANDLING</h1>
      <hr/>
      <Component01 isAuth={false} />
      <hr/>
      <Component02 isAuth={true} />
      <hr/>
      <h2>&& -01</h2>
      <Component03 />
      <hr/>
      <h2>&& -02</h2>
      <Component03 items={['오렌지','바나나','수박','딸기']} />
    </div>
  );
}

export default App;
