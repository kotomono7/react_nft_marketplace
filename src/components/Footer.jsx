import React from "react"
import styled from "styled-components"
import { AiFillFacebook } from "react-icons/ai"
import { BsLinkedin } from "react-icons/bs"
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa"
import { MdEmail, MdPhoneInTalk } from "react-icons/md"
import { IoLocationSharp } from "react-icons/io5"
import logo from "../assets/logo.png"

export default function Footer() {
  const servicesLinks = ["Art", "Generic", "Common", "Trading", "Rare"];
  const companyLinks = ["Home", "Create", "Marketplace", "Subscribe", "Contact"];
  const contactInfo = [
    {
      icon: <MdPhoneInTalk />,
      value: "+(480) 777-0103",
    },
    {
      icon: <MdEmail />,
      value: "umamudayo@gmail.com",
    },
    {
      icon: <IoLocationSharp />,
      value: "Simbang Wetan 10th, Buaran, Pekalongan.",
    },
  ];

  const socialIcons = [
    <AiFillFacebook />,
    <FaTwitterSquare />,
    <FaInstagramSquare />,
    <BsLinkedin />,
  ];

  return (
    <Container>
      <div className="row">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <p className="description">Simbang Wetan 10th, Buaran, Pekalongan, Central Java 51171, Indonesia.</p>
        <div className="social-icons">
          {
            socialIcons.map((icon, index) => {
              return (
                <div className="icon" key={index}>{icon}</div>
              )
            })
          }
        </div>
      </div>
      <div className="row">
        <div className="title">
          <h3>Our Services</h3>
        </div>
        <ul className="list">
          {
            servicesLinks.map((link) => {
              return (
                <li className="list-item" key={link}>{link}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="row">
        <div className="title">
          <h3>Useful Links</h3>
        </div>
        <ul className="list">
          {
            companyLinks.map((link) => {
              return (
                <li className="list-item" key={link}>{link}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="row">
        <div className="title">
          <h3>Contact Us</h3>
        </div>
        <ul>
          {
            contactInfo.map(({ icon, value }, index) => {
              return (
                <li key={index}>
                  <div className="icon">{icon}</div>
                  <span>{value}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.footer`
  background: var(--bg-dark-color);
  border-top: 1rem solid var(--primary-color);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 8rem;
  gap: 7rem;

  .row {
    color: var(--text-span-color);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .brand {
      width: max-content;

      img {
        filter: brightness(0) invert(1);
      }
    }

    .title {
      position: relative;
      margin-bottom: 0.5rem;
      width: max-content;

      h3 {
        color: var(--text-light-color);
        margin-bottom: 0.5rem;
      }

      ::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0.3rem;
        background-color: var(--pure-white-color);
        margin-right: 3rem;
        bottom: 0;
        left: 0;
      }
    }

    .description {
      color: var(--text-span-color);
      margin-bottom: 0.5rem;
    }

    .social-icons {
      display: flex;
      gap: 1rem;

      .icon {
        border: 1px solid var(--bg-span-color);
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        cursor: pointer;
        color: var(--bg-span-color);
        transition: transform 0.5s ease;

        &:hover {
          border: 1px solid var(--bg-white-color);
          color: var(--bg-white-color);
          transform: scale(1.2);
        }

        svg {
          font-size: 1.5rem;
        }
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      :where(.list) {
        cursor: pointer;

        .list-item {
          &:hover {
            color: var(--text-light-color);
          }
        }
      }

      li {
        display: flex;
        gap: 1rem;
        display: flex;
        align-items: center;

        .icon {
          border: 1px solid var(--bg-span-color);
          padding: 0.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.3rem;

          svg {
            color: var(--bg-span-color);
            font-size: 1.5rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
  }
`;