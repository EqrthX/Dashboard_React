import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import E_commercePage from "./pages/E_commercePage"
import ProfilePage from "./pages/ProfilePage"


function App() {
  return (
    <div className="bg-gray-100">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/e-commerce" element={<E_commercePage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App
