import { Route, Routes } from "react-router-dom"
import "./App.css"
import Coins from "./Components/Coins/Coins"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"

function App() {
	return (
		<div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/contact"></Route>
        <Route path="/about"></Route>
        <Route path="*"></Route>
      </Routes>
		</div>
	)
}

export default App
