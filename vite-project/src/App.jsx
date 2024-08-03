import { Route, Routes } from 'react-router-dom'
import { routes } from './Components/utils/routes'
import './App.css'
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Layout from "./Layout/Layout";
function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
      </Route>
    </Routes>
  </div>

  )
}

export default App
