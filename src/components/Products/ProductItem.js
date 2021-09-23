import React, {useContext} from 'react';
// import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';
// import { ProductsContext } from '../../context/products-context';
import { useStore } from '../../hooks-store/store';

const ProductItem = React.memo( props => {
  // const dispatch = useDispatch();
  // const toggleFav = useContext(ProductsContext);
  console.log("Rendering...");
  const dispatch = useStore(true)[1];

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    // toggleFav.toggleFav(props.id);
    dispatch('TOGGLE_FAV',props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
}
);

export default ProductItem;
