import Dashboard from "./pages/dashboard";
import Signin from "./pages/signin"



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";



function App() {
return(
  <div>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
   
  </div>
)
}

export default App