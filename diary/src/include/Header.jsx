import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
    const loginState = useSelector((state) => state.loginSlice);
    return (
        <Navbar
            collapseOnSelect
            bg="primary"
            data-bs-theme="dark"
            className="bg-body-primary"
        >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">MAIN</Nav.Link>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        {loginState.email ? (
                            <>
                                <NavDropdown title="DIARY" className="bg-body-primary" bg="primary">
                                    <NavDropdown.Item href="/diary/list">LIST</NavDropdown.Item>
                                    <NavDropdown.Item href="/diary/add">ADD</NavDropdown.Item>
                                    {/* <NavDropdown.Item href="/diary/read/3">READ</NavDropdown.Item>
                            <NavDropdown.Item href="/diary/modify/1">MODIFY</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">예비용</NavDropdown.Item> */}
                                </NavDropdown>
                                <NavDropdown
                                    title="PRODUCTS"
                                    className="bg-body-primary"
                                    bg="primary"
                                >
                                    <NavDropdown.Item href="/product/list">LIST</NavDropdown.Item>
                                    <NavDropdown.Item href="/product/add">ADD</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">예비용</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <></>
                        )}
                    </Nav>
                    <Nav>
                        {!loginState.email ? (
                            <Link to={'/member/login'}>Login</Link>
                        ) : (
                            <Link to={'/member/logout'}>Logout</Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}