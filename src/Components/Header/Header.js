import React from "react"
import { Link } from "react-router-dom"
import ActiveLink from "../AcitveLInk/ActiveLink"

const Header = () => {
	return (
		<nav className="h-10 md:h-24 lg:h-28 flex items-center justify-center md:justify-between mx-16 ">
			<Link to="/">
				<p className="text-4xl font-bold font-mono hidden md:block text-gray-500">
					<p>Crypto Info</p>
				</p>
			</Link>
			<div className="flex justify-center  md:justify-end items-center">
				<ActiveLink to="/">
					{" "}
					<p className="text-xl md:text-2xl font-bold font-mono mx-2 md:mx-5">HOME</p>
				</ActiveLink>
				<ActiveLink to="/coins">
					{" "}
					<p className="text-xl md:text-2xl font-bold font-mono mx-2 md:mx-5">COINS</p>
				</ActiveLink>
				<ActiveLink to="/contact">
					{" "}
					<p className="text-xl md:text-2xl font-bold font-mono mx-2 md:mx-5">CONTACT</p>
				</ActiveLink>
				<ActiveLink to="/about">
					{" "}
					<p className="text-xl md:text-2xl font-bold font-mono mx-2 md:mx-5">ABOUT</p>
				</ActiveLink>
			</div>
		</nav>
	)
}

export default Header
