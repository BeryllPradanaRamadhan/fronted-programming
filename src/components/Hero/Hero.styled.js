import styled from "styled-components";

const StyledHero = styled.div`
  margin: 0 auto;
  padding: 1rem;


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
    margin: 3em auto;
  }

  section {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }


  div {
    flex-basis: 30%;
    justify-content: end;
    align-items: end;
  }

`;

export default StyledHero;