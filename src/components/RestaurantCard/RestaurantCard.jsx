import styles from './RestaurantCard.module.css'
import Link from 'next/link'
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const RestaurantCard = ({slug, name, picture, isNew, location}) => {
    return (
        <article className={styles.card}>
            <Link href={`/restaurant/${slug}`} key={slug} >
            {isNew && <span className={styles.new}>Nouveau</span>}
            <img className={styles.cardImg} src={picture}></img>
            </Link>
            <div className={styles.cardBanner}>
                <Link href={`/restaurant/${slug}`} key={slug} >
                <div>
                    <span>{name}</span>
                    <span>{location}</span>
                </div>
                </Link>
                <FavoriteButton/>
            </div>
        </article>
    );

}

export default RestaurantCard;