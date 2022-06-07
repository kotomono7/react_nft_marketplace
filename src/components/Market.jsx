import React, { useState, useEffect, useRef } from "react";
import { BsThreeDots, BsFillPersonFill } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import styled from "styled-components";
import Filter from "./Filter";
import { marketItems } from "../data/MarketSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Market() {
	const [marketData, setMarketData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [activeType, setActiveType] = useState("all");

	const getCollection = useRef(() => {});

	getCollection.current = () => {
		setMarketData(marketItems);
		setFilteredData(marketItems);
	};

	useEffect(() => {
		getCollection.current();
	}, []);

	return (
		<Section className="market">
			<div className="title">
				<h2>Top Creator NFT Market</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
					dicta, labore laboriosam commodi deserunt quo esse similique quidem ea
					vero!
				</p>
			</div>
			<div className="marketplace-types">
				<Filter
					marketData={marketData}
					setFilteredData={setFilteredData}
					activeType={activeType}
					setActiveType={setActiveType}
				/>
			</div>

			<motion.div layout="true" className="marketplace-items">
				<AnimatePresence>
					{filteredData.map(({ image, name, creator, price }, index) => {
						return (
							<motion.div
								animate={{ opacity: 1 }}
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								layout="true"
								className="marketplace"
								key={index}
							>
								<motion.div layout="true" className="image">
									<img className="nft-img" src={image} alt="marketplace" />
									<div layout="true" className="overlay">
										<button>Place Bid</button>
									</div>
								</motion.div>
								<motion.div layout="true" className="name">
									<motion.h4>{name}</motion.h4>
									<BsThreeDots />
								</motion.div>
								<motion.div layout="true" className="creator">
									<motion.h5 className="username">Creator: {creator}</motion.h5>
									<BsFillPersonFill />
								</motion.div>
								<motion.div layout="true" className="price-container">
									<motion.h5 className="price">{price} ETH</motion.h5>
									<FaEthereum />
								</motion.div>
							</motion.div>
						);
					})}
				</AnimatePresence>
			</motion.div>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
	margin: 0 5rem;
	margin-bottom: 5rem;

	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 0.5rem;

		h2 {
			font-size: 3rem;
			margin-bottom: 0.5rem;
		}

		p {
			color: var(--text-content-color);
		}
	}

	.marketplace-types {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.marketplace-items {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;

		.marketplace {
			box-shadow: rgba(50, 50, 55, 0.2) 0px 7px 28px;
			padding: 0.5rem;
			border-radius: 1.25rem;
			border: 1px solid var(--border-lighter-color);
			width: max-content;
			transition: 0.5s ease-in-out;

			&:hover {
				box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 12px,
					rgba(0, 0, 0, 0.2) 0px -6px 12px, rgba(0, 0, 0, 0.2) 0px 3px 6px,
					rgba(0, 0, 0, 0.2) 0px 6px 12px, rgba(0, 0, 0, 0.2) 0px -3px 6px;
			}

			.image {
				position: relative;
				margin-bottom: 1rem;

				.nft-img {
					opacity: 1;
					display: block;
					width: 100%;
					height: auto;
					transition: 0.5s ease;
					backface-visibility: hidden;
				}

				.overlay {
					position: absolute;
					opacity: 0;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					-ms-transform: translate(-50%, -50%);
					-webkit-transform: ranslate(-50%, -50%);
					transition: 0.5s ease;
					text-align: center;

					button {
						border: 1px solid var(--primary-color);
						border-radius: 3rem;
						background: var(--bg-white-color);
						color: var(--primary-color);
						font-size: 16px;
						padding: 0.8rem 2rem;
						cursor: pointer;

						&:hover {
							color: var(--text-light-color);
							background: var(--primary-color);
						}
					}
				}

				&:hover {
					.nft-img {
						opacity: 0.3;
					}

					.overlay {
						opacity: 1;
					}
				}
			}

			.name {
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: var(--text-dark-color);
				padding: 0 1rem;
			}

			.creator {
				display: flex;
				justify-content: space-between;
				padding-bottom: 0.75rem;
				margin-bottom: 0.5rem;
				margin: 0 1rem;
				color: var(--text-content-color);

				.username {
					font-size: 0.75rem;
				}
			}

			.price-container {
				display: flex;
				justify-content: space-between;
				margin: 0 1rem;
				padding-bottom: 0.75rem;
				color: var(--primary-color);
			}
		}
	}

	@media screen and (min-width: 280px) and (max-width: 1080px) {
		gap: 1.75rem;
		margin: 3rem 2rem;

		.title {
			gap: 0.5rem;
			margin-bottom: 0.25rem;

			h2 {
				font-size: 2rem;
				margin-bottom: 0.5rem;
			}

			p {
				color: var(--text-content-color);
			}
		}

		.marketplace-items {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;
