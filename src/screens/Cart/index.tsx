import {View} from 'react-native';
import {useAppSelector} from '../../redux/Hooks/index';

const Cart = (): JSX.Element => {
  const cartData = useAppSelector(state => state.cart.data);
  console.log(cartData, 'ini data cart');
  return <View />;
};

export default Cart;
