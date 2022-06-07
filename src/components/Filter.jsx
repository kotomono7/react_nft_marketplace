import React, { useEffect } from "react";
import styled from "styled-components";

export default function Filter({
	marketData,
	setFilteredData,
	activeType,
	setActiveType,
}) {
	useEffect(() => {
		if (activeType === "all") {
			setFilteredData(marketData);
			return;
		}

		const filteredCollection = marketData.filter((item) =>
			item.type.includes(activeType)
		);

		setFilteredData(filteredCollection);
	}, [marketData, setFilteredData, activeType]);

	return (
		<FilterButton>
			<button
				className={activeType === "all" ? "active" : ""}
				onClick={() => setActiveType("all")}
			>
				All
			</button>
			<button
				className={activeType === "art" ? "active" : ""}
				onClick={() => setActiveType("art")}
			>
				Art
			</button>
			<button
				className={activeType === "common" ? "active" : ""}
				onClick={() => setActiveType("common")}
			>
				Common
			</button>
			<button
				className={activeType === "generic" ? "active" : ""}
				onClick={() => setActiveType("generic")}
			>
				Generic
			</button>
			<button
				className={activeType === "rare" ? "active" : ""}
				onClick={() => setActiveType("rare")}
			>
				Rare
			</button>
			<button
				className={activeType === "trading" ? "active" : ""}
				onClick={() => setActiveType("trading")}
			>
				Trading
			</button>
		</FilterButton>
	);
}

const FilterButton = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	position: relative;
	width: max-content;

	button {
		border-radius: 3rem;
		padding: 0.8rem 2rem;
		color: var(--primary-color);
		font-size: 1.1rem;
		cursor: pointer;
		background-color: transparent;
		border: 1px solid var(--primary-color);

		&:where(.active) {
			color: var(--text-light-color);
			background-color: var(--primary-color);
			transition: all 0.5s ease-in-out;
		}

		&:hover {
			color: var(--text-light-color);
			background-color: var(--primary-color);
			transition: all 0.5s ease-in-out;
		}
	}

	@media screen and (min-width: 280px) and (max-width: 1080px) {
		gap: 0.75rem;
	}
`;
