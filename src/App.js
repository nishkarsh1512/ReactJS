import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import { useSelector, useDispatch } from 'react-redux'
import { React, useEffect, Fragment } from 'react'
import { uiActions } from './store/ui-slice'
import Notification from './components/UI/Notification'

let isInitial = true
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)
  const dispatch = useDispatch()
  console.log(uiActions)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending.....',
          message: 'Sending cart data',
        }),
      )
      const response = await fetch(
        'https://react20-85c59-default-rtdb.firebaseio.com/orders.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        },
      )

      if (!response.ok) {
        throw new Error('sending cart data failed')
      }

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Sent.....',
          message: 'Sent cart data',
        }),
      )

      // const responseData = await response.json()
    } //////////////////////////////////////////
    if (isInitial) {
      isInitial = false
      return
    }
    sendCartData().catch((error) => {
      console.log(error)
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'error.....',
          message: 'SError data',
        }),
      )
    })
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  )
}

export default App
