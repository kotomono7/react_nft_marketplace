import React from 'react'
import styled from "styled-components"
import choose from "../assets/choose.png"
import Button from "./Button";

export default function Choose() {
  return (
    <Section>
      <div className="image">
        <img src={choose} alt="choose us" />
      </div>
      <div className="content">
        <h2>Why Should You Choose Our Service?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni deleniti 
          quo asperiores hic consectetur iusto eos impedit officia repellat? Sapiente magnam 
          nobis ut eos placeat. Omnis, earum iste iusto eveniet odit voluptate dolores nobis 
          fugit perferendis illo architecto distinctio exercitationem ex deserunt minus 
          quisquam tenetur similique.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquam, 
          debitis soluta distinctio obcaecati voluptas velit illo necessitatibus sit. 
          Aspernatur soluta iure corporis culpa voluptates, repellat laudantium perferendis 
          quam qui, minus aut ipsam. Quisquam quam optio dolore provident distinctio accusamus?
        </p>
        <div className="button">
          <Button text="Read More" color="true" />
        </div>
      </div>
    </Section>
  )
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
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-content-color);
      line-height: 2rem;
    }

    button {
      margin-top: 0.75rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 2rem;

    .image {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 50vw;
      }
    }

    .content {
      gap: 1rem;

      h2 {
        font-size: 1rem;
      }

      p {
        line-height: 1.3rem;
        font-size: 0.9rem;
      }
    }
  }
`;