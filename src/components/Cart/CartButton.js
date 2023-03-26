import classes from './CartButton.module.css'
import { uiActions } from '../../store/ui-slice.js'
import { useDispatch, useSelector } from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)

  const toggleHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Car</span>
      <p className={classes.badge}>{cartQuantity}</p>
    </button>
  )
}

export default CartButton
