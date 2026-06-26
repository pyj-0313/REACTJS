import Home from "./06Route/Home"
import About from "./06Route/About"
import Contact from "./06Route/Contact"

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <h1>ROUTE</h1> */}



      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact/:name?/:age?" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
