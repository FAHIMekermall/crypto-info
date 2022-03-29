import React from "react"
import { Link } from "react-router-dom"

const Coin = ({ coin:{image, name, symbol,id} }) => {
	return (
		<div className="rounded-lg border flex justify-between px-4 py-3 bg-white w-[270px]">
			<Link to={`/coins/`+id}>
				<img width={60} height={60} src={image} alt="" />
			</Link>
			<div>
                <p className="font-semibold text-xl text-right">{name}</p>
                <p className="font-semibold text-right">{symbol}</p>
            </div>
		</div>
	)
}

export default Coin
