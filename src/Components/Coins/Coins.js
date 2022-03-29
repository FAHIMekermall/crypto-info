import React, { useEffect, useState } from "react"
import Coin from "../Coin/Coin"
import Spinner from "../Spinner/Spinner"

const Coins = () => {
	const [coins, setCoins] = useState([])
	const [spinner, setSpinner] = useState(false)
	useEffect(() => {
		setSpinner(true)
		fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
		)
			.then((res) => res.json())
			.then((data) => {
				setSpinner(false)
				setCoins(data)
			})
	}, [])
	return (
		<>
			{spinner ? (
				<Spinner></Spinner>
			) : (
				<div className="bg-slate-100">
					<div className="grid grip-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-14 px-4 md:px-28 justify-items-center ">
						{coins.map((coin) => (
							<Coin key={coin.id} coin={coin}></Coin>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default Coins
