import styles from '../../styles/ContentImage.module.css'
import { useEffect, useState } from "react";

export default function ContentImage1() {
    const [loading, setLoading] = useState(false)
    const [windowHeightOK, setWindowHeightOK] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setWindowHeightOK(window.pageYOffset > 550)
            );
        }
    }, []);

    if (windowHeightOK) {
        const interval = setInterval(() => {
            setLoading(true)
        }, 200)
    }
    return (
        <div style={{ background: "#F6F6F6" }}>
            <div className="container-xl px-4" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
                <div className={`row ${loading ? styles.animationStyle2 : styles.animationStyle1}`}>
                    <div className="col-md-4">
                        <h2 className={`${styles.imagesHeading}`}>Where hanging out is easy</h2>
                        <div className={`${styles.imagesSubHeading}`}>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</div>
                    </div>
                    <div className="col-md-6 offset-xl-2">
                        <img src='https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg' alt="#ImgNotFound" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}
