'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";


const Navigation = () => {

  const router = useRouter();
  let token = '';
  if (typeof 'process' === 'undefined') {
    token = localStorage.getItem('token') || '';
  }
  const logout = () => {
    if (typeof 'localStorage' !== 'undefined') {
      localStorage.removeItem("token");
      router.push('/auth');
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand href="/">Bandage</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="me-2" href="/">Home</Link>
            <Link className="me-2" href="/product-list-page">Shop</Link>
            <Link className="me-2" href="#">Contact</Link>
            <Link className="me-2" href="#link">About</Link>
          </Nav>
        </NavbarCollapse>
        <Nav className="me-auto d-flex align-items-center">
          <Button className="me-3" variant="light" onClick={token ? logout : undefined}><i className="bi bi-person-fill text-primary me-1" ></i><strong className="text-primary" >{token ? "Logout" : "Login / Register"}</strong></Button>
          <Link className="me-3" href="/shoping-cart"><i className="bi bi-cart "></i><small className="mx-1">1</small></Link>
          <Link className="me-3" href="/orders"><i className="bi bi-box-fill "></i><small className="mx-1" >2</small></Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;