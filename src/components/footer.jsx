import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 mx-3 border-top justify-content-sm-between justify-content-md-between justify-content-lg-between justify-content-xl-between">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; 2024 Weather App | Vijay Bansal
          </span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              target="_blank"
              className="text-body-secondary"
              href="https://www.instagram.com/itz_vijay_bansal/"
            >
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              target="_blank"
              className="text-body-secondary"
              href="https://www.facebook.com/people/Vijay-Bansal/pfbid0s2PyrZGASSnNbLWjtYtdMHXReds9JpaX1Wt8BstKDFfQx8Lrx3YqnwqWiUT5fYpjl/"
            >
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              target="_blank"
              className="text-body-secondary"
              href="https://github.com/VijayBansal2004"
            >
              <i class="bi bi-github"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              target="_blank"
              className="text-body-secondary"
              href="https://www.linkedin.com/in/vijay-bansal-319048249/"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
