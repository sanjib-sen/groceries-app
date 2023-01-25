import { Container, Button } from "react-bootstrap";
import { useUser } from "@auth0/nextjs-auth0/client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
export default function Header() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <h2>The Groceries App</h2>
          </Navbar.Brand>
          <Nav className="ms-auto">
            {user && !isLoading && !error ? (
              <NavDropdown
                drop="down-centered"
                title={
                  user.picture ? (
                    <Image
                      unoptimized
                      width={60}
                      height={60}
                      src={user.picture}
                      alt="Profile"
                      style={{ borderRadius: "100px", overflow: "hidden" }}
                    />
                  ) : (
                    user.name
                  )
                }
              >
                <NavDropdown.Item href="/api/auth/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button className="ms-auto align-center" href="/api/auth/login">
                Login
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
