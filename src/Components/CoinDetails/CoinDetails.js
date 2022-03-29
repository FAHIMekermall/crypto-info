import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"

const CoinDetails = () => {
	const { coinId: id } = useParams()
	const [coinDetails, setCoinDetails] = useState([])
	const [spinner, setSpinner] = useState(false)
	useEffect(() => {
		setSpinner(true)
		const url = `https://api.coingecko.com/api/v3/coins/${id}`
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
                setSpinner(false)
                setCoinDetails(data)})
	}, [])
	return (
		<>
			{spinner ? (
				<Spinner></Spinner>
			) : (
				<div className="flex flex-col md:flex-row items-center justify-around px-16 pt-28">
					<div className="md:order-1">
						<img src={coinDetails?.image?.large} alt="" />
					</div>
					<div>
						<div className="md:order-5">
							<p className="text-4xl font-bold font-mono text-gray-700">
								Generel info:
							</p>
							<hr />
							<p className="text-xl">Name: {coinDetails?.name}</p>
							<p className="text-xl">Name: {coinDetails?.name}</p>
							<p className="text-xl">
								Origin:{" "}
								{coinDetails?.country_origin
									? coinDetails?.country_origin
									: "Not available"}
							</p>
						</div>
						<div></div>
					</div>
				</div>
			)}
		</>
	)
}

export default CoinDetails
