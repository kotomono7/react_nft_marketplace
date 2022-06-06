import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import heroText from "../assets/heroText.png";
import hero from "../assets/hero.png";
import Button from "./Button";

export default function Home() {
	return (
		<Section className="home">
			<Navbar />
			<div className="ellipse"></div>
			<div className="container">
				<div className="content">
					<h1>
						Explore Our
						<span>
							<img src={heroText} alt="hero text" />
						</span>
						Digital NFT Marketplace
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
						suscipit labore odio accusantium veniam at, porro maiores sed
						doloremque rerum?
					</p>
					<div className="buttons">
						<Button text="Explore Now" color="true" />
						<Button text="Create NFT" />
					</div>
					<div className="data">
						<div className="dataTab">
							<h2>65K+</h2>
							<span>Artworks</span>
						</div>
						<div className="dataTab">
							<h2>35K+</h2>
							<span>Auctions</span>
						</div>
						<div className="dataTab">
							<h2>20K+</h2>
							<span>Artists</span>
						</div>
					</div>
				</div>
				<div className="image">
					<img src={hero} alt="hero" />
				</div>
			</div>
		</Section>
	);
}

const Section = styled.section`
	height: 100vh;
	background-color: var(--bg-dark-color);
	position: relative;
	overflow: hidden;

	.ellipse {
		height: 30rem;
		width: 30rem;
		background-color: var(--secondary-color);
		opacity: 0.5;
		border-radius: 100%;
		filter: blur(2000px);
		-webkit-filter: blur(2000px);
		position: absolute;
		margin-top: auto;
		z-index: 1;
	}

	.container {
		padding: 2rem;
		margin: 0 3rem;
		display: flex;

		.content {
			z-index: 10;
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			margin-top: auto;
			padding-bottom: 1rem;

			h1 {
				color: var(--text-light-color);
				font-size: 4rem;

				span {
					img {
						height: 4rem;
						margin-bottom: -3px;
					}
				}
			}

			p {
				color: var(--text-semi-color);
			}

			.buttons {
				display: flex;
				gap: 2rem;
			}

			.data {
				display: flex;
				gap: 5rem;

				.dataTab {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;

					h2 {
						color: var(--text-light-color);
						font-size: 2rem;
					}

					span {
						text-align: center;
						color: var(--text-semi-color);
					}
				}
			}
		}

		.image {
			img {
				position: relative;
				margin-top: auto;
				height: 32rem;
			}
		}
	}

	@media screen and (min-width: 280px) and (max-width: 1080px) {
		margin: 0;
		border-radius: 0;

		.container {
			flex-direction: column;
			margin: 0;
			padding: 2rem;
			gap: 2rem;
			justify-content: center;
			align-items: center;

			.content {
				padding-right: 0;
				text-align: center;

				h1 {
					font-size: 3rem;

					span {
						img {
							height: 2rem;
						}
					}
				}

				.buttons {
					gap: 1rem;
					justify-content: center;
					align-items: center;
				}

				.data {
					justify-content: center;
					align-items: center;
					gap: 2rem;
				}
			}

			.image {
				img {
					height: 10rem;
				}
			}
		}
	}
`;
