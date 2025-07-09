import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFounde } from "./pages/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFounde />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
