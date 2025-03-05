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
          <Link to="/react-refactor/">Bigass Component</Link> &gt;{" "}
          <Link to="/react-refactor/stageone">Separated Components</Link> &gt;{" "}
          <Link to="/react-refactor/stagetwo">Unidirectional Store</Link> &gt;{" "}
          <Link to="/react-refactor/stagethree">Form Handling</Link>
        </nav>

        <Routes>
          <Route path="/react-refactor/" element={<Home />} />
          <Route path="/react-refactor/stageone" element={<StageOne />} />
          <Route path="/react-refactor/stagetwo" element={<StageTwo />} />
          <Route path="/react-refactor/stagethree" element={<StageThree />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
