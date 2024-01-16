'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import { useLocalStorage } from "../useLocalStorage";


const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [token, setToken] = useLocalStorage('token', '');
  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem("token");
      window.location.reload();
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBrand href="/">Bandage</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        {pathname !== '/auth' && pathname !== '/auth/signup' && <><NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="me-2" href="/">Home</Link>
            <Link className="me-2" href="/product-list-page">Products</Link>
          </Nav>
        </NavbarCollapse>
          <Nav className="me-auto d-flex align-items-center">
            <Button className="me-3" variant="light" onClick={token ? logout : undefined}><i className="bi bi-person-fill text-primary me-1" ></i><strong className="text-primary" >{token ? "Logout" : "Login / Register"}</strong></Button>
            <Link className="me-3" href="/shopping-cart"><i className="bi bi-cart "></i><small className="mx-1">1</small></Link>
            <Link className="me-3" href="/orders"><i className="bi bi-box-fill "></i><small className="mx-1" >2</small></Link>
          </Nav>
        </>
        }
      </Container>
    </Navbar>
  );
}

export default Navigation;