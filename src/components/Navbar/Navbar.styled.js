import styled from "styled-components";

const StyledNavbar = styled.div`
/* Small Screen */
div {
    background-color: #0a3d62;
    padding: 1rem;
    color: #fff;
    margin: 0rem;
  }
  
  nav {
    display: flex;
    flex-direction: column;
    
  }
  
  
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    
  }
  
  li {
    margin-bottom: 1rem;
    color: #fff;
  }

  a{
    text-decoration: none;
    color: #fff;
    cursor: pointer;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  
    ul {
      flex-direction: row;
    }
  
    li {
      margin: 0 1rem;
    }
  }
  
  /* Large Screen */
  @media (min-width: 1024px) {
   div {
    padding: 1rem;
    align-items: center;
   }
   ul {
    align-items: center;
   }
   h2 {
    align-items: center;
   }
  }

`

export default StyledNavbar;