import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from "react";
import styles from '../../styles/Header.module.css';

function Header() {

    const [position, setPosition] = useState("")
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset
            setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <Navbar className={`py-3 fixed-top ${visible ? styles.animationStyle1 : styles.animationStyle2}`} expand="lg" style={{ background: "#404EED" }}>
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



