import styles from '../../styles/ImageContent.module.css'
import { useEffect, useState } from "react";

export default function ImageContent1() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading(true)
        }, 200)
    });
    return (
        <div className="container-xl px-4">
            <div className={`row ${loading ? styles.animationStyle2 : styles.animationStyle1}`} style={{ marginTop: '160px', marginBottom: '160px' }}>
                <div className="col-md-6">
                    <img src='https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found-300x169.jpg' alt="#ImgNotFound" className="w-100" />
                </div>
                <div className="col-md-4 offset-xl-2">
                    <h2 className={`${styles.imagesHeading}`}>Create an invite-only place where you belong</h2>
                    <div className={`${styles.imagesSubHeading}`}>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</div>
                </div>
            </div>
        </div>
    )
}
