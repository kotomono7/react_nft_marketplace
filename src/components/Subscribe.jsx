import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import styled from "styled-components";
import subscribe from "../assets/subscribe.png";

export default function Subscribe() {
	return (
		<Section className="subscribe">
			<div className="content">
				<h2>Subscribe to Our Newsletter and Get Interesting Offers</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni odio
					consequuntur aliquam a labore ut recusandae culpa saepe consequatur
					illo?
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
					veritatis laudantium corporis enim doloribus temporibus! Rem doloribus
					nulla libero ex.
				</p>
				<div className="input-container">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email address"
						required
					/>
					<BsFillArrowRightCircleFill />
				</div>
			</div>
			<div className="image">
				<img src={subscribe} alt="subscribe" />
			</div>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
	margin: 0 5rem;
	margin-bottom: 5rem;

	.content {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;

		h2 {
			font-size: 4rem;
			margin-bottom: 0.5rem;
		}

		p {
			color: #7b7e86;
			line-height: 1.75rem;
		}

		.input-container {
			display: flex;
			/* gap: 1rem; */
			justify-content: center;
			align-items: center;
			padding: 0.5rem;
			margin: 0 auto;
			margin-top: 1rem;
			width: max-content;
			/* border-radius: 3rem; */
			/* border: 1px solid var(--border-lighter-color); */

			input {
				border: 1px solid var(--border-lighter-color);
				border-radius: 3rem;
				padding: 1.5rem 3rem;
				font-size: 1.3rem;
				width: 30rem;

				&:focus {
					outline: none;
					border: 1px solid var(--primary-color);
				}
			}

			svg {
				position: relative;
				color: var(--primary-color);
				font-size: 4rem;
				top: 0;
				right: 13%;

				&:hover {
					cursor: pointer;
				}
			}
		}
	}

	@media screen and (min-width: 280px) and (max-width: 1080px) {
		flex-direction: column;
		margin: 0 2rem;
		gap: 2rem;
		margin-bottom: 2rem;

		.image {
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				height: 80vw;
			}
		}

		.content {
			gap: 1rem;

			h2 {
				font-size: 2.25rem;
				margin-bottom: 0.5rem;
			}

			p {
				line-height: 1.3rem;
				font-size: 1rem;
			}

			.input-container {
				display: none;
				width: max-content;

				input {
					width: 50%;
				}
			}
		}
	}
`;
