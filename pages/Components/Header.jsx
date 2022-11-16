import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from "react";
import styles from '../../styles/Header.module.css';

function Header() {

    const [visible, setVisible] = useState(true)
    const [position, setPosition] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.pageYOffset)
            let moving = window.pageYOffset
            setVisible(position > moving || position < 140);
            setPosition(moving)
            console.log(window.scrollTop)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <Navbar className={`py-2 fixed-top ${visible ? styles.animationStyle1 : styles.animationStyle2}`} expand="lg" style={{ background: "#FFFFFF" }}>
            <Container>
                <Navbar.Brand>
                    <Link href='/'>
                        <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625eb604bb8605784489d361_Discord-Logo%2BWordmark-Color%20(1).png" alt="#ImgNotFound" width="140px" height='40px' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ color: "black", background: "white" }} />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className={`me-auto my-2 my-lg-0 ${styles.navOptionBeforeLG}`}
                        navbarScroll
                    >
                        {/* <Nav.Link href="#action1" className='text-black' style={{fontSize:"17px"}}><b>Firefox Browsers</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-black' style={{fontSize:"17px"}}><b>Products</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-black' style={{fontSize:"17px"}}><b>Who You Are</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-black' style={{fontSize:"17px"}}><b>Innovation</b></Nav.Link> */}

                        <div class={`${styles.dropdown} px-2`}>
                            <span class={`${styles.dropbtn}`} style={{ fontSize: "17px", cursor: 'pointer' }}><b>Firefox Browsers</b></span>
                            <div class={`${styles.dropdownContent}`}>
                                <Link href="#">Link 1</Link>
                                <Link href="#">Link 2</Link>
                                <Link href="#">Link 3</Link>
                            </div>
                        </div>
                        <div class={`${styles.dropdown} px-2`}>
                            <span class={`${styles.dropbtn}`} style={{ fontSize: "17px", cursor: 'pointer' }}><b>Products</b></span>
                            <div class={`${styles.dropdownContent}`}>
                                <Link href="#">Link 1</Link>
                                <Link href="#">Link 2</Link>
                                <Link href="#">Link 3</Link>
                            </div>
                        </div>
                        <div class={`${styles.dropdown} px-2`}>
                            <span class={`${styles.dropbtn}`} style={{ fontSize: "17px", cursor: 'pointer' }}><b>Who You Are</b></span>
                            <div class={`${styles.dropdownContent}`}>
                                <Link href="#">Link 1</Link>
                                <Link href="#">Link 2</Link>
                                <Link href="#">Link 3</Link>
                            </div>
                        </div>
                        <div class={`${styles.dropdown} px-2`}>
                            <span class={`${styles.dropbtn}`} style={{ fontSize: "17px", cursor: 'pointer' }}><b>Innovation</b></span>
                            <div class={`${styles.dropdownContent}`}>
                                <Link href="#">Link 1</Link>
                                <Link href="#">Link 2</Link>
                                <Link href="#">Link 3</Link>
                            </div>
                        </div>
                    </Nav>
                    <div className={`${styles.navOptionBeforeLG}`}>
                        <button type="button" class={`btn btn-outline-primary d-flex px-4`} style={{ fontSize: "15px", border: "2px solid" }}><b>Download Firefox</b></button>
                    </div>

                    <Nav
                        className={`me-auto my-2 my-lg-0 ${styles.navOptionAfterLG}`}
                        navbarScroll
                    >
                        {/* <Nav.Link href="#action1" className='text-black' style={{fontSize:"17px"}}><b>Firefox Browsers</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-black' style={{fontSize:"17px"}}><b>Products</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-black' style={{fontSize:"17px"}}><b>Who You Are</b></Nav.Link>
                        <Nav.Link href="#action1" className='text-black' style={{fontSize:"17px"}}><b>Innovation</b></Nav.Link> */}
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button type="button" class={`btn btn-outline-primary d-flex px-4 ${styles.navOptionAfterLG}`} style={{ fontSize: "15px", border: "2px solid" }}><b>Download Firefox</b></button>
                        </div>
                        <hr />
                        <select class="form-select" style={{ fontSize: "17px", fontWeight: "600", border: "0", marginTop: "-10px" }}>
                            <option selected>Firefox Browsers</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <hr style={{ marginTop: "3px" }} />
                        <select class="form-select" style={{ fontSize: "17px", fontWeight: "600", border: "0", marginTop: "-10px" }}>
                            <option selected>Products</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <hr style={{ marginTop: "3px" }} />
                        <select class="form-select" style={{ fontSize: "17px", fontWeight: "600", border: "0", marginTop: "-10px" }}>
                            <option selected>Who You Are</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <hr style={{ marginTop: "3px" }} />
                        <select class="form-select" style={{ fontSize: "17px", fontWeight: "600", border: "0", marginTop: "-10px" }}>
                            <option selected>Innovation</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <hr style={{ marginTop: "3px" }} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;


