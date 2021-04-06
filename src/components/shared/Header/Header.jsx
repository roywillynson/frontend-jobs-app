import Link from 'next/link';
import NavLink from '../NavLink/NavLink';

const Header = () => {
  return (
    <header>
      <nav className="navbar is-transparent">
        <div className="container">
          <div className="navbar-brand">
            {/*
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            */}
            <div
              className="navbar-burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            id="navbarExampleTransparentExample"
            className="navbar-menu has-text-weight-medium"
          >
            <div className="navbar-end">
              <NavLink className="navbar-item" href="/">
                Inicio
              </NavLink>

              <NavLink className="navbar-item" href="/poster">
                Postear Empleo
              </NavLink>
              <NavLink className="navbar-item" href="/jobs">
                Empleos
              </NavLink>

              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <Link href="/login">
                      <a className="bd-tw-button button is-primary">
                        <span>Login</span>
                      </a>
                    </Link>
                  </p>
                  <p className="control">
                    <Link href="/register">
                      <a
                        className="button is-primary is-outlined"
                        href="https://github.com/jgthms/bulma/releases/download/0.9.1/bulma-0.9.1.zip"
                      >
                        <span>Sign Up</span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
