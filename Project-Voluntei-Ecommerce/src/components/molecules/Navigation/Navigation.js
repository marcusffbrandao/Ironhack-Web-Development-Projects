import React from 'react';
import { Form, Image, Nav, Navbar, Dropdown } from 'react-bootstrap';
import './Navigation.css';

export default function Navigation({ logoutUser, userID }) {
  return (
    <div>
      <div className="navigation-container">
        <Navbar
          collapseOnSelect
          className="navigation"
          bg="dark"
          variant="dark"
          style={{ color: 'black' }}
        >
          <Navbar.Brand href="/">
            <Image
              className="nav-logo-voluntei"
              src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FlogoYellowSmallRight.jpg?alt=media&token=d7a77be0-2ea2-4be8-96e2-98fde99ab905"
              rounded
            />
            <Image
              className="nav-logo"
              src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FlogoYellowSmall.jpg?alt=media&token=62aeec02-f0c0-4e14-81b1-c389f3a3743b"
              rounded
            />
          </Navbar.Brand>
          <Nav className="mr-auto" />
          <Form inline>
            <a href="/" className="navigation-buttons-icons">
              <Image
                className="navigation-icons"
                src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FmagnifyingGlass.svg?alt=media&token=767a0fbd-1ed8-4448-90cb-74a90070f46b"
                rounded
              />
            </a>
            <Dropdown alignRight className="nav-user-button">
              <Dropdown.Toggle
                variant="warning"
                id="dropdown-basic"
                className="nav-user-button"
              >
                <Image
                  className="navigation-icons"
                  src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FprofileUser.svg?alt=media&token=4773f261-845a-4ea0-bc88-1aa53cbf796a"
                  rounded
                />
              </Dropdown.Toggle>
              {userID ?
                <Dropdown.Menu>
                  <Dropdown.Item className="navbar-user-links" href="/user">
                    Minha conta
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="navbar-user-links"
                    onClick={logoutUser}
                  >
                    <strong>Sair</strong>
                  </Dropdown.Item>
                </Dropdown.Menu>
                :
                <Dropdown.Menu>
                  <Dropdown.Item className="navbar-user-links" href="/user">
                    Entrar
                  </Dropdown.Item>
                </Dropdown.Menu>
              }
            </Dropdown>
            <a href="/cart" className="navigation-buttons-icons">
              <Image
                className="navigation-icons"
                src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FshoppingCart.svg?alt=media&token=99713b56-bdd1-4789-a00f-1695b39a9b20"
                rounded
              />
            </a>
          </Form>
        </Navbar>
      </div>
    </div>
  );
}
