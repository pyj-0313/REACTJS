
import Home from "./pages/Home"
import About from "./pages/About"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
      </Routes>
    </Router>
    
  );
}

export default App;
