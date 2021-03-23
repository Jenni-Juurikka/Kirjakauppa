import kirjakauppa from '../images/kirjakauppa.png';

function Navbari() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">
      
      
      <a className="navbar-brand" href="#">
        <img src={kirjakauppa} style={{height: 70}} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Etsi tuotteita..."
            aria-label="Search"
          />
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
            Hae
          </button>
        </form>
    </nav>
  );
}
export default Navbari;
