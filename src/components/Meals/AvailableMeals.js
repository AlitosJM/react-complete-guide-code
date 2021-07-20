import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const url = 'https://react-http-2a442-default-rtdb.firebaseio.com/meals.json';

  useEffect(()=>{
    const fetchMeals = async (url) =>{
      console.log("inside of fetchMeals");
      const response = await fetch(url);
      if(!response.ok){
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();

      const loadedMeals = [];

      for(const key in responseData){
        loadedMeals.push({
          id:key,
          name:responseData[key].name,
          description:responseData[key].description,
          price:responseData[key].price,          
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };
    
    console.log("outside 1 of fetchMeals");
    fetchMeals(url).catch((error)=>{
      setIsLoading(false);
      setHttpError(error.message);  
    });
    console.log("outside 2 of fetchMeals");
  },[]);

  if(isLoading){
    return (
    <section className={classes.MealsLoading}>
      <p>Loading...</p>      
    </section>);
  }

  if(httpError){
    return (
      <section className={classes.MealsErrors}>
        <p>{httpError}...</p>      
      </section>);
  }

  const mealsList =  meals.map( meal => (
    <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
    );

    return (
        <section className={classes.meals}>
          <Card>
              <ul>
                  {mealsList}
              </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;