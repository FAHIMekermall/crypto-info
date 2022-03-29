import { Route, Routes } from "react-router-dom"
import "./App.css"
import CoinDetails from "./Components/CoinDetails/CoinDetails"
import Coins from "./Components/Coins/Coins"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import NotFound from "./Components/NotFound/NotFound"

function App() {
	return (
		<div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coins/:coinId" element={<CoinDetails></CoinDetails>}> </Route>
        <Route path="/contact"></Route>
        <Route path="/about"></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
		</div>
	)
}

export default App
