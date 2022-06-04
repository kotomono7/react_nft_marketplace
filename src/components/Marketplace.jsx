import React from "react"
import { BsThreeDots, BsFillPersonFill } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import styled from "styled-components";
import marketplace1 from "../assets/marketplace1.png";
import marketplace2 from "../assets/marketplace2.png";
import marketplace3 from "../assets/marketplace3.png";
import marketplace4 from "../assets/marketplace4.png";
import marketplace5 from "../assets/marketplace5.png";
import marketplace6 from "../assets/marketplace6.png";
import marketplace7 from "../assets/marketplace7.png";
import marketplace8 from "../assets/marketplace8.png";
import Button from "./Button";

export default function Marketplace() {
  const marketplaceData = [
    {
      image: marketplace1,
      name: "Aiboi-meta",
    },
    {
      image: marketplace2,
      name: "Pedram-moahama",
    },
    {
      image: marketplace3,
      name: "Eduardo-pena",
    },
    {
      image: marketplace4,
      name: "Daeho-cha",
    },
    {
      image: marketplace5,
      name: "Justine-florentino",
    },
    {
      image: marketplace6,
      name: "Hoang-lap-solan",
    },
    {
      image: marketplace7,
      name: "Joshua-jay",
    },
    {
      image: marketplace8,
      name: "Joshua-jay",
    },
  ];

  const marketplaceType = ["All", "Art", "Generic", "Common", "Trading", "Rare"];

  return (
    <Section>
      <div className="title">
        <h2>NFT Marketplace</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus dicta, 
          labore laboriosam commodi deserunt quo esse similique quidem ea vero!
        </p>
      </div>
      <div className="marketplace-types">
        {
          marketplaceType.map((text, index) => {
            return (
              <Button text={text} key={index} color={index === 0} />
            )
          })
        }
      </div>
      <div className="marketplace-items">
        {
          marketplaceData.map(({image, name}, index) => {
            return (
              <div className="marketplace" key={index}>
                <div className="image">
                  <img src={image} alt="marketplace" />
                </div>
                <div className="name">
                  <h4>{name}</h4>
                  <BsThreeDots />
                </div>
                <div className="creator">
                  <h5 className="username">Creator: @kotomono.tech</h5>
                  <BsFillPersonFill />
                </div>
                <div className="price-container">
                  <h5 className="price">7.7ETH</h5>
                  <FaEthereum />
                </div>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
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
    gap: 1.5rem;

    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-content-color);
    }
  }

  .marketplace-types {
    display: flex;
    gap: 2rem;
    justify-content: center;

    button {
      .colored {
        border: 1px solid var(--border-white-color);
      }

      :not(.colored) {
        background-color: transparent;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);

        &:hover {
          color: var(--text-light-color);
          background-color: var(--primary-color);
          transition: all 0.5s ease-in-out;
        }
      }
    }
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
      cursor: pointer;
      transition: 0.5s ease-in-out;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 12px,
        rgba(0, 0, 0, 0.2) 0px -6px 12px, rgba(0, 0, 0, 0.2) 0px 3px 6px,
        rgba(0, 0, 0, 0.2) 0px 6px 12px, rgba(0, 0, 0, 0.2) 0px -3px 6px;
      }

      .image {
        margin-bottom: 1rem;

        img {
          transition: all 0.5s ease-in-out;
          filter: grayscale(100%);

          &:hover {
            filter: grayscale(0);
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
    margin: 2rem;
    .marketplace-types {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .marketplace-items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;