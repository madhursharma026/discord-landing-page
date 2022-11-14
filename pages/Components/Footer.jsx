import Link from "next/link";
import styles from '../../styles/Footer.module.css'
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaSpotify, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div style={{ background: "#000000" }}>
                <div className="container-xl" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                    <img src="https://images.squarespace-cdn.com/content/v1/5693941be0327c8c42366971/1590748544554-6GAJCFGCVUW55CMHFV1X/discord-logo-white-wordmark-1.png" alt="#ImgNotFound" width="120px" height='30px' style={{ marginLeft: "30px" }} />
                    <div className="row mb-5">
                        <div className="col-6 col-lg mt-4">
                            <ul style={{ listStyleType: "none" }}>
                                <li className="mb-2 mt-1 text-white"><h6><b>Company</b></h6></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Mozilla Manifesto</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Press Center</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Corporate Blog</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Careers</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Contact</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Donate</Link></li>
                            </ul >
                        </div>
                        <div className="col-6 col-lg mt-4 text-white">
                            <ul style={{ listStyleType: "none" }}>
                                <li className="mb-2 mt-1 text-white"><h6><b>Resources</b></h6></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Privacy Hub</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Browser Comparison</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Brand Standards</Link></li>
                            </ul >
                        </div>
                        <div className="col-6 col-lg mt-4 text-white">
                            <ul style={{ listStyleType: "none" }}>
                                <li className="mb-2 mt-1 text-white"><h6><b>Company</b></h6></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Support</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Product Help</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>File a Bug</Link></li>
                            </ul >
                        </div>
                        <div className="col-6 col-lg mt-4 text-white">
                            <ul style={{ listStyleType: "none" }}>
                                <li className="mb-2 mt-1 text-white"><h6><b>Company</b></h6></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Developers</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Developer Edition</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Beta</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Beta for Android</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Nightly</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Nightly for Android</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Enterprise</Link></li>
                                <li className="mb-2 mt-1"><Link href="/" className={`${styles.footer_options}`}>Tools</Link></li>
                            </ul >
                        </div>
                        <div className="col-12 col-lg mt-4 text-white">
                            <ul style={{ listStyleType: "none" }}>
                                <li className="mb-2 mt-1 text-white"><h6><b>Follow @Mozilla</b></h6></li>
                                <FaTwitter className="text-white mx-2" style={{ width: "20px", height: "20px" }} />
                                <FaInstagram className="text-white mx-2" style={{ width: "20px", height: "20px" }} />
                                <FaLinkedin className="text-white mx-2" style={{ width: "20px", height: "20px" }} />
                                <FaTiktok className="text-white mx-2" style={{ width: "20px", height: "20px" }} />
                                <FaSpotify className="text-white mx-2" style={{ width: "20px", height: "20px" }} />
                            </ul >
                            <ul className="mt-5" style={{ listStyleType: "none" }}>
                                <li className="mb-2 mt-1 text-white"><h6><b>Follow @Firefox</b></h6></li>
                                <FaTwitter className="text-white mx-2" style={{ width: "20px", height: "20px" }} />
                                <FaInstagram className="text-white mx-2" style={{ width: "20px", height: "20px" }} />
                                <FaYoutube className="text-white mx-2" style={{ width: "20px", height: "20px" }} />
                            </ul >
                        </div>
                    </div >
                    <hr style={{ height: '2px', color: "#0B5ED7" }} className='mx-4' />
                    <div className="row">
                        <div className="col-md-3 order-md-2">
                            <ul style={{ listStyleType: "none" }}>
                                <li><Link href="/" className={`${styles.footer_options_second}`}>Language</Link></li>
                                <select className="form-control mt-2" style={{ maxWidth: "200px" }}>
                                    <option value="">English</option>
                                    <option value="">Arabic</option>
                                    <option value="">Hindi</option>
                                    <option value="">Italian</option>
                                </select>
                            </ul>
                        </div>
                        <div className="col-md-9">
                            <ul style={{ listStyleType: "none" }}>
                                <li style={{ display: "inline" }}><Link href="/" className={`${styles.footer_options_second}`}>Website Privacy Notice</Link></li>
                                <li style={{ display: "inline" }} className="px-2"><Link href="/" className={`${styles.footer_options_second}`}>Cookies</Link></li>
                                <li style={{ display: "inline" }} className="px-2"><Link href="/" className={`${styles.footer_options_second}`}>Legal</Link></li>
                                <li style={{ display: "inline" }} className="px-2"><Link href="/" className={`${styles.footer_options_second}`}>Community Participation Guidelines</Link></li>
                                <li style={{ display: "inline" }} className="px-2"><Link href="/" className={`${styles.footer_options_second}`}>About this site</Link></li>
                                <p className="mt-3 text-white" style={{ fontSize: "14px" }}>Visit <span className={`${styles.footer_options_second}`}>Mozilla Corporation’s</span> not-for-profit parent, the  <span className={`${styles.footer_options_second}`}>Mozilla Foundation.</span></p>
                                <p className="text-white" style={{ fontSize: "14px", marginTop: "-15px" }}>Portions of this content are ©1998–2022 by individual mozilla.org contributors. Content available under a  <span className={`${styles.footer_options_second}`}>Creative Commons license.</span></p>
                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
