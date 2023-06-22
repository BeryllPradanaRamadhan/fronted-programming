import styled from "styled-components";

const StyledDetailMovie = styled.div`
  /* Small Screen */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: #4361ee;
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: #b5179e;
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .poster {
      flex-basis: 60%;
    }

    .info {
      flex-basis: 50%;
    }
  }

  /* Large  Screen */
  @media (min-width: 992px) {
    text-align: left;
    max-width: 1200px;
    margin: 1rem auto;
  }

  .poster {
    flex-basis: 30%;
  }

  .info {
    flex-basis: 70%;
  }
`;

export default StyledDetailMovie;
