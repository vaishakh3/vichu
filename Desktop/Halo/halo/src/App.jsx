import Home from "./components/Home/Home";
import Initial from "./components/Initial/Initial";
import Quiz from './components/Quiz/Quiz';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Quiz" element={<Quiz/>} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
