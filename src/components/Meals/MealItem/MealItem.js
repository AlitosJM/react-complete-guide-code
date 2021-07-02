import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import clasess from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addItemToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

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
                <MealItemForm onAddToCart={addItemToCartHandler}/>
            </div>
        </li>
    );

};

export default MealItem;