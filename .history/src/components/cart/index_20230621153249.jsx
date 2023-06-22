// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const {} = useSelector(rootReducer => rootReducer.cartReducer)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
