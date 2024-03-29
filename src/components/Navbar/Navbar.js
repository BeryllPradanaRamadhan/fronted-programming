import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <nav>
          <div>
            <h2>Movie App</h2>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/movie/create"> Add Movie </Link>
              </li>
              <li>
                <Link to="/movie/popular"> Popular </Link>
              </li>
              <li>
                <Link to="/movie/now-playing"> Now Playing </Link>
              </li>
              <li>
                <Link to="/movie/top-rated"> Top Rated </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
