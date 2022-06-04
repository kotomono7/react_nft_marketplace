import React, { useState } from "react"
import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from "react-icons/md"
import logo from "../assets/logo.png"
import Button from "./Button";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");

  html.addEventListener("click", (e) => setIsNavOpen(false));

  return (
    <Nav state={isNavOpen ? 1 : 0}>
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="toggle">
        {
          isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )
        }
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <span>
              <a href="#home">Home</a>
            </span>
          </li>
          <li>
            <span>
              <a href="#create">Create</a>
            </span>
          </li>
          <li>
            <span>  
              <a href="#maketplace">Marketplace</a>
            </span>
          </li>
          <li>
            <span>
              <a href="#subscribe">Subscribe</a>
            </span>
          </li>
        </ul>
      </div>
      <div className="contact">
        <Button text="Contact" />
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5rem;

  .brand {
    top: 0;
    left: 0;

    img {
      filter:  brightness(0) invert(1);
    }
  }

  .toggle {
    display: none;
  }

  .links {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    padding: 2.5rem 9rem;

    ul {
      display: flex;
      list-style-type: none;
      gap: 3rem;

      li {
        span {
          position: relative;
          width: max-content;
          padding: 0.25rem 0;

          ::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 0.15rem;
            background-color: var(--primary-color);
            bottom: 0;
            left: 0;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s ease;
          }

          &:hover {
            ::after {
              transform: scaleX(1);
            }
          }

          a {
            color: var(--text-darker-color);
            text-decoration: none;
            transition: 0.4s ease-in-out;

            &:hover {
              color: var(--primary-color);
            }
          }
        }
      }
    }
  }

  .contact {
    top: 0;
    right: 0;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 2rem;
    z-index: 999;
    margin: 0;

    button {
      display: none;
    }

    .account-info {
      display: none;
    }

    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 51;

      &:hover {
        cursor: pointer;
      }

      svg {
        color: var(--primary-color);
      }
    }

    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      z-index: 50;
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: var(--pure-white-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.7s ease-in-out;
      clip-path: none;

      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;

        li {
          span {
            a {
              color: var(--primary-color);
            }
          }
        }
      }
    }
  }
`;
