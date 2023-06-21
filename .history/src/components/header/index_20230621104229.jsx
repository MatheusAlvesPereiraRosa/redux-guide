import { useState } from "react";

// Components
import Cart from "../cart/index";
import { useSelector, useDispatch } from "react-redux";
import UserActionTypes from "../../redux/user/action-types";
import { loginUser } from "../../redux/user/actions";
import { logoutUser } from "../../redux/user/actions";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  console.log(currentUser);

  const handleLoginClick = () => {
    dispatch({ loginUser });
  };

  const handleLogoutClick = () => {
    dispatch({ logoutUser });
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
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
