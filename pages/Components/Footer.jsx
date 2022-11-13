import { FaInstagram, FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div style={{ background: "#23272A" }}>
                <div className="container-xl px-4" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg mt-4">
                            <h3 style={{ fontWeight: "800", textRendering: "geometricPrecision", fontFamily: "Whitney, Helvetica, Neue, elvetica, Arial, sans-serif", color: "#5865F2" }}>IMAGINE A PLACE</h3>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt="#ImgNotFound" width="30px" /><span className="text-white"> English, USA</span>
                            <div className="row mt-3">
                                <div className="col-3"><FaTwitter className="text-white" style={{ width: "20px", height: "20px" }} /></div>
                                <div className="col-3"><FaInstagram className="text-white" style={{ width: "20px", height: "20px" }} /></div>
                                <div className="col-3"><FaFacebookSquare className="text-white" style={{ width: "20px", height: "20px" }} /></div>
                                <div className="col-3"><FaYoutube className="text-white" style={{ width: "20px", height: "20px" }} /></div>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg text-white mt-4">
                            <ul style={{ listStyleType: "none" }}>
                                <li style={{ color: "#2945E6" }}>Product</li>
                                <li>Download</li>
                                <li>Nitro</li>
                                <li>Status</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg text-white mt-4">
                            <ul style={{ listStyleType: "none" }}>
                                <li style={{ color: "#2945E6" }}>Company</li>
                                <li>About</li>
                                <li>Jobs</li>
                                <li>Branding</li>
                                <li>Newsroom</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg text-white offset-lg-0 offset-md-4 mt-4">
                            <ul style={{ listStyleType: "none" }}>
                                <li style={{ color: "#2945E6" }}>Resources</li>
                                <li>College</li>
                                <li>Support</li>
                                <li>Safety</li>
                                <li>Blog</li>
                                <li>Feedback</li>
                                <li>Developers</li>
                                <li>StreamKit</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg text-white mt-4">
                            <ul style={{ listStyleType: "none" }}>
                                <li style={{ color: "#2945E6" }}>Policies</li>
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>Cookie Settings</li>
                                <li>Guidelines</li>
                                <li>Acknowledgements</li>
                                <li>Licenses</li>
                                <li>Moderation</li>
                            </ul>
                        </div>
                    </div>
                    <hr style={{ color: "#0B5ED7", height: "2px" }} />
                    <div className="row mt-4">
                        <div className="col-6"><img src="https://images.squarespace-cdn.com/content/v1/5693941be0327c8c42366971/1590748544554-6GAJCFGCVUW55CMHFV1X/discord-logo-white-wordmark-1.png" alt="#ImgNotFound" width="120px" height='30px' /></div>
                        <div className="col-6"><button type="button" class="btn btn-light d-flex" style={{ borderRadius: "20px", fontSize: "15px", float:"right" }}>Open Discord</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}
