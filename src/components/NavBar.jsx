import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import "./styleNavBar.css";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (search) {
      navigate(`/search?q=${search}`);
    }
  }, [search, navigate]);

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/">
          <BsFillCameraReelsFill className="logo-icon" /> Movies
        </Link>
      </div>
      <div className="nav-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit" disabled>
            <BiSearchAlt2 className="search-icon" />
          </button>
        </form>
      </div>
    </nav>
  );
}
