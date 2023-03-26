import Card from '../UI/Card'
import classes from './ProductItem.module.css'
import cartActions from '../../store/cart-slice.js'
import { useDispatch } from 'react-redux'

const ProductItem = (props) => {
  const { title, price, description, id } = props
  console.log(title)
  const dispatch = useDispatch()

  const addToCartHandler = () => {
    console.log(cartActions.actions)
    dispatch(
      cartActions.actions.addItemToCart({
        id,
        title,
        price,
      }),
    )
    console.log(cartActions)
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
