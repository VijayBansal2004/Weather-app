import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav
        style={{
          background:
            "radial-gradient(919px at 1.7% 6.1%, rgb(41, 58, 76) 0%, rgb(40, 171, 226) 100.2%)",
        }}
        className="navbar border-bottom border-body "
      >
        <div className="container-fluid flex  justify-content-center justify-content-sm-start justify-content-md-start justify-content-lg-start justify-content-xl-start">
          <a className="navbar-brand fw-bolder text-light ">
            &lt;/Weather App&gt;
          </a>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              //   onChange={(e) => {
              //     setSearch(e.target.value);
              //   }}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </>
  );
};
