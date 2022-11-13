import styles from '../../styles/HeaderSection.module.css'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HeaderSection() {

    return (
        <>
            <div className='px-lg-0 px-4' style={{ background: "url('https://theme.zdassets.com/theme_assets/678183/b7e9dce75f9edb23504e13b4699e208f204e5015.png')", backgroundRepeat: "no-repeat", backgroundSize: "100% 550px" }}>
                <h1 className={`text-lg-center ${styles.main_heading}`} style={{ fontFamily: "Whitney, Helvetica, Neue, elvetica, Arial, sans-serif", fontWeight: '800', color: "white" }}>IMAGINE A PLACE...</h1>
                <div className={`text-lg-center text-white ${styles.sub_heading}`}>
                    ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                </div>
                <div className={`row mt-5 ${styles.btn_here}`} style={{ maxWidth: "700px", width: "100%", paddingBottom: "120px" }}>
                    <div className="col-lg-6">
                        <button type="button" className={`btn btn-light ${styles.main_option_btn}`} style={{ fontSize: "20px", padding: "14px 26px", borderRadius: "28px", fontWeight: "600" }}>
                            <FontAwesomeIcon icon={faDownload} />
                            Download for Windows</button>
                    </div>
                    <div className="col-lg-6">
                        <button type="button" className={`btn btn-dark ${styles.main_option_btn}`} style={{ fontSize: "20px", padding: "14px 26px", borderRadius: "28px", fontWeight: "600" }}>Open Discord in your browser</button>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </>
    );
}

export default HeaderSection;