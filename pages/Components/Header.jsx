import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'
import React, { useEffect, useState } from "react";
import styles from '../../styles/Header.module.css'

function Header() {
    const [loading, setLoading] = useState(false)
    const [windowHeight10OK, setWindowHeight10OK] = useState(false);
    const [windowHeight0OK, setWindowHeight0OK] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setWindowHeight10OK(window.pageYOffset > 80)
                if (window.scrollY < (80)) {
                    console.log("Madhur Shar,a")
                    setLoading(false)
                }
            }
            );
        }
    });

    useEffect(() => {
        if (windowHeight10OK) {
            setLoading(true)
        }
    });


    return (
        <Navbar className={`py-3 fixed-top ${loading ? styles.animationStyle2 : styles.animationStyle1}`} expand="lg" style={{ background: "#404EED" }}>
            <Container>
                <Navbar.Brand>
                    <Link href='/'>
                        <img src="https://images.squarespace-cdn.com/content/v1/5693941be0327c8c42366971/1590748544554-6GAJCFGCVUW55CMHFV1X/discord-logo-white-wordmark-1.png" alt="#ImgNotFound" width="120px" height='30px' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ color: "white", background: "white" }} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className='text-white'><b>Download</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-white'><b>Nitro</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-white'><b>Discover</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-white'><b>Safety</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-white'><b>Support</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-white'><b>Blog</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-white'><b>Careers</b></Nav.Link>
                    </Nav>
                    <button type="button" class="btn btn-light d-flex" style={{ borderRadius: "20px", fontSize: "15px" }}>Open Discord</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;