"use client"
import {useFormState} from "react-dom"
import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function ShareMealPage() {

  const [state, formAction] = useFormState(shareMeal, {message : null})
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share Your <span className={classes.highlight}>Favourite Meal</span>
        </h1>
        <p>Or Any Other Meal You Feels Need Sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" required />
            </p>
            <p>
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" name="summary" id="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              name="instructions"
              id="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
