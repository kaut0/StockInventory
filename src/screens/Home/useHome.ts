import * as React from 'react';
import {GetRequest} from '../../constant/Request';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useAppSelector, useAppDispatch} from '../../redux/Hooks/index';
import {cartData} from '../../redux/Reducer/cartReducer';
const useHome = (): any => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const dataCart = useAppSelector(state => state.cart.data);
  const [data, setData] = React.useState<any | null>([]);
  const [getQuantyty, setQuantyty] = React.useState<any | null>([]);
  const getData = async () => {
    const response = await GetRequest('stock');
    const result = response.data;
    if (response.status === 200) {
      setData(result);
    }
  };
  const addToCart = (data: any, index: number) => {
    const itemSelect = {
      item_id: data.id,
      quantyty: getQuantyty[index],
    };
    dispatch(cartData(itemSelect));
    console.log(dataCart);
  };
  useFocusEffect(
    React.useCallback(() => {
      let isFocus = true;
      if (isFocus) {
        getData();
      }
      return () => (isFocus = false);
    }, []),
  );
  return [data, addToCart, getQuantyty, setQuantyty, dataCart];
};

export default useHome;
