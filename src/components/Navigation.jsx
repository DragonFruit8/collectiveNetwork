import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Collective Network</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 d-flex justify-content-between">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/status">Status</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Take Action
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/submit">Submit Family</Link></li>
                <li><Link className="dropdown-item" to="/families">View Families</Link></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex flex-column flex-lg-row gap-2">
            <a
              href="https://ko-fi.com/terranovare/tiers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success btn-sm no-wrap"
            >
              <i className="fas fa-coffee me-1"></i>
              Ko-Fi
            </a>
            <a
              href="https://ko-fi.com/terranovare"
              className="btn btn-danger btn-sm"
              target="_blank"
            >
              <i className="fas fa-heart me-1"></i>
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
