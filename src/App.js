import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Characters</Link>
          </li>
          <li>
            <Link to="quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
          <Route path="quotes" element={<Quotes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
