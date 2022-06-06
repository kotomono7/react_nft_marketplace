import React from "react";
import styled from "styled-components";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

export default function Clients() {
	const clients = [client1, client2, client3, client4, client5, client6];

	return (
		<Section className="clients">
			{clients.map((client, index) => {
				return (
					<div className="image" key={index}>
						<img src={client} alt="client logo" />
					</div>
				);
			})}
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 5rem;

	@media screen and (min-width: 280px) and (max-width: 1080px) {
		margin: 3rem 2rem;

		.image {
			position: relative;

			img {
				width: 5rem;
				height: auto;
			}
		}
	}
`;
