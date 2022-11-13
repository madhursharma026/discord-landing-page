import { useEffect, useState } from "react";
import styles from '../../styles/HeaderSection.module.css'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function JustChill() {
    const [loading, setLoading] = useState(false)
    const [windowHeightOK, setWindowHeightOK] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setWindowHeightOK(window.pageYOffset > 1850)
            );
        }
    }, []);

    if (windowHeightOK) {
        const interval = setInterval(() => {
            setLoading(true)
        }, 200)
    }
    return (
        <>
            <div style={{ background: "#F6F6F6" }}>
                <div className={`${loading ? styles.animationStyle2 : styles.animationStyle1}`}>
                    <div className="container-xl px-4 text-md-center" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
                        <h1 style={{ fontWeight: "800", textRendering: "geometricPrecision", fontFamily: "Whitney, Helvetica, Neue, elvetica, Arial, sans-serif" }}>Reliable tech for staying close</h1>
                        <div className={`${styles.sub_heading} mb-5`}>
                            Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                        </div>
                        <img src="https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg" alt="#ImgNotFound" className='w-100 mb-5' />
                        <h1 className='my-5' style={{ fontWeight: "800", textRendering: "geometricPrecision", fontFamily: "Whitney, Helvetica, Neue, elvetica, Arial, sans-serif" }}>Ready to start your journey?</h1>
                        <button type="button" className={`btn btn-primary`} style={{ fontSize: "20px", padding: "14px 26px", borderRadius: "28px", fontWeight: "600" }}>
                            <FontAwesomeIcon icon={faDownload} /> Download for Windows
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
