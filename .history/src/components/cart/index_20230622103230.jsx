// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";

import CartItem from "../cart-item";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const {products} = useSelector(rootReducer => rootReducer.cartReducer)

  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map(product => <CartItem product={product}></CartItem>)}

        <Styles.CartTotal>{productsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;