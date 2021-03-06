import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { contentData } from "../data/CreateSection";

export default function Create() {
	return (
		<Section className="create">
			<div className="title">
				<h2>Create Your Own NFTs</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
					suscipit labore odio accusantium veniam at, porro maiores sed
					doloremque rerum?
				</p>
			</div>
			<div className="container">
				<div className="content">
					{contentData.map(
						({ image, title, description, buttonText }, index) => {
							return (
								<div className="create-and-sell" key={index}>
									<div className="image">
										<img src={image} alt="create and sell" />
									</div>
									<h3>{title}</h3>
									<p>{description}</p>
									<div className="button">
										<Button text={buttonText} />
									</div>
								</div>
							);
						}
					)}
				</div>
			</div>
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

	.container {
		background-color: var(--bg-dark-color);
		padding: 3rem;
		border-radius: 1rem;

		.content {
			display: flex;
			gap: 3rem;

			.create-and-sell {
				background-color: var(--bg-light-color);
				padding: 2rem;
				display: flex;
				flex-direction: column;
				gap: 1rem;
				border-radius: 1rem;

				.image {
					border: 1px solid var(--border-white-color);
					box-shadow: rgba(50, 50, 55, 0.2) 0px 7px 28px;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 1rem;
					width: max-content;
					border-radius: 100%;
					margin: 0 auto;

					img {
						height: 2rem;
					}
				}

				h3 {
					color: var(--text-light-color);
					margin: 0 auto;
				}

				p {
					color: var(--text-semi-color);
					margin-bottom: 0.5rem;
					line-height: 1.25rem;
				}

				.button {
					margin: 0 auto;
				}
			}
		}
	}

	@media screen and (min-width: 280px) and (max-width: 1080px) {
		gap: 1.75rem;
		margin: 3rem 2rem;

		.title {
			gap: 0.5rem;
			margin-bottom: 0;

			h2 {
				font-size: 2rem;
				margin-bottom: 0.5rem;
			}

			p {
				color: var(--text-content-color);
			}
		}

		.container {
			padding: 1rem;

			.content {
				flex-direction: column;
				gap: 1rem;
			}
		}
	}
`;
