import { useState, useMemo } from "react";

// Components
import Cart from "../cart/index";
import { useSelector, useDispatch } from "react-redux";
import UserActionTypes from "../../redux/user/action-types";
import { loginUser } from "../../redux/user/actions";
import { logoutUser } from "../../redux/user/actions";

// Styles
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const productsCount = useSelector

  const dispatch = useDispatch();

  const productsCount = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [products]);

  console.log(currentUser);

  const handleLoginClick = () => {
    dispatch(loginUser({ name: "algo", email: "sbore@gmail" }));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        {products.length == 0 ? (
          <div onClick={handleCartClick}>Carrinho</div>
        ) : (
          <div onClick={handleCartClick}>Carrinho({productsCount})</div>
        )}
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
