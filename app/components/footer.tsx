import Link from "next/link";
import SocialButton from "./social-button";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    < >
      <div className="d-flex justify-content-around bg-light align-item-center">
        <div className="w-40 d-flex justify-content-around  ">
          <Link className="navbar-brand" style={{ fontSize: 'x-large' }} href="#">
            Bandage
          </Link>
        </div>
        <div className="w-40  d-flex justify-content-around align-item-center">
          <SocialButton />
        </div>
      </div>
      <footer className="bd-footer bg-white">
        <div className="container-md py-5">
          <div className="row">

            <div className="col-6 col-lg-2 mb-3">
              <h5>Company Info</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">About Us</a></li>
                <li className="mb-2"><a href="#">Carrier</a></li>
                <li className="mb-2"><a href="#">We are Hiring</a></li>
                <li className="mb-2"><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Legal</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">About Us</a></li>
                <li className="mb-2"><a href="#">Carrier</a></li>
                <li className="mb-2"><a href="#">We are Hiring</a></li>
                <li className="mb-2"><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Features</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">User Analytics</a></li>
                <li className="mb-2"><a href="#">Business Marketing</a></li>
                <li className="mb-2"><a href="#">Live Chat</a></li>
                <li className="mb-2"><a href="#">Unlimited Support</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#">Ios & Android</a></li>
                <li className="mb-2"><a href="#">Watch a demo</a></li>
                <li className="mb-2"><a href="#">Customers</a></li>
                <li className="mb-2"><a href="#">Api</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Get in Touch</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <form className="d-flex" role="search">
                    <input className="form-control me-2" style={{ minWidth: '200px' }} type="text" placeholder="Email" />
                    <button className="btn btn-outline-success" type="submit">Subscribe</button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className='text-center p-4 bg-light'>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='#'>
          Bandage.com
        </a>
      </div>
    </>
  );
}

export default Footer;