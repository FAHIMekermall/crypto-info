import React from "react"
import {
	Link,
	useMatch,
	useResolvedPath,
} from "react-router-dom"

const ActiveLink = ({ children, to, ...props }) => {
	let resolved = useResolvedPath(to)
	let match = useMatch({ path: resolved.pathname, end: true })
	return (
		<Link
			style={{ color: match ? "rgb(9, 145, 177)" : "black" }}
			to={to}
			{...props}
		>
			{children}
		</Link>
	)
}

export default ActiveLink
