import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import StageOne from './pages/StageOne';
import StageTwo from './pages/StageTwo';
import StageThree from './pages/StageThree';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Bigass Component</Link> &gt;{" "}
          <Link to="/stageone">Separated Components</Link> &gt;{" "}
          <Link to="/stagetwo">Unidirectional Store</Link> &gt;{" "}
          <Link to="/stagethree">Form Handling</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stageone" element={<StageOne />} />
          <Route path="/stagetwo" element={<StageTwo />} />
          <Route path="/stagethree" element={<StageThree />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
