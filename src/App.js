import "./App.css";
import "./responsive.css"
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-left">
          <Profile />
        </div>
        <div className="App-right">
          <BrowserRouter>
            <Routes>
              <Route index element={<Content/>}/>
              <Route path="/portofolio" element={<Content/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
