export const Navbar = ({ username }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary m-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="favicon.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />{" "}
          Accounts Central
        </a>
        <div id="section-left" className="collapse navbar-collapse">
          <ul className="navbar-nav fs-5">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Overview
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Accounts
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Offers
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Investments
              </a>
            </li>
          </ul>
        </div>

        <div id="section-right">
          <ul className="navbar-nav fs-3">
            <li className="nav-item mx-1">
              <a className="nav-link bi bi-gear" href="#">
              </a>
            </li>

            <li className="nav-item mx-1">
              <a className="nav-link bi bi-envelope" href="#"></a>
            </li>

            <li className="nav-item mx-1">
              <a className="nav-link bi bi-bell" href="#"></a>
            </li>

            <li className="nav-item dropdown-center mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle"></i>
              </a>
              
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};
