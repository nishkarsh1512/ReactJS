import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_MEALS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first boom i vee uss',
  },
  {
    id: 'p2',
    price: 62,
    title: 'My second Book',
    description: 'The second boom i vee uss',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_MEALS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
