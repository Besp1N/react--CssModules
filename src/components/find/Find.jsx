import styles from './Find.module.css';
import {Navigation, Pagination, Scrollbar, Ally} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

const Find = () => {
    return (
        <div className={styles.find}>
            <div className={styles.heading}>
                <h1>Find Your Drive</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore the world's largest car sharing marketplace</span>
                    </p>
                </div>
            </div>
            <div className={styles.slider}>

            </div>
        </div>
    )
}

export default Find;