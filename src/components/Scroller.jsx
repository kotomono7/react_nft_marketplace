import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

function Scroller() {
	const [visible, setVisible] = useState(false);
	window.addEventListener("scroll", () => {
		window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
	});

	return (
		<Div>
			<span className={`${visible ? "block" : "none"}`}>
				<Link to="home" spy={true} smooth={true}>
					<FaChevronUp />
				</Link>
			</span>
		</Div>
	);
}

const Div = styled.div`
	max-width: 100vw;

	.none {
		opacity: 0;
		visibility: hidden;
	}

	span {
		position: fixed;
		bottom: 2.5rem;
		right: 2.5rem;
		background-color: var(--primary-color);
		padding: 1rem;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.4s ease-in-out;
		z-index: 25;
		cursor: pointer;

		svg {
			color: var(--bg-white-color);
			font-size: 1.3rem;
		}

		@media screen and (min-width: 280px) and (max-width: 1080px) {
			bottom: 2rem;
			right: 2rem;
		}
	}
`;

export default Scroller;
