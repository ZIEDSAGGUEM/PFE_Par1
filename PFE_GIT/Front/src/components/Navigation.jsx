import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

function Navigation() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand className=" text-white">X-Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className=" text-white"
        />
        <Navbar.Collapse id="basic-navbar-nav" className=" text-white">
          <Nav className="ms-auto ">
            {/*Si Utilisateur Existe*/}
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link className=" text-white">Connecter</Nav.Link>
              </LinkContainer>
            )}

            {user && (
              <NavDropdown
                title={
                  <>
                    <img
                      src={user.picture}
                      style={{
                        width: 40,
                        height: 40,
                        marginRight: 10,
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                      alt="User Avatar"
                    />
                    <span className="text-white">{user.name}</span>
                  </>
                }
                className=" bg-secondary rounded-5"
                id="basic-nav-dropdown"
              >
                {" "}
                {user.isAmin && (
                  <>
                    <LinkContainer to="/dashboard">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/new Product">
                      <NavDropdown.Item>Créer un produit</NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
                {!user.isAmin && (
                  <>
                    <LinkContainer to="/cart">
                      <NavDropdown.Item>Votre Carte</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>Créer un produit</NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
                <Button
                  variant="danger"
                  onClick={handleLogout}
                  className="mx-auto d-block align-items-center w-75"
                >
                  Déconnecter
                </Button>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
