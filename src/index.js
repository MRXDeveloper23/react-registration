import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route index element={<Signup />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
