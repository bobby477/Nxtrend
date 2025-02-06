// Write your code here

import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const price = () => {
        let total = 0

        for (const i of cartList) {
          total = total + i.price
        }

        return total
      }

      return (
        <div className="summary-container">
          <h1 className="head">
            Order Total: <span className="price">Rs {price()}</span>
          </h1>
          <p className="para">{cartList.length} items in cart</p>
          <button className="btn">Checkout</button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
