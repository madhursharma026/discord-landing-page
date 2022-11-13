import styles from '../../styles/ImageContent.module.css'
import { useEffect, useState } from "react";

export default function ImageContent2() {
    const [loading, setLoading] = useState(false)
    const [windowHeightOK, setWindowHeightOK] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setWindowHeightOK(window.pageYOffset > 1250)
            );
        }
    }, []);

    if (windowHeightOK) {
        const interval = setInterval(() => {
            setLoading(true)
        }, 200)
    }
    return (
        <div className="container-xl px-4">
            <div className={`row ${loading ? styles.animationStyle2 : styles.animationStyle1}`} style={{ marginTop: '160px', marginBottom: '160px' }}>
                <div className="col-md-6">
                    <img src='https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg' alt="#ImgNotFound" className="w-100" />
                </div>
                <div className="col-md-4 offset-xl-2">
                    <h2 className={`${styles.imagesHeading}`}>From few to a fandom</h2>
                    <div className={`${styles.imagesSubHeading}`}>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</div>
                </div>
            </div>
        </div>
    )
}
