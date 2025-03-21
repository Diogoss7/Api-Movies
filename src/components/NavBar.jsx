import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import "./styleNavBar.css";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    console.log(search);

    navigate(`/search?q=${search}`);
    setSearch("")
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/">
          <BsFillCameraReelsFill className="logo-icon" /> Movies
        </Link>
      </div>
      <div className="nav-search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit">
            <BiSearchAlt2 className="search-icon" />
          </button>
        </form>
      </div>
    </nav>
  );
}
