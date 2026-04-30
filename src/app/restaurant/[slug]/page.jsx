import styles from "./page.module.css";
import { restaurants } from "@/data/restaurants.json";
import Image from 'next/image'
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import MenuItem from "@/app/restaurant/[slug]/_component/MenuItem/MenuItem";
import { notFound } from "next/navigation";

export default async function RestaurantDetail({ params }){
    const { slug } = await params;
    const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);
    
    if(!restaurant){
        return notFound();
    }

    return(
            <>
            <div className={styles.heroImage}>
                <Image src={restaurant.image} alt={restaurant.name}  fill priority className={styles.image}/>
            </div>
            <div className={styles.container}>
                <div className={styles.restaurantHeader}>
                    <h2>{restaurant.name}</h2>
                    <FavoriteButton/>
                </div>
                <div className={styles.menuContainer} >
                    <h3>ENTRÉES</h3>
                    {restaurant.menu.entrées.map((m) => (
                        <MenuItem  item={m}/>
                    ))}
                </div>
                <div className={styles.menuContainer}>
                    <h3>PLATS</h3>
                    {restaurant.menu.plats.map((m) => (
                        <MenuItem  item={m}/>
                    ))}
                </div>
                <div className={styles.menuContainer}>
                    <h3>DESSERTS</h3>
                    {restaurant.menu.desserts.map((m) => (
                        <MenuItem  item={m}/>
                    ))}
                </div>
                <button className={styles.cta}>Commander</button>
            </div>
        </>
    )
}