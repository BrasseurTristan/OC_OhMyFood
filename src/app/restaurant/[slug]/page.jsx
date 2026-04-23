import styles from "./page.module.css";
import { restaurants } from "@/data/restaurants.json";

export default async function RestaurantDetail({ params }){
    const { slug } = await params;
    const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);

    if(!restaurant){
        return(
             <div className={styles.container}>
                <h1>Restaurant non trouvée</h1>
                <p>Ce restaurant n&apos;existe pas ou a été supprimée.</p>
            </div>
        );
    }

    return(
        
    )
}