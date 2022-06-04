import React from 'react'
import styled from "styled-components"

export default function Button({ text, color = false }) {
  return (
    <Div>
      <button className={`${color ? "colored" : ""}`}>{text}</button>
    </Div>
  )
}

const Div = styled.div`
  position: relative;
  width: max-content;

  button {
    border-radius: 3rem;
    padding: 0.8rem 2rem;
    border: none;
    color: var(--text-light-color);
    font-size: 1.1rem;
    cursor: pointer;
    
    :not(.colored) {
      background-color: transparent;
      border: 1px solid var(--border-white-color);

      &:hover {
        color: var(--text-light-color);
        background-color: var(--primary-color);
        transition: all 0.5s ease-in-out;
      }
    }
  }
  .colored {
    color: var(--text-light-color);
    border: 1px solid var(--border-white-color);
    background-color: var(--primary-color);
  }
`;