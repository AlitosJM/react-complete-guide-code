import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const url = 'https://react-http-2a442-default-rtdb.firebaseio.com/meals.jason';

  useEffect(()=>{
    const fetchMeals = async (url) =>{
      const response = await fetch(url);
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
    };

    fetchMeals(url);

  },[]);

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