import styled from "styled-components";

const StyledHero = styled.div`
  margin: 0rem auto;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  div {
    margin-bottom: 1rem;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    text-align: left;
    max-width: 1200px;
    margin: 3rem auto;
  }

  section {
    padding: 0rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .hero__left {
    flex-basis: 60%;
    margin: 0 1rem;
  }

  .hero__right {
    flex-basis: 40%;
    margin: 0 1rem;
  }
`;

export default StyledHero;
