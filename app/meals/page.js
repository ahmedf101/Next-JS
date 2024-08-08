import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { GetMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await GetMeals();
  return <MealsGrid meals={meals} />;
}

export default function mealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals Created{" "}
          <span className={classes.highlight}>By You</span>
        </h1>
        <p>Choose Your Favourite Recipe and Cook it Yourself</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}></main>
      <Suspense fallback={ <p className={classes.loading}>Fetching Meals...</p> }>
        <Meals />
      </Suspense>
    </>
  );
}
