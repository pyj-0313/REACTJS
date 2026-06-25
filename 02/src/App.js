import {Element1,Element2,Element3,Element4,Element5} from "./02JSX/01_Basic";
import Basic_01 from "./02JSX/01_Basic";
import CustomComponent from "./02JSX/CustomComponent";
import {Component_Event_01,Component_Event_02,Component_Event_03} from "./02JSX/03_Event"

function App() {
  return (
    <div className="App">
      <section>
        <h1>02JSX 01_BASIC</h1>
        <hr/>
        <Element1 />
        <Element2 />
        <Element3 auth={"ROLE_USER"} name={"홍길동"} />
        <Element3 auth={"ROLE_ADMIN"} name={"티모"} />
        <Element4 auth={"ROLE_USER"} name={"김범수"} />
        <hr/>
        <Element5 list={["aaa","bbb","ccc","ddd"]} />
        <hr/>
        <Basic_01.DefaultComponent1 />
        <Basic_01.DefaultComponent2 />
      </section>
      <hr/>
      <section>
        <h1>02_CUSTOM_COMPONENT</h1>
        <CustomComponent />
      </section>
      <section>
        <h1>03_EVENT_HANDLER</h1>
        <Component_Event_01 />
        <Component_Event_02 />
        <Component_Event_03 />
      </section>
    </div>
  );
}
export default App;
