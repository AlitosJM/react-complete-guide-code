import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart-slice';
import { uiActions } from './store/ui-slice';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  // npm install --save react@latest react-dom@latest
//   useEffect(() => {
//     const sendCartData = async() => {
//       dispatch(uiActions.showNotificacion({
//         status: 'pending',
//         title: 'Sending...',
//         message: 'Sending cart data',        
//       }));
//       const url = 'https://react-http-2a442-default-rtdb.firebaseio.com/cart.json';
//       const response = await fetch(url,{
//         method:'PUT',
//         body: JSON.stringify(cart)
//       });
      
//       if(!response.ok){
//         throw new Error("Sending data failed!");
//       }
//      // const responseData = await response.json();
     
//      dispatch(uiActions.showNotificacion({
//        status: 'succes',
//        title: 'Success!',
//        message: 'Sent cart data successfully!',
//       }));
    
//     };
    
//     if(isInitial){
//       isInitial = false;
//       return;
//     }
    
//     sendCartData().catch( error => {
//       dispatch(uiActions.showNotificacion({
//         status: 'error',
//         title: 'Error!',
//         message: 'Sending cart data failed!',
//       }));
//     });

// }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
