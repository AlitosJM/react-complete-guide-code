import MealItemForm from './MealItemForm';
import clasess from './MealItem.module.css';

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`

    return(
        <li className={clasess.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={clasess.description}>
                    {props.description}
                </div>
                <div className={clasess.price}>
                    {price}
                </div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    );

};

export default MealItem;