import Image from "next/image";
import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function communityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One Shared Passion : <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join Our Community & Share your favourite Recipes</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>
        <ul className={classes.perks}>
         <li>
            <Image src={mealIcon} alt="A delicious Meal" />
            <p>Share & Discover recipes</p>
         </li>
         <li>
            <Image src={communityIcon} alt="A crowd of people , Cooking" />
            <p>Find new Friends & like-minded People</p>
         </li>
         <li>
            <Image src={eventsIcon} alt="A crowd of People at a cooking event " />
            <p>Participate in Cooking events</p>
         </li>
        </ul>

      </main>
    </>
  );
}
